"use client";

import AuthBanner from "@/components/auth/auth-banner";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <div
        className="h-screen w-screen relative overflow-hidden flex"
        style={{
          background:
            "linear-gradient(135deg, #0a1f1a 0%, #061210 40%, #040d0d 70%, #081a16 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(20, 184, 166, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(20, 184, 166, 0.04) 0%, transparent 50%)",
          }}
        />

        <div className="w-1/2 h-full overflow-hidden flex-shrink-0 flex flex-col gap-2 justify-center items-center max-lg:hidden relative">
          <AuthBanner />
        </div>

        <div className="w-full md:w-1/2 flex-shrink-0 relative flex justify-center items-center">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="cursor-pointer absolute top-3 left-3 md:left-auto md:right-3 w-9 h-9 flex justify-center items-center rounded-full bg-white/5 hover:bg-white/10 active:bg-white/10 border border-white/10 transition-all duration-300 z-50"
          >
            <ArrowLeft className="stroke-white/60 size-4" />
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white/[0.07] backdrop-blur-md border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/40 h-fit max-w-sm w-full mx-4 flex justify-center items-center"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
