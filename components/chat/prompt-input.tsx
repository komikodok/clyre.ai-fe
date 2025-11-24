"use client"

import { Input } from "../ui/input"
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
        "flex items-center p-1 max-w-xs md:max-w-3xl w-full h-16 md:h-20 rounded-lg border border-teal-950 bg-teal-800/10",
        props.className
      )}
    >
      <Input 
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        type="text"  
        placeholder="Ask me anything..."
        className="!outline-none border-none text-slate-200 text-xs md:text-sm focus-visible:ring-0"
      />

      <Button 
        type="submit"
        disabled={!prompt}
        className="!outline-none bg-teal-900 w-8 md:w-10 h-8 md:h-10 transition-colors duration-400" >
        {prompt ? <ArrowUp className="fill-slate-200/10"/>
          : <Ellipsis className="fill-slate-200/10"/>}
      </Button>
    </form>
  )
}

export default PromptInput
