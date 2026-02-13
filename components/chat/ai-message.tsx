"use client";

import { motion } from "framer-motion";
import Markdown from "../common/markdown";
import { Bot, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ToolMessage from "./tool-message";

interface TopicAction {
  type: "SWITCH_TOPIC" | "STAY_ON_TOPIC";
  target_topic?: string;
  message?: string;
}

interface FollowupSuggestion {
  type: "FOLLOWUP_SUGGESTION";
  suggestions: string[];
}

export type UXAction = TopicAction | FollowupSuggestion | undefined;

export default function AIMessage({
  content,
  uxActions,
}: {
  content: string;
  uxActions?: UXAction[];
}) {
  if (!content && uxActions?.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="break-words flex max-md:flex-col gap-4 w-full max-w-xs md:max-w-3xl"
    >
      <div className="relative flex-shrink-0">
        <div
          className={cn(
            "relative w-8 h-8 md:w-10 md:h-10 rounded-full",
            "bg-gradient-to-br from-teal-600/40 to-teal-900/60",
            "border border-teal-500/30",
            "flex items-center justify-center",
            "shadow-lg shadow-teal-950/50",
          )}
        >
          <Bot className="size-4 md:size-5 text-teal-300" />
        </div>
      </div>

      <div
        className={cn(
          "flex-1 min-w-0 rounded-2xl rounded-tl-sm",
          "bg-gradient-to-br from-slate-800/50 to-slate-900/30",
          "border border-slate-700/30",
          "p-4 md:p-5",
          "shadow-xl shadow-black/20",
        )}
      >
        <div className="text-slate-200 text-xs md:text-sm leading-relaxed">
          <Markdown textContent={content} />

          <ul className="w-full mt-3">
            {uxActions?.map((action, index) => (
              <li key={index}>
                <ToolMessage action={action} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
