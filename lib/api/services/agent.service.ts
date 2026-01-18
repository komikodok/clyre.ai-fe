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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n\n");

        for (const line of lines) {
          if (line.startsWith("event: token")) {
            const dataLine = line.split("\n")[1];
            if (dataLine?.startsWith("data: ")) {
              const token = dataLine.slice(6);
              callbacks.onToken(token);
            }
          } else if (line.startsWith("event: __end__")) {
            const dataLine = line.split("\n")[1];
            if (dataLine?.startsWith("data: ")) {
              try {
                const data = JSON.parse(dataLine.slice(6));
                callbacks.onEnd(data);
              } catch (e) {
                console.error("Failed to parse end event data", e);
              }
            }
          }
        }
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Stream aborted");
      } else {
        callbacks.onError(error);
      }
    }
  },
};
