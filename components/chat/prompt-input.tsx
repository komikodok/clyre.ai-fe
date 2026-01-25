"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowUp, Ellipsis, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { promptSchema } from "@/lib/schemas/agent.schema";

interface PromptInputProps extends Omit<
  React.ComponentProps<"form">,
  "onSubmit"
> {
  form: UseFormReturn<z.infer<typeof promptSchema>>;
  onSubmit: (values: z.infer<typeof promptSchema>) => void;
  isPending: boolean;
  isStreaming?: boolean;
  onAbort?: () => void;
}

function PromptInput({
  form,
  onSubmit,
  isPending,
  isStreaming = false,
  onAbort,
  ...props
}: PromptInputProps) {
  const promptValue = form.watch("prompt");

  const handleAbortClick = () => {
    if (isStreaming && onAbort) {
      onAbort();
    }
  };

  return (
    <Form {...form}>
      <form
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "sticky bottom-1 flex flex-col items-center p-1 max-h-50 md:max-h-60 max-w-xs md:max-w-3xl w-full rounded-lg backdrop-blur-xs border border-teal-950 bg-teal-800/10",
          props.className,
        )}
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="w-full relative">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Ask me anything..."
                  className="outline-none! my-2 resize-none min-h-8 md:min-h-10 max-h-42 border-none flex items-center text-slate-200 text-xs md:text-sm focus-visible:ring-0"
                  style={{ scrollbarWidth: "none" }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (!isPending && form.formState.isValid) {
                        form.handleSubmit(onSubmit)();
                      }
                    }
                  }}
                />
              </FormControl>
              <FormMessage className="absolute text-red-400 top-full text-[10px] p-1" />
            </FormItem>
          )}
        />

        <div className="flex justify-between w-full">
          <div></div>
          {isStreaming ? (
            <Button
              type="button"
              onClick={handleAbortClick}
              className="outline-none! focus-visible:ring-1 ring-teal-700 bg-teal-900 hover:bg-teal-800 active:bg-teal-950 w-8 md:w-10 h-8 md:h-10 transition-colors duration-400"
            >
              <Square className="fill-white w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!form.formState.isValid || isPending}
              className="outline-none! focus-visible:ring-1 ring-teal-700 bg-teal-900 hover:bg-teal-800 active:bg-teal-950 w-8 md:w-10 h-8 md:h-10 transition-colors duration-400"
            >
              {promptValue && !isPending ? (
                <ArrowUp className="fill-white" />
              ) : (
                <Ellipsis className="fill-white" />
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default PromptInput;
