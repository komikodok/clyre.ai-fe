"use client";
import { Eye, EyeClosed } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { loginSchema } from "@/lib/schemas/login.schema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { motion } from "motion/react";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const { status } = useSession();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  async function handleSubmit(values: z.infer<typeof loginSchema>) {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.error) {
      switch (res.error) {
        case "CredentialsSignin":
          form.setError("email", {
            type: "onChange",
            message: "Email or password invalid",
          });
          form.setError("password", {
            type: "onChange",
            message: "Email or password invalid",
          });
          break;
        default:
          form.setError("email", {
            type: "onChange",
            message: res.error,
          });
          form.setError("password", {
            type: "onChange",
            message: res.error,
          });
      }
    }

    router.push("/chat");
  }

  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-center mb-3 text-[#082E24]"
      >
        Have account?
      </motion.h2>
      <Form {...form}>
        <form
          aria-label="login-form"
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-12 md:space-y-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" relative border border-zinc-300 focus-within:border-[#1A2421] rounded-md flex items-center">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1, top: ["auto", -7] }}
                  transition={{ delay: 0.5 }}
                  className="px-2 bg-white rounded-lg absolute left-2"
                >
                  <FormLabel className="!text-[#1A2421] bg-white text-xs">
                    Email
                  </FormLabel>
                </motion.div>

                <FormControl>
                  <Input
                    {...field}
                    className="!text-xs px-4 border-none outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="absolute top-full text-[10px] p-1" />
              </FormItem>
            )}
          />

          <div className="flex gap-2 justify-between items-center">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative w-full border border-zinc-300 focus-within:border-[#1A2421] rounded-md flex items-center">
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1, top: ["auto", -7] }}
                    transition={{ delay: 0.7 }}
                    className="px-2 bg-white rounded-lg absolute left-2"
                  >
                    <FormLabel className="!text-[#1A2421] bg-white text-xs">
                      Password
                    </FormLabel>
                  </motion.div>

                  <FormControl>
                    <Input
                      type={`${!showPassword && "password"}`}
                      autoComplete="off"
                      {...field}
                      className="!text-xs px-4 border-none outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-full text-[10px] p-1" />
                </FormItem>
              )}
            />

            {showPassword ? (
              <Eye
                className="stroke-[#1A2421] size-4"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeClosed
                className="stroke-[#1A2421] size-4"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full text-xs bg-[#082E24] hover:bg-[#0F1915] active:bg-[#0F1915] text-white cursor-pointer font-semibold p-2 rounded-md transition-all duration-500"
            >
              {status === "loading" ? "Authenticating..." : "Sign In"}
            </Button>
            <p className="font-light text-xs flex gap-2">
              Don&apos;t have an account yet?
              <span
                onClick={() => router.replace("/register")}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
