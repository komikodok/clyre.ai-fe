import { ResponseError, StreamError } from "@/lib/utils/error";
import { apiClient } from "../api-client";
import { BASE_API_URL } from "../base-url";

type AgentStreamData = {
  ai_message: string;
  ux_actions?: any[];
};

export interface AgentStreamCallbacks {
  onToken: (token: string) => void;
  onEnd: (response: AgentStreamData) => void;
  onError: (error: { message: string; errorId: string | null }) => void;
}

export const agentService = {
  routeAgent: async (prompt: string, token: string) => {
    const response = await apiClient.post(
      "/api/agents/new",
      { prompt },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  },

  streamResponse: async (
    topic: string,
    prompt: string,
    token: string,
    signal: AbortSignal,
    callbacks: AgentStreamCallbacks,
  ) => {
    try {
      const response = await fetch(
        `${BASE_API_URL}/api/agents/stream/${topic}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ prompt }),
          signal,
        },
      );

      if (!response.ok) {
        const data = await response.json();

        throw new ResponseError(data.meta.message, data.meta.code);
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();

      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let boundaryIndex;
        while ((boundaryIndex = buffer.indexOf("\n\n")) !== -1) {
          const rawEvent = buffer.slice(0, boundaryIndex);
          buffer = buffer.slice(boundaryIndex + 2);

          const lines = rawEvent.split("\n");

          let event = "";
          let data = "";

          for (const line of lines) {
            if (line.startsWith("event:")) {
              event = line.replace("event:", "").trim();
            } else if (line.startsWith("data:")) {
              data += line.replace("data:", "").trim();
            }
          }

          if (!event || !data) continue;

          switch (event) {
            case "token":
              callbacks.onToken(JSON.parse(data));
              break;
            case "__end__":
              callbacks.onEnd(JSON.parse(data));
              break;
            case "error":
              const streamData = JSON.parse(data);
              throw new StreamError(
                streamData.message,
                "StreamError",
                streamData.error_id,
              );
            default:
              break;
          }
        }
      }
    } catch (error: any) {
      switch (true) {
        case error.name === "AbortError":
          console.log("StreamAborted");
          return;
        case error instanceof StreamError:
          callbacks.onError({ message: error.message, errorId: error.errorId });
          break;
        case error instanceof ResponseError:
          if (error.code !== 500) {
            callbacks.onError({ message: error.message, errorId: null });
          } else {
            callbacks.onError({
              message: "Oops. Something went wrong, please try again later.",
              errorId: null,
            });
          }
          break;
        default:
          callbacks.onError({
            message: "Oops. Something went wrong, please try again later.",
            errorId: null,
          });
          break;
      }
    }
  },
};
