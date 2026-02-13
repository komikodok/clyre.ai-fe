"use client";

import { ScrollArea } from "../ui/scroll-area";
import PromptInput from "./prompt-input";
import UserMessage from "./user-message";
import AIMessage from "./ai-message";
import ErrorMessage from "./error-message";
import ToolMessage from "./tool-message";
import { useStreamAgent } from "@/lib/react-query/hooks/agent.hook";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { promptSchema } from "@/lib/schemas/agent.schema";
import { useEffect, useRef } from "react";
import { ChatInputProvider } from "./chat-input-context";

interface ChatSessionContentProps {
  topic: string;
}

const ChatSessionContent = ({ topic }: ChatSessionContentProps) => {
  const {
    sendMessage,
    abort,
    isLoading,
    isStreaming,
    streamingMessage,
    fullMessage,
    errorMessage,
    uxActions,
  } = useStreamAgent();

  const scrollRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const form = useForm<z.infer<typeof promptSchema>>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: "",
    },
    mode: "onChange",
  });

  async function handleSubmit(values: z.infer<typeof promptSchema>) {
    await sendMessage(topic, values.prompt);
    form.reset();
  }

  useEffect(() => {
    if (isStreaming && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [streamingMessage, isStreaming]);

  useEffect(() => {
    console.log("fullMessage", fullMessage);
    console.log("errorMessage", errorMessage);
    console.log("uxActions", uxActions);
  }, [fullMessage, errorMessage, uxActions]);

  return (
    <ChatInputProvider
      setPrompt={(value) =>
        form.setValue("prompt", value, { shouldValidate: true })
      }
      focusInput={() => inputRef.current?.focus()}
    >
      <div className="flex-1 w-full h-full">
        <ScrollArea className="py-14 max-w-xs md:max-w-4xl h-[90%] mx-auto">
          {/* <UserMessage content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi earum odio quo iste hic voluptas culpa animi fuga! Ab eaque tenetur beatae veli t, suscipit aut! Itaque nemo quod distinctio." /> */}
          {errorMessage ? (
            <ErrorMessage content={errorMessage} />
          ) : (
            <AIMessage
              content={isStreaming ? streamingMessage : fullMessage}
              uxActions={uxActions}
            />
          )}
          <div ref={scrollRef} />
        </ScrollArea>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <PromptInput
          className="absolute border border-teal-900"
          form={form}
          onSubmit={handleSubmit}
          isPending={isLoading || isStreaming}
          isStreaming={isStreaming}
          onAbort={abort}
          inputRef={inputRef as React.RefObject<HTMLTextAreaElement>}
        />
      </div>
    </ChatInputProvider>
  );
};

export default ChatSessionContent;
