"use client";

import {
  MessageCircleDashed,
  ClipboardClockIcon,
  Star,
  LogOut,
} from "lucide-react";
import ChatSession from "./chat-session";
import { cn } from "@/lib/utils";
import useSidebar from "@/components/chat/chat-root";
import Tooltip from "../common/tooltip";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/react-query/hooks/auth.hook";
import { signOut } from "next-auth/react";
import { Separator } from "../ui/separator";

const ChatSidebarContent = () => {
  const { user, isAuthenticated } = useAuth();

  const { openSidebar } = useSidebar();

  const router = useRouter();

  return (
    <>
      <div className="my-2 w-full space-y-4">
        <div className="space-y-1">
          <h2 className="text-[10px] text-gray-400 px-2 flex justify-between items-center group">
            @menu
          </h2>

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

        <Separator className="my-2 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

        {openSidebar && isAuthenticated && (
          <div className="mx-3 flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 flex text-white justify-center items-center rounded-full bg-teal-900 flex-shrink-0">
                <h1>{user?.username.slice(0, 2).toUpperCase()}</h1>
              </div>
              <div className="space-y-0.5 min-w-0">
                <h1 className="text-sm font-semibold text-slate-200 truncate">
                  {user?.username}
                </h1>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                  {user?.role}
                </p>
              </div>
            </div>

            <Tooltip content="Logout" className="text-[10px]">
              <button
                onClick={() => signOut()}
                className="p-2 hover:bg-[#011416] text-slate-400 hover:text-white rounded-lg transition-all duration-200 group/logout"
                title="Logout"
              >
                <LogOut className="size-4 group-hover/logout:scale-110 transition-transform" />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatSidebarContent;
