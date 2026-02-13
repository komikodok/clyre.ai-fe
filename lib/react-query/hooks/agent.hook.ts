import { useState, useRef, useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { agentService } from "@/lib/api/services/agent.service";
import { useAuth } from "./auth.hook";
import { UXAction } from "@/components/chat/ai-message";

export const useStreamAgent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [fullMessage, setFullMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorId, setErrorId] = useState<string | null>(null);
  const [uxActions, setUXActions] = useState<UXAction[]>([]);

  const { user } = useAuth();
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (topic: string, prompt: string) => {
      setIsLoading(true);
      setIsStreaming(true);
      setStreamingMessage("");
      setFullMessage("");
      setErrorMessage(null);
      setErrorId(null);

      const token = user?.accessToken;
      const userId = user?.id;

      if (!token || !userId) {
        setIsLoading(false);
        setIsStreaming(false);
        setErrorMessage("Unauthorized: You must be logged in.");
        setErrorId(null);
        return;
      }

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      await agentService.streamResponse(
        topic,
        prompt,
        token,
        abortControllerRef.current.signal,
        {
          onToken: (token) => {
            setStreamingMessage((prev) => prev + token);
          },
          onEnd: (response) => {
            setIsLoading(false);
            setIsStreaming(false);
            setFullMessage(response.ai_message);
            setUXActions(response.ux_actions || []);
          },
          onError: (err) => {
            setIsLoading(false);
            setIsStreaming(false);
            setErrorMessage(err.message);
            setErrorId(err.errorId);
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
    fullMessage,
    errorMessage,
    errorId,
    uxActions,
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
      return agentService.routeAgent(prompt, user.accessToken);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
  });
};
