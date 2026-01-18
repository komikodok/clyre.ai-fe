"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowUp, Ellipsis } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouteAgent } from "@/lib/react-query/hooks/agent.hook";
import { useRouter, usePathname } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

const promptSchema = z.object({
  prompt: z.string().min(1, "Prompt cannot be empty"),
});

function PromptInput({ ...props }: React.ComponentProps<"form">) {
  const { mutateAsync, isPending } = useRouteAgent();
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof promptSchema>>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: "",
    },
    mode: "onChange",
  });

  const promptValue = form.watch("prompt");

  async function handleSubmit(values: z.infer<typeof promptSchema>) {
    try {
      const res = await mutateAsync(values.prompt);
      const topicName = res?.data?.ux_actions?.[0]?.target_topic;

      form.reset();

      if (pathname === "/chat") {
        router.push(`/chat/${encodeURIComponent(topicName)}`);
      }
    } catch {
      form.setError("prompt", {
        type: "manual",
        message: "Failed to start a new chat.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        {...props}
        onSubmit={form.handleSubmit(handleSubmit)}
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
                  className="outline-none! resize-none min-h-8 md:min-h-10 border-none flex items-center text-slate-200 text-xs md:text-sm focus-visible:ring-0"
                  style={{ scrollbarWidth: "initial" }}
                />
              </FormControl>
              <FormMessage className="absolute text-red-400 top-full text-[10px] p-1" />
            </FormItem>
          )}
        />

        <div className="flex justify-between w-full">
          <div></div>
          <Button
            type="submit"
            disabled={!form.formState.isValid || isPending}
            className="outline-none! focus-visible:ring-0 bg-teal-900 hover:bg-teal-800 active:bg-teal-950 w-8 md:w-10 h-8 md:h-10 transition-colors duration-400"
          >
            {promptValue && !isPending ? (
              <ArrowUp className="fill-slate-200/10" />
            ) : (
              <Ellipsis className="fill-slate-200/10" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PromptInput;
