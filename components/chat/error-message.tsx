"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  content?: string;
}

export default function ErrorMessage({
  content = "Oops, something went wrong, please try again later.",
}: ErrorMessageProps) {
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
            "bg-gradient-to-br from-red-600/40 to-red-900/60",
            "border border-red-500/30",
            "flex items-center justify-center",
            "shadow-lg shadow-red-950/50",
          )}
        >
          <AlertTriangle className="size-4 md:size-5 text-red-300" />
        </div>
      </div>

      <div
        className={cn(
          "flex-1 min-w-0 rounded-2xl rounded-tl-sm",
          "bg-gradient-to-br from-red-900/30 to-red-950/20",
          "border border-red-700/30",
          "p-4 md:p-5",
          "shadow-xl shadow-black/20",
        )}
      >
        <div className="text-red-200 text-xs md:text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </motion.div>
  );
}
