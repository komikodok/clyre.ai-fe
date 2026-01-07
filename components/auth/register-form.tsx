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

import { registerSchema } from "@/lib/schemas/register.schema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { authServices } from "@/lib/api/services/auth.service";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const router = useRouter();
  const { status } = useSession();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    mode: "onChange",
  });

  async function handleSubmit(values: z.infer<typeof registerSchema>) {
    try {
      await authServices.register(values);
      form.reset();

      return router.push("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-center mb-3 text-[#082E24]"
      >
        Sign up
      </motion.h2>
      <Form {...form}>
        <form
          aria-label="register-form"
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

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className=" relative border border-zinc-300 focus-within:border-[#1A2421] rounded-md flex items-center">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1, top: ["auto", -7] }}
                  transition={{ delay: 0.7 }}
                  className="px-2 bg-white rounded-lg absolute left-2"
                >
                  <FormLabel className="!text-[#1A2421] bg-white text-xs">
                    Username
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
                    transition={{ delay: 0.9 }}
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

          <div className="flex gap-2 justify-between items-center">
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className="relative w-full border border-zinc-300 focus-within:border-[#1A2421] rounded-md flex items-center">
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1, top: ["auto", -7] }}
                    transition={{ delay: 1.1 }}
                    className="px-2 bg-white rounded-lg absolute left-2"
                  >
                    <FormLabel className="!text-[#1A2421] bg-white text-xs">
                      Confirm Password
                    </FormLabel>
                  </motion.div>

                  <FormControl>
                    <Input
                      type={`${!showConfirmPassword && "password"}`}
                      autoComplete="off"
                      {...field}
                      className="!text-xs px-4 border-none outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-full text-[10px] p-1" />
                </FormItem>
              )}
            />

            {showConfirmPassword ? (
              <Eye
                className="stroke-[#1A2421] size-4"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <EyeClosed
                className="stroke-[#1A2421] size-4"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full text-xs bg-[#082E24] hover:bg-[#0F1915] active:bg-[#0F1915] text-white cursor-pointer font-semibold p-2 rounded-md transition-all duration-500"
            >
              {status === "loading" ? "Authenticating..." : "Sign up"}
            </Button>
            <p className="font-light text-xs flex gap-2">
              Have account?
              <span
                onClick={() => router.replace("/login")}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
