import { ScrollArea } from "../ui/scroll-area"
import PromptInput from "./prompt-input"
import UserMessage from "./user-message"

const ChatSessionContent = () => {
  return (
    <>
      <div className="flex-1 w-full h-full">
        <ScrollArea className="pt-14 max-w-xs md:max-w-4xl h-[85%] mx-auto">
          <UserMessage 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi earum odio quo iste hic voluptas culpa animi fuga! Ab eaque tenetur beatae velit, suscipit aut! Itaque nemo quod distinctio." 
          />
        </ScrollArea>
      </div>
      <div className="relative w-full flex items-center justify-center bottom-14">
        <PromptInput className="absolute border border-teal-900"/>
      </div>
    </>
  )
}

export default ChatSessionContent
