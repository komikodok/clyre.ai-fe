"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AnimatedCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const mouse = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!mouse.current) return;
      const rect = mouse.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.width / 2,
        y: e.clientY - rect.height / 2,
      });
    }

    function handleTouch(e: TouchEvent) {
      if (!mouse.current) return;
      const rect = mouse.current.getBoundingClientRect();
      setMousePos({
        x: e.touches[0].clientX - rect.width / 2,
        y: e.touches[0].clientY - rect.height / 2,
      });
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      <motion.div
        className="absolute w-24 md:w-32 aspect-square rounded-full"
        animate={{
          x: mousePos.x - 28,
          y: mousePos.y - 28,
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          x: { type: "spring", duration: 1.5 },
          y: { type: "spring", duration: 1.5 },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <motion.div
        ref={mouse}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          rotate: 360,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          x: { type: "spring", duration: 0.8, delay: 0.01 },
          y: { type: "spring", duration: 0.8, delay: 0.01 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
        className="absolute w-10 md:w-14 aspect-square rounded-full"
        style={{
          border: "2px solid transparent",
          borderTopColor: "rgba(16, 185, 129, 0.8)",
          borderBottomColor: "rgba(16, 185, 129, 0.8)",
          boxShadow: isHovering
            ? "0 0 20px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.1)"
            : "0 0 10px rgba(16, 185, 129, 0.3)",
        }}
      />

      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          rotate: -360,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          x: { type: "spring", duration: 1.2 },
          y: { type: "spring", duration: 1.2 },
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
        className="absolute w-10 md:w-14 aspect-square rounded-full"
        style={{
          border: "2px solid transparent",
          borderLeftColor: "rgba(52, 211, 153, 0.6)",
          borderRightColor: "rgba(52, 211, 153, 0.6)",
          boxShadow: isHovering
            ? "0 0 15px rgba(52, 211, 153, 0.5)"
            : "0 0 8px rgba(52, 211, 153, 0.2)",
        }}
      />

      <motion.div
        animate={{
          x: mousePos.x + 16,
          y: mousePos.y + 16,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          x: { type: "spring", duration: 0.5 },
          y: { type: "spring", duration: 0.5 },
          scale: { duration: 0.2 },
        }}
        className="absolute w-2 h-2 rounded-full bg-emerald-400"
        style={{
          boxShadow: "0 0 10px rgba(52, 211, 153, 0.8)",
        }}
      />
    </div>
  );
};

export default AnimatedCursor;
