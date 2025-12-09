"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Element, Text } from "hast"
import { Button } from "../ui/button"
import { Copy } from "lucide-react"
import Tooltip from "./tooltip"

function Markdown({
    textContent
} : {
    textContent: string
}) {
    return (
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({...props}) => <h1 {...props} className="text-2xl fon2-bold my-1" />,
                    h2: ({...props}) => <h2 {...props} className="text-xl font-bold my-1" />,
                    h3: ({...props}) => <h3 {...props} className="text-lg font-bold my-2" />,
                    ul: ({...props}) => <ul {...props} className="list-disc list-inside my-2 space-y-1" />,
                    ol: ({...props}) => <ol {...props} className="list-decimal list-inside my-2 space-y-1" />,
                    li: ({...props}) => <li {...props} className="ml-4" />,
                    strong: ({...props}) => <strong {...props} className="font-bold" />,
                    pre: ({node, ...props}) => {
                        const preElement = node as Element
                        const codeElement = preElement.children[0] as Element

                        const codeClass = codeElement.properties.className as string[]
                        const language = codeClass.find((cls) => cls.startsWith("language-"))?.split("-")[1]

                        const codeTextContent = codeElement.children[0] as Text
                        const textContent = codeTextContent.value

                        console.log(codeElement)

                        return (
                            <pre 
                                {...props} 
                                className="border border-slate-100/10 my-2 space-y-2 p-1 rounded-sm text-sm bg-gradient-to-br from-black/10 via-black/40 to-black/50" 
                            >
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[9px] md:text-[10px] opacity-50">{`<${language}/>`}</h1>
                                    <Tooltip content="Copy" className="text-[10px]">
                                        <Button onClick={() => navigator.clipboard.writeText(textContent)} className="cursor-pointer w-5 h-5 active:scale-90 transition-transform !bg-transparent">
                                            <Copy className="stroke-white/50 size-2 md:size-3"/>
                                        </Button>
                                    </Tooltip>
                                </div>
                                <div className="px-2 text-xs">
                                    {props.children}
                                </div>
                            </pre>
                        )
                    },
                }}
            >
                {textContent}
            </ReactMarkdown>
    )
}

export default Markdown
