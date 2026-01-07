"use client";

import { useTopics } from "@/lib/react-query/hooks/topic.hook";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ITopic } from "@/lib/api/services/topic.service";
import Link from "next/link";

const ChatSession = ({ openSidebar }: { openSidebar: boolean }) => {
  const { data: topics } = useTopics();

  return (
    <div className="space-y-1">
      {openSidebar && (
        <>
          <h2 className="text-[10px] text-gray-400">@session</h2>
          <ScrollArea className="h-72 md:h-96">
            <ul className="space-y-2 px-2">
              {topics?.data.map((topic: ITopic) => (
                <li
                  key={topic.id}
                  className="cursor-pointer rounded-md max-w-60 hover:bg-[#011416] active:bg-[#011416]"
                >
                  <Link
                    href={`/chat/${topic.name}`}
                    className="p-2 block text-xs text-slate-200 w-full truncate"
                  >
                    {topic.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ScrollBar
              orientation="vertical"
              className="[&_[data-slot=scroll-area-thumb]]:bg-gray-400/30"
            />
          </ScrollArea>
        </>
      )}
    </div>
  );
};

export default ChatSession;
