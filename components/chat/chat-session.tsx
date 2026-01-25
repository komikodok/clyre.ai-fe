"use client";

import { useTopics } from "@/lib/react-query/hooks/topic.hook";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ITopic } from "@/lib/api/services/topic.service";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

const ChatSession = ({ openSidebar }: { openSidebar: boolean }) => {
  const { data: topics } = useTopics();
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {openSidebar && (
        <>
          <div className="flex items-center gap-2 px-1">
            <div className="h-px flex-1 bg-gradient-to-r from-teal-500/30 to-transparent" />
            <h2 className="text-[10px] font-medium text-teal-400/70 uppercase tracking-wider">
              Sessions
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-teal-500/30 to-transparent" />
          </div>
          <ScrollArea className="h-72 md:h-96">
            <ul className="space-y-1 px-1">
              {topics?.data.map((topic: ITopic) => {
                const isActive = pathname === `/chat/${topic.name}`;

                return (
                  <li key={topic.id}>
                    <Link
                      href={`/chat/${topic.name}`}
                      className={cn(
                        "group flex items-center gap-2 p-2.5 rounded-lg text-xs transition-all duration-200",
                        "hover:bg-teal-900/40 active:bg-teal-900/60",
                        "border border-transparent",
                        isActive
                          ? "bg-gradient-to-r from-teal-900/60 to-teal-800/30 border-teal-700/30 text-teal-200 shadow-lg shadow-teal-950/50"
                          : "text-slate-400 hover:text-slate-200",
                      )}
                    >
                      <div
                        className={cn(
                          "p-1.5 rounded-md transition-colors",
                          isActive
                            ? "bg-teal-600/30"
                            : "bg-slate-700/30 group-hover:bg-teal-800/30",
                        )}
                      >
                        <MessageSquare
                          className={cn(
                            "size-3",
                            isActive
                              ? "text-teal-400"
                              : "text-slate-500 group-hover:text-teal-500",
                          )}
                        />
                      </div>
                      <span className="truncate flex-1">{topic.name}</span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ScrollBar
              orientation="vertical"
              className="[&_[data-slot=scroll-area-thumb]]:bg-teal-600/30"
            />
          </ScrollArea>
        </>
      )}
    </div>
  );
};

export default ChatSession;
