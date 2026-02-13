"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ErrorDisplayProps {
  message: string;
  errorId?: string | null;
}

export default function ErrorDisplay({ message, errorId }: ErrorDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyErrorId = async () => {
    if (errorId) {
      await navigator.clipboard.writeText(errorId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
        <div className="space-y-3">
          <p className="text-red-200 text-xs md:text-sm leading-relaxed">
            {message}
          </p>

          {errorId && (
            <div className="flex items-center gap-2 pt-2 border-t border-red-700/20">
              <span className="text-red-400/70 text-[10px] md:text-xs font-mono">
                Error ID: {errorId}
              </span>
              <button
                onClick={handleCopyErrorId}
                className={cn(
                  "p-1 rounded transition-all duration-200",
                  "hover:bg-red-800/30",
                  "text-red-400/70 hover:text-red-300",
                )}
                title="Copy Error ID"
              >
                {copied ? (
                  <Check className="size-3" />
                ) : (
                  <Copy className="size-3" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
