"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Copy, PenSquare } from "lucide-react"
import Tooltip from "../common/tooltip"

interface ChatMessageProps {
  content: string
}

export default function UserMessage({ content }: ChatMessageProps) {
  const [editMode, setEditMode] = useState(false)
  const [editPrompt, setEditPrompt] = useState("")

  const editModeRef = useRef<HTMLTextAreaElement>(null)

  function handleEditMode() {
    setEditMode(true)

    setTimeout(() => {
      editModeRef.current?.focus()
    })
  }

  useEffect(() => setEditPrompt(content), [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className="break-words break-all whitespace-normal max-w-2xs md:max-w-3xl ml-auto"
    >
      {editMode ? (
        <form 
          onSubmit={(e) => {e.preventDefault(); console.log(editPrompt)}}
          className="rounded-sm p-1 border border-white/10"
        >
          <Textarea 
            onChange={(e) => setEditPrompt(e.target.value)}
            value={editPrompt}
            ref={editModeRef} 
            className="resize-none !text-xs text-white/80 max-h-52 border-none !outline-none focus-visible:ring-0"
            style={{ scrollbarWidth: 'none' }}
          />
          <div className="flex gap-2 justify-end">
            <Button 
              onClick={() => setEditMode(false)}
              className="text-[10px] md:text-xs h-8 md:h-9 cursor-pointer focus-visible:ring-1 focus-visible:ring-teal-600/30 text-white/60 hover:text-slate-200 active:text-slate-200 bg-teal-200/10 hover:bg-teal-900/80 active:bg-teal-900/80"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="text-[10px] md:text-xs h-8 md:h-9 cursor-pointer focus-visible:ring-1 focus-visible:ring-teal-600/30 text-white/60 hover:text-white active:text-white bg-teal-950 hover:bg-teal-900 active:bg-teal-900/80"
            >
              Send
            </Button>
          </div>
        </form>
      ) : (
        <div className="group">
          <div className="rounded-sm bg-teal-100/10 p-3 border border-white/10">
            <p className="text-xs text-white/80">
              {content}
            </p>
          </div>
          <div 
            className="md:opacity-0 group-hover:opacity-100 flex gap-2 justify-end transition-opacity duration-400"
          >
            <Tooltip content="Copy" className="text-[10px]">
              <Button onClick={() => navigator.clipboard.writeText(content)} className="cursor-pointer active:scale-90 transition-transform !bg-transparent">
                <Copy className="stroke-white/50 size-3 md:size-4"/>
              </Button>
            </Tooltip>
            <Tooltip content="Edit message" className="text-[10px]">
              <Button onClick={handleEditMode} className="cursor-pointer active:scale-90 transition-transform !bg-transparent">
                <PenSquare className="stroke-white/50 size-3 md:size-4"/>
              </Button>
            </Tooltip>
          </div>
        </div>
      )}
    </motion.div>
  )
}
