import { Oregano } from "next/font/google"
import { cn } from "@/lib/utils"
import { Chat } from "./chat-root"
import { ChevronDown, Trash2Icon, Star } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem
} from "../ui/dropdown-menu"

const oregano = Oregano({
    subsets: ["latin"],
    weight: ["400"],
})

const ChatNavbar = () => {
  return (
    <Chat.Header className="text-white">
        <nav className="w-full items-center flex gap-2 p-4">
            <h1 className={cn("font-medium text-md md:text-xl max-w-[220px] md:max-w-lg text-white line-clamp-1", oregano.className)}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt praesentium alias fuga corrupti eveniet omnis reiciendis quod harum temporibus, asperiores hic sint accusantium, iusto doloribus possimus impedit quae recusandae facilis.
            </h1>

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
        </nav>
    </Chat.Header>
  )
}

export default ChatNavbar
