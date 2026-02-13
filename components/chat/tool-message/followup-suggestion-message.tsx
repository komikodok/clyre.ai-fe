"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";
import { useChatInput } from "../chat-input-context";
import { useEffect, useState } from "react";

interface FollowupSuggestionMessageProps {
  suggestions: string[];
}

export function FollowupSuggestionMessage({
  suggestions,
}: FollowupSuggestionMessageProps) {
  const { setPrompt, focusInput } = useChatInput();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-2 mt-2"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-teal-300/70 ml-1">
            <Sparkles className="w-3 h-3" />
            <span>Suggested follow-ups</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => {
                  setPrompt(suggestion);
                  focusInput();
                }}
                className={cn(
                  "group flex items-center gap-2 text-left",
                  "px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm transition-all duration-200",
                  "bg-teal-950/30 hover:bg-teal-900/50",
                  "border border-teal-800/30 hover:border-teal-700/50",
                  "text-teal-100/90 hover:text-teal-50",
                  "max-w-full md:max-w-auto",
                )}
              >
                <span className="truncate max-w-[200px] md:max-w-[280px]">
                  {suggestion}
                </span>
                <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-0 -ml-2 group-hover:ml-0 group-hover:opacity-100 transition-all text-teal-400 shrink-0" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
