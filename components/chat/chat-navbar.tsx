"use client"

import { Oregano } from "next/font/google"
import { cn } from "@/lib/utils"
import useSidebar, { Chat } from "./chat-root"
import { ChevronDown, Trash2Icon, Star, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem
} from "../ui/dropdown-menu"
import { useParams } from "next/navigation"

const oregano = Oregano({
    subsets: ["latin"],
    weight: ["400"],
})

function ChatNavbar({
  title
} : {
  title: string
}) {
  const {  setOpenSidebar } = useSidebar()
  const { sessionId } = useParams()

  return (
    <Chat.Header className="text-white pb-3 absolute top-0 z-10 bg-gradient-to-b from-[#040e0e] via-[#040e0e] to-transparent">
        <nav className="w-full items-center flex gap-2 py-4 md:px-4">
          <Chat.SidebarTrigger 
            onClick={() => setOpenSidebar(true)}
            className="md:hidden !bg-transparent !outline-none"
          >
            <Menu className="stroke-white size-4"/>
          </Chat.SidebarTrigger>
          
          <h1 className={cn("font-medium text-md md:text-xl max-w-[220px] md:max-w-lg text-white line-clamp-1", oregano.className)}>
            {title}
          </h1>

          {sessionId && (
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
        </nav>
    </Chat.Header>
  )
}

export default ChatNavbar
