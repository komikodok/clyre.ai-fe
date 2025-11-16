"use client"

import { PanelLeftClose, MessageCircleDashed, ClipboardClockIcon, Star } from "lucide-react"
import { Button } from "../ui/button"
import ChatSession from "./chat-session"
import { cn } from "@/lib/utils"
import useSidebar, { Chat } from "@/components/chat/chat-root"

const ChatSidebarContent = () => {
    const { openSidebar, setOpenSidebar } = useSidebar()
    return (
        <>
            <Chat.Header className="flex justify-between p-1">
                {openSidebar && (
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                )}
                <Button onClick={() => setOpenSidebar(!openSidebar)} className="cursor-pointer !bg-transparent">
                    <PanelLeftClose className="stroke-white size-4"/>
                </Button>
            </Chat.Header>

            <div className="my-2 w-full space-y-4">
                <div className="space-y-1">
                    <h2 className="text-[10px] text-gray-400">@menu</h2>

                    <nav>
                        <ul className="space-y-1 px-2">
                            <li className="cursor-pointer relative hover:bg-black/20 active:bg-black/20 p-1 flex items-center gap-2 text-white">
                                <MessageCircleDashed 
                                    className={cn(
                                        "size-4",
                                        !openSidebar && "md:absolute md:right-2"
                                    )}
                                />
                                <span className="text-xs">New Chat</span>
                            </li>
                            <li className="cursor-pointer relative hover:bg-black/20 active:bg-black/20 p-1 flex items-center gap-2 text-white">
                                <ClipboardClockIcon 
                                    className={cn(
                                        "size-4",
                                        !openSidebar && "md:absolute md:right-2"
                                    )}
                                />
                                <span className="text-xs">History</span>
                            </li>
                            <li className="cursor-pointer relative hover:bg-black/20 active:bg-black/20 p-1 flex items-center gap-2 text-white">
                                <Star 
                                    className={cn(
                                        "size-4",
                                        !openSidebar && "md:absolute md:right-2"
                                    )}
                                />
                                <span className="text-xs">Favoritt</span>
                            </li>
                        </ul>
                    </nav>
                </div>

                <ChatSession openSidebar={openSidebar}></ChatSession>
            </div>
        </>
    )
}

export default ChatSidebarContent

// import { PanelLeftClose, MessageCircleDashed, ClipboardClockIcon, Star } from "lucide-react"
// import { Button } from "../ui/button"
// import ChatSession from "./chat-session"
// import { useState } from "react"
// import { cn } from "@/lib/utils"

// const ChatSidebarContent = () => {
//     const [openSidebar, setOpenSidebar] = useState<boolean>(false)
//     return (
//         <div 
//             className={cn(
//                 'py-4 h-full flex-shrink-0 border border-yellow-300 transition-all duration-300',
//                 openSidebar ? 'w-68' : 'w-12'
//             )}
//         >
//             <header className="flex px-1 items-center justify-between">
//                 {openSidebar && (
//                     <div className="w-8 h-8 rounded-full bg-white"></div> // Image
//                 )}
//                 <Button onClick={() => setOpenSidebar(!openSidebar)} className="cursor-pointer !bg-transparent">
//                     <PanelLeftClose className="stroke-white size-5"/>
//                 </Button>
//             </header>

//             <main className="my-3 border border-green-500 space-y-4">
//                 <div className="space-y-1">
//                     {openSidebar && (
//                         <h2 className="text-xs text-gray-400">@menu</h2>
//                     )}
//                     <nav className="flex">
//                         <ul className="w-12 h-full space-y-3">
//                             <li className="cursor-pointer flex justify-center items-center">
//                                 <MessageCircleDashed className="stroke-white size-5"/>
//                             </li>
//                             <li className="cursor-pointer flex justify-center items-center">
//                                 <ClipboardClockIcon className="stroke-white size-5"/>
//                             </li>
//                             <li className="cursor-pointer flex justify-center items-center">
//                                 <Star className="stroke-white size-5"/>
//                             </li>
//                         </ul>
//                         {openSidebar && (
//                             <ul className="space-y-3 font-normal text-white text-sm">
//                                 <li className="cursor-pointer whitespace-nowrap">New Chat</li>
//                                 <li className="cursor-pointer whitespace-nowrap">History</li>
//                                 <li className="cursor-pointer whitespace-nowrap">Favorit</li>
//                             </ul>
//                         )}
//                     </nav>
//                 </div>

//                 <ChatSession openSidebar={openSidebar}></ChatSession>
//             </main>
//         </div>
//     )
// }

// export default ChatSidebarContent
