"use client"

import { PanelLeftClose } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import useSidebar, { Chat } from "@/components/chat/chat-root"
import { Orbitron, Oregano } from "next/font/google"
import Tooltip from "../common/tooltip"

const oregano = Oregano({
    subsets: ["latin"],
    weight: ["400"],
})

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-orbitron",
})

const ChatSidebarHeader = () => {
    const { openSidebar, setOpenSidebar } = useSidebar()

    return (
        <Chat.Header 
            className={cn(
                "flex p-1",
                openSidebar ? "items-center justify-between flex-row" : "items-end flex-col mt-1"
            )}
        >
            <h1 className={cn(oregano.className, "text-white px-1.5")}>
                <span className="px-2 py-1 font-bold rounded-tl-2xl rounded-tr-3xl rounded-br-lg rounded-bl-[2.5em] bg-gradient-to-br from-teal-900 via-teal-950 to-[#0d1e21]">C</span>
                {openSidebar && <span className={cn(orbitron.className)}>lyre</span>}
            </h1>
            <Tooltip content={openSidebar ? "Close Sidebar" : "Open Sidebar"} className="text-[10px]">
                <Button onClick={() => setOpenSidebar(!openSidebar)} className="cursor-pointer !outline-none !bg-transparent">
                        <PanelLeftClose className={cn(!openSidebar && "rotate-180", "stroke-white size-4 transition-transform duration-400")}/>
                </Button>
            </Tooltip>
        </Chat.Header>
    )
}

export default ChatSidebarHeader
