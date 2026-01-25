"use client";

import { motion } from "framer-motion";
import Markdown from "../common/markdown";
import { Bot, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIMessage({
  content,
  isStreaming = false,
}: {
  content: string;
  isStreaming?: boolean;
}) {
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="break-words flex max-md:flex-col gap-4 w-full max-w-xs md:max-w-3xl"
    >
      <div className="relative flex-shrink-0">
        {/* <div className="absolute inset-0 max-h-12 max-w-12 bg-teal-500 rounded-full blur-xl" /> */}
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
          {isStreaming ? (
            <div className="whitespace-pre-wrap break-words">
              {content}
              <motion.span
                className="inline-block w-2 h-4 ml-0.5 bg-teal-400 rounded-sm"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </div>
          ) : (
            <Markdown textContent={content} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
