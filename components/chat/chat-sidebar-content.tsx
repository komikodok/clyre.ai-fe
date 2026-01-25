"use client";

import { MessageCircleDashed, ClipboardClockIcon, Star } from "lucide-react";
import ChatSession from "./chat-session";
import { cn } from "@/lib/utils";
import useSidebar from "@/components/chat/chat-root";
import Tooltip from "../common/tooltip";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/react-query/hooks/auth.hook";

const ChatSidebarContent = () => {
  const { user } = useAuth();

  const { openSidebar } = useSidebar();

  const router = useRouter();

  return (
    <>
      <div className="my-2 w-full space-y-4">
        <div className="space-y-1">
          <h2 className="text-[10px] text-gray-400">@menu</h2>

          <nav>
            <ul className="space-y-1 px-2">
              <li
                onClick={() => router.push("/chat")}
                className="cursor-pointer relative hover:bg-[#011416] active:bg-[#011416] p-1 flex items-center gap-2 text-white"
              >
                <Tooltip content="New Chat" className="text-[10px]">
                  <MessageCircleDashed
                    className={cn(
                      "size-4",
                      !openSidebar && "md:absolute md:right-2",
                    )}
                  />
                </Tooltip>
                <span className="text-xs">New Chat</span>
              </li>
              <li className="cursor-pointer relative hover:bg-[#011416] active:bg-[#011416] p-1 flex items-center gap-2 text-white">
                <Tooltip content="History" className="text-[10px]">
                  <ClipboardClockIcon
                    className={cn(
                      "size-4",
                      !openSidebar && "md:absolute md:right-2",
                    )}
                  />
                </Tooltip>
                <span className="text-xs">History</span>
              </li>
              <li className="cursor-pointer relative hover:bg-[#011416] active:bg-[#011416] p-1 flex items-center gap-2 text-white">
                <Tooltip content="Favorit" className="text-[10px]">
                  <Star
                    className={cn(
                      "size-4",
                      !openSidebar && "md:absolute md:right-2",
                    )}
                  />
                </Tooltip>
                <span className="text-xs">Favoritt</span>
              </li>
            </ul>
          </nav>
        </div>

        <ChatSession openSidebar={openSidebar}></ChatSession>

        {openSidebar && (
          <div className="mx-3 flex gap-2">
            <div className="w-10 h-10 flex text-white justify-center items-center rounded-full bg-teal-900">
              <h1>{user?.username.slice(0, 2).toUpperCase()}</h1>
            </div>
            <div className="space-y-1">
              <h1 className="text-sm max-w-30 line-clamp-1 font-semibold text-slate-200">
                {user?.username}
              </h1>
              <p className="text-xs text-slate-200">{user?.role}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatSidebarContent;
