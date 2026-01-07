"use client";

import ChatNavbar from "@/components/chat/chat-navbar";
import ChatSessionContent from "@/components/chat/chat-session-content";
import { useParams } from "next/navigation";

const ChatSessionPage = () => {
  const { topic } = useParams();

  return (
    <>
      <ChatNavbar title={topic as string} />
      <ChatSessionContent />
    </>
  );
};

export default ChatSessionPage;
