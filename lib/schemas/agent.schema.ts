import { z, object } from "zod";

export const agentChatSchema = object({
  prompt: z.string().min(1, "Prompt cannot be empty"),
  user_id: z.string().min(1, "User ID cannot be empty"),
});
