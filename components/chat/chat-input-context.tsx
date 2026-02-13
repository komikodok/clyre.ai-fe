"use client";

import { createContext, useContext } from "react";

interface ChatInputContextType {
  setPrompt: (value: string) => void;
  focusInput: () => void;
}

const ChatInputContext = createContext<ChatInputContextType | undefined>(
  undefined,
);

export function useChatInput() {
  const context = useContext(ChatInputContext);
  if (!context) {
    throw new Error("useChatInput must be used within a ChatInputProvider");
  }
  return context;
}

export function ChatInputProvider({
  children,
  setPrompt,
  focusInput,
}: {
  children: React.ReactNode;
  setPrompt: (value: string) => void;
  focusInput: () => void;
}) {
  return (
    <ChatInputContext.Provider value={{ setPrompt, focusInput }}>
      {children}
    </ChatInputContext.Provider>
  );
}
