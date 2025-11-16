import { Oregano } from "next/font/google"
import { cn } from "@/lib/utils"
import { Chat } from "./chat-root"

const oregano = Oregano({
    subsets: ["latin"],
    weight: ["400"],
})

const ChatNavbar = () => {
  return (
    <Chat.Header className="text-white">
        <nav className="w-full items-center flex gap-2 p-4">
            <h1 className={cn("font-medium text-xl text-white", oregano.className)}>Clyre</h1>
        </nav>
    </Chat.Header>
  )
}

export default ChatNavbar
