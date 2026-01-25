import { useState, useRef, useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { agentService } from "@/lib/api/services/agent.service";
import { useAuth } from "./auth.hook";

interface AgentResponseData {
  ai_message: string;
  ux_actions?: any[];
}

export interface AgentResponse {
  meta: {
    code: number;
    status: string;
    message: string;
  };
  data: AgentResponseData;
}

export const useStreamAgent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [data, setData] = useState<AgentResponseData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { user } = useAuth();
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (topic: string, prompt: string) => {
      setIsLoading(true);
      setIsStreaming(true);
      setStreamingMessage("");
      setData(null);
      setErrorMessage(null);

      const token = user?.accessToken;
      const userId = user?.id;

      if (!token || !userId) {
        setIsLoading(false);
        setIsStreaming(false);
        setErrorMessage("Unauthorized: You must be logged in.");
        return;
      }

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      await agentService.streamResponse(
        topic,
        prompt,
        userId,
        token,
        abortControllerRef.current.signal,
        {
          onToken: (token) => {
            setIsLoading(false);
            setStreamingMessage((prev) => prev + token);
          },
          onEnd: (response) => {
            setIsStreaming(false);
            setData(response);
          },
          onError: (err) => {
            setIsLoading(false);
            setIsStreaming(false);
            setErrorMessage(err);
          },
        },
      );
    },
    [user],
  );

  const abort = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsLoading(false);
      setIsStreaming(false);
    }
  }, []);

  return {
    sendMessage,
    abort,
    isLoading,
    isStreaming,
    streamingMessage,
    data,
    errorMessage,
  };
};

export const useRouteAgent = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (prompt: string) => {
      if (!user?.accessToken || !user?.id) {
        throw new Error("Unauthorized: You must be logged in.");
      }
      return agentService.routeAgent(prompt, user.id, user.accessToken);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
  });
};
