import { ResponseError, StreamError } from "@/lib/utils/error";
import { apiClient } from "../api-client";
import { BASE_API_URL } from "../base-url";

export interface AgentStreamCallbacks {
  onToken: (token: string) => void;
  onEnd: (response: any) => void;
  onError: (error: any) => void;
}

export const agentService = {
  routeAgent: async (prompt: string, userId: string, token: string) => {
    const response = await apiClient.post(
      "/api/agents/new",
      { prompt, user_id: userId },
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
    userId: string,
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
          body: JSON.stringify({ prompt, user_id: userId }),
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
              throw new StreamError(streamData.message, "StreamError");
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
          callbacks.onError(error.message);
          break;
        case error instanceof ResponseError:
          if (error.code !== 500) {
            callbacks.onError(error.message);
          } else {
            callbacks.onError(
              "Oops. Something went wrong, please try again later.",
            );
          }
          break;
        default:
          callbacks.onError(
            "Oops. Something went wrong, please try again later.",
          );
          break;
      }
    }
  },
};
