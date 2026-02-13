"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightLeft, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

interface SwitchTopicMessageProps {
  message?: string;
  targetTopic?: string;
  onSwitchTopic?: (targetTopic: string) => void;
}

export function SwitchTopicMessage({
  message,
  targetTopic,
  onSwitchTopic,
}: SwitchTopicMessageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isVisible) return null;

  const content = (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "fixed top-6 left-1/2 z-50",
            "flex items-center gap-4 p-4 pr-12 min-w-[320px] max-w-[90vw]",
            "bg-gradient-to-r from-slate-900/90 to-slate-800/90",
            "backdrop-blur-md shadow-xl",
            "border border-teal-500/20 rounded-xl",
            "text-slate-200",
          )}
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-teal-500/5 rounded-xl pointer-events-none" />

          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
            <ArrowRightLeft className="w-5 h-5 text-teal-400" />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <h4 className="text-sm font-semibold text-teal-50 flex items-center gap-2">
              Switch Topic <Sparkles className="w-3 h-3 text-teal-400" />
            </h4>
            <p className="text-xs text-slate-300/80">
              {message ||
                `Do you want to switch to the topic "${targetTopic}"?`}
            </p>

            {targetTopic && (
              <Button
                onClick={() => {
                  onSwitchTopic?.(targetTopic);
                  setIsVisible(false);
                }}
                className={cn(
                  "mt-2 self-start",
                  "bg-teal-600 hover:bg-teal-500 text-white",
                  "text-xs font-medium px-4 py-1.5 rounded-lg",
                  "transition-colors shadow-lg shadow-teal-900/20",
                )}
              >
                Switch to {targetTopic}
              </Button>
            )}
          </div>

          <Button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 !bg-transparent p-1.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
