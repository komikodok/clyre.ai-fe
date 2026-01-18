"use client";

import { cn, getGreeting } from "@/lib/utils";
import { Oregano } from "next/font/google";
import PromptInput from "./prompt-input";
import { useAuth } from "@/lib/react-query/hooks/auth.hook";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const ChatIndexContent = () => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <main className="space-y-4 max-w-xs md:max-w-4xl w-full h-full mx-auto flex flex-col justify-center items-center">
      <div className="flex items-center">
        <h1 className={cn(oregano.className, "text-white px-1.5")}>
          <span className="px-2 py-1 text-2xl font-bold rounded-tl-2xl rounded-tr-3xl rounded-br-lg rounded-bl-[2.5em] bg-linear-to-br from-teal-900 via-teal-950 to-[#0d1e21]">
            C
          </span>
        </h1>
        <p className="text-white text-2xl md:text-3xl text-center">
          : {getGreeting()}, {user?.username ?? "User"}
        </p>
      </div>

      <PromptInput />
    </main>
  );
};

export default ChatIndexContent;
