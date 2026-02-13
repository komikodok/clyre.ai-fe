"use client";
import React, { useState, useEffect } from "react";

import { Oregano } from "next/font/google";
import { cn } from "@/lib/utils";
import useSidebar, { Chat } from "./chat-root";
import { ChevronDown, Trash2Icon, Star, Menu, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { LoginDialog } from "../auth/login-dialog";
import { Button } from "../ui/button";
import { useAuth } from "@/lib/react-query/hooks/auth.hook";

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

function ChatNavbar({ title }: { title: string }) {
  const { setOpenSidebar } = useSidebar();
  const { isAuthenticated, isLoading } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoginOpen(true);
    } else {
      setIsLoginOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <Chat.Header className="text-white pb-3 absolute top-0 z-10 bg-gradient-to-b from-[#040e0e] via-[#040e0e] to-transparent">
      <nav className="w-full items-center flex gap-2 py-4 md:px-4">
        <Chat.SidebarTrigger
          onClick={() => setOpenSidebar(true)}
          className="md:hidden !bg-transparent !outline-none"
        >
          <Menu className="stroke-white size-4" />
        </Chat.SidebarTrigger>

        <h1
          className={cn(
            "font-medium text-md md:text-xl max-w-[220px] md:max-w-lg text-white line-clamp-1",
            oregano.className,
          )}
        >
          {title}
        </h1>

        {!!title && (
          <DropdownMenu>
            <DropdownMenuTrigger className="!outline-none cursor-pointer">
              <ChevronDown className="size-4"></ChevronDown>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex gap-1">
                  <Star className="size-3" />
                  <p className="text-xs">Add Favorit</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-1">
                  <Trash2Icon className="size-3 stroke-red-500" />
                  <p className="text-xs text-red-500">Delete</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <div className="ml-auto px-4">
          {!isAuthenticated && !isLoading && (
            <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <Button
                size="sm"
                className="group relative !outline-none focus-visible:ring-0 overflow-hidden bg-[#040e0e] hover:bg-[#011416] text-white text-xs px-5 h-9 rounded-sm font-bold transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95"
              >
                <div className="relative flex items-center gap-2">
                  <LogIn className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  <span>Sign In</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent group-hover:w-full transition-all duration-500" />
              </Button>
            </LoginDialog>
          )}
        </div>
      </nav>
    </Chat.Header>
  );
}

export default ChatNavbar;
