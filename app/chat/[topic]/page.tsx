import ChatNavbar from "@/components/chat/chat-navbar";
import ChatSessionContent from "@/components/chat/chat-session-content";
import { ITopic, topicServices } from "@/lib/api/services/topic.service";
import { notFound } from "next/navigation";

const ChatSessionPage = async ({ params }: { params: { topic: string } }) => {
  const { topic } = await params;

  const topics = await topicServices.getAll();

  if (!topics.data.some((t: ITopic) => t.name === topic)) {
    notFound();
  }

  return (
    <>
      <ChatNavbar title={topic} />
      <ChatSessionContent topic={topic} />
    </>
  );
};

export default ChatSessionPage;
