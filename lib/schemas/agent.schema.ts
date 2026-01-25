import { z, object } from "zod";

export const promptSchema = object({
  prompt: z.string().min(1, "Prompt cannot be empty"),
});
