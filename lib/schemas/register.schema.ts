import { z, object } from "zod";

export const registerSchema = object({
  email: z.string().email(),
  username: z
    .string()
    .min(1, "Username must be more than 1 character")
    .max(32, "Username must be less than 32 character"),
  password: z
    .string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be less than 32 character"),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Password does not match",
  path: ["confirm_password"],
});
