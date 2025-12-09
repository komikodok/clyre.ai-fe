"use client"

import { useEffect, useState } from "react"
import Markdown from "../common/markdown"

export default function AIMessage({
    content
} : {
    content: string | string[]
}) {
    const [streamMessage, setStreamMessage] = useState<string>("")
    const [isStreaming, setIsStreaming] = useState<boolean>(true)
    
    useEffect(() => {
        setStreamMessage("")
        setIsStreaming(true)
        
        async function getMessage() {
            for await (const chunk of content) {
                setStreamMessage((prev) => prev + chunk)
                await new Promise(r => setTimeout(r, 50))
            }
            setIsStreaming(false)
        }
        getMessage()
    }, [content])
    
    return (
        <div className="break-words flex max-md:flex-col gap-3 w-full max-w-xs md:max-w-3xl">
            <div className="flex-shrink-0 w-6 md:w-8 h-6 md:h-8 rounded-full border border-teal-800/30"></div>
            <div className="w-full text-white/70 text-xs leading-relaxed">
                {isStreaming ? (
                    <p className="">{streamMessage}</p>
                ) : (
                    <Markdown textContent={streamMessage}/>
                )}
            </div>
        </div>
    )
}