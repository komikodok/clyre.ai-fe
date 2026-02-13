"use client";

import { motion } from "motion/react";
import { Orbitron, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const floatingOrbs = [
  { size: 120, x: "10%", y: "20%", delay: 0, duration: 8 },
  { size: 80, x: "80%", y: "15%", delay: 1, duration: 10 },
  { size: 60, x: "70%", y: "70%", delay: 2, duration: 7 },
  { size: 100, x: "20%", y: "75%", delay: 0.5, duration: 9 },
  { size: 40, x: "50%", y: "50%", delay: 1.5, duration: 6 },
  { size: 50, x: "85%", y: "45%", delay: 2.5, duration: 11 },
];

const AuthBanner = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 50%, transparent 70%)`,
            filter: "blur(2px)",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(20, 184, 166, 0.5) 0%, rgba(13, 148, 136, 0.3) 100%)",
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.h2
            initial={{ letterSpacing: "-0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`relative text-8xl font-bold bg-gradient-to-br from-teal-300 via-white to-teal-100 bg-clip-text text-transparent ${orbitron.className}`}
            style={{
              textShadow: "0 0 60px rgba(20, 184, 166, 0.4)",
            }}
          >
            Clyre
          </motion.h2>
        </motion.div>

        <motion.div
          className="h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.p
            className={`text-xl text-teal-50/80 font-light tracking-wide ${inter.className}`}
          >
            Grow your business
          </motion.p>
          <motion.p
            className={`text-lg text-teal-200/40 font-light mt-1 ${inter.className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            Built for you
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-3 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {["AI-Powered", "Smart", "Fast"].map((feature, index) => (
            <motion.span
              key={feature}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border border-teal-500/20 bg-teal-500/5 text-teal-200 backdrop-blur-md ${inter.className}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + index * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(20, 184, 166, 0.15)",
                borderColor: "rgba(20, 184, 166, 0.4)",
              }}
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F241D] to-transparent pointer-events-none opacity-60" />
    </div>
  );
};

export default AuthBanner;
