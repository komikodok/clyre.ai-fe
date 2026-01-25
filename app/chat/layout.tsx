"use client";

import { Chat } from "@/components/chat/chat-root";
import ChatSidebarContent from "@/components/chat/chat-sidebar-content";
import ChatSidebarHeader from "@/components/chat/chat-sidebar-header";

function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <Chat.Root className="bg-chat">
      <Chat.Sidebar>
        <Chat.SidebarBody className="bg-[#051010] border-r border-teal-500/10 z-50">
          <ChatSidebarHeader />
          <ChatSidebarContent />
        </Chat.SidebarBody>
      </Chat.Sidebar>

      <Chat.Window>
        <Chat.Body>{children}</Chat.Body>
      </Chat.Window>
    </Chat.Root>
  );
}

export default ChatLayout;
