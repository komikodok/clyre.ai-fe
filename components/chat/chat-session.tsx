import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const ChatSession = ({ openSidebar }: { openSidebar: boolean }) => {
    return (
        <div className="space-y-1 ">
            {openSidebar && (
                <>
                    <h2 className="text-[10px] text-gray-400">@session</h2>
                    <ScrollArea className="h-72 md:h-96">
                        <ul className="space-y-2 px-2">
                            {Array.from({ length: 20 }, (_, i) => (
                                <li 
                                    key={i} 
                                    className="cursor-pointer rounded-md max-w-60 hover:bg-[#011416] active:bg-[#011416]"
                                >
                                    <p className="p-2 text-xs text-slate-200 truncate">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit est labore molestiae dolor, velit asperiores aliquam odit natus dolore explicabo ab necessitatibus laudantium deserunt sunt tempora perferendis doloremque non at?
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <ScrollBar orientation="vertical" className="[&_[data-slot=scroll-area-thumb]]:bg-gray-400/30"/>
                    </ScrollArea>
                </>
            )}
        </div>
    )
}

export default ChatSession
