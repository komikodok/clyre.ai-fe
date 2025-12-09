"use client"

import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { ArrowUp, Ellipsis } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"


function PromptInput({
  ...props
} : React.ComponentProps<"form">) {
  const [prompt, setPrompt] = useState<string>("")

  return (
    <form 
      {...props}
      className={cn(
        "sticky bottom-1 flex flex-col items-center p-1 max-h-50 md:max-h-60 max-w-xs md:max-w-3xl w-full rounded-lg backdrop-blur-xs border border-teal-950 bg-teal-800/10",
        props.className
      )}
    >
      <Textarea 
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        placeholder="Ask me anything..."
        className="!outline-none resize-none min-h-8 md:min-h-10 border-none flex items-center text-slate-200 text-xs md:text-sm focus-visible:ring-0"
        style={{ scrollbarWidth: 'initial' }}
      />

      <div className="flex justify-between w-full">
        <div></div>
        <Button 
          type="submit"
          disabled={!prompt}
          className="!outline-none bg-teal-900 w-8 md:w-10 h-8 md:h-10 transition-colors duration-400" >
          {prompt ? <ArrowUp className="fill-slate-200/10"/>
            : <Ellipsis className="fill-slate-200/10"/>}
        </Button>
      </div>
    </form>
  )
}

export default PromptInput
