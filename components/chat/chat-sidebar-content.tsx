"use client"

import { PanelLeftClose, MessageCircleDashed, ClipboardClockIcon, Star } from "lucide-react"
import { Button } from "../ui/button"
import ChatSession from "./chat-session"
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

const ChatSidebarContent = () => {
    const { openSidebar, setOpenSidebar } = useSidebar()
    return (
        <>
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

            <div className="my-2 w-full space-y-4">
                <div className="space-y-1">
                    <h2 className="text-[10px] text-gray-400">@menu</h2>

                    <nav>
                        <ul className="space-y-1 px-2">
                            <li className="cursor-pointer relative hover:bg-[#011416] active:bg-[#011416] p-1 flex items-center gap-2 text-white">
                                <Tooltip content="New Chat" className="text-[10px]">
                                    <MessageCircleDashed 
                                        className={cn(
                                            "size-4",
                                            !openSidebar && "md:absolute md:right-2"
                                        )}
                                    />
                                </Tooltip>
                                <span className="text-xs">New Chat</span>
                            </li>
                            <li className="cursor-pointer relative hover:bg-[#011416] active:bg-[#011416] p-1 flex items-center gap-2 text-white">
                                <Tooltip content="History" className="text-[10px]">
                                    <ClipboardClockIcon 
                                        className={cn(
                                            "size-4",
                                            !openSidebar && "md:absolute md:right-2"
                                        )}
                                    />
                                </Tooltip>
                                <span className="text-xs">History</span>
                            </li>
                            <li className="cursor-pointer relative hover:bg-[#011416] active:bg-[#011416] p-1 flex items-center gap-2 text-white">
                                <Tooltip content="Favorit" className="text-[10px]">
                                    <Star 
                                        className={cn(
                                            "size-4",
                                            !openSidebar && "md:absolute md:right-2"
                                        )}
                                    />
                                </Tooltip>
                                <span className="text-xs">Favoritt</span>
                            </li>
                        </ul>
                    </nav>
                </div>

                <ChatSession openSidebar={openSidebar}></ChatSession>

                {openSidebar && (
                    <div className="mx-3 flex gap-2">
                        <div className="w-10 h-10 flex text-white justify-center items-center rounded-full bg-teal-900">
                            <h1>NJ</h1>
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-slate-200">Njir</h1>
                            <p className="text-xs text-slate-200">User</p>                        
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ChatSidebarContent