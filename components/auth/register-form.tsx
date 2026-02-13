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
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-6"
      >
        <h2 className="text-lg font-bold tracking-tight text-white">
          Create account
        </h2>
        <p className="text-[11px] text-white/40 mt-1">Get started with Clyre</p>
      </motion.div>
      <Form {...form}>
        <form
          aria-label="register-form"
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-7"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative border border-white/20 focus-within:border-teal-400 rounded-lg flex items-center transition-colors duration-300">
                <motion.div
                  initial={{
                    opacity: 0.5,
                    top: "auto",
                    backgroundColor: "rgba(0,0,0,0)",
                  }}
                  animate={{
                    opacity: 1,
                    top: -7,
                    backgroundColor: "rgba(5, 16, 16, 0.9)",
                  }}
                  transition={{ delay: 0.5 }}
                  className="px-2 rounded absolute left-2"
                >
                  <FormLabel className="!text-teal-300/80 text-[10px] font-semibold uppercase tracking-wider">
                    Email
                  </FormLabel>
                </motion.div>

                <FormControl>
                  <Input
                    {...field}
                    className="!text-xs px-4 border-none outline-none focus-visible:ring-0 h-10 bg-transparent text-white/90 placeholder:text-white/20"
                  />
                </FormControl>
                <FormMessage className="absolute top-full text-[10px] p-1 text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="relative border border-white/20 focus-within:border-teal-400 rounded-lg flex items-center transition-colors duration-300">
                <motion.div
                  initial={{
                    opacity: 0.5,
                    top: "auto",
                    backgroundColor: "rgba(0,0,0,0)",
                  }}
                  animate={{
                    opacity: 1,
                    top: -7,
                    backgroundColor: "rgba(5, 16, 16, 0.9)",
                  }}
                  transition={{ delay: 0.7 }}
                  className="px-2 rounded absolute left-2"
                >
                  <FormLabel className="!text-teal-300/80 text-[10px] font-semibold uppercase tracking-wider">
                    Username
                  </FormLabel>
                </motion.div>

                <FormControl>
                  <Input
                    {...field}
                    className="!text-xs px-4 border-none outline-none focus-visible:ring-0 h-10 bg-transparent text-white/90 placeholder:text-white/20"
                  />
                </FormControl>
                <FormMessage className="absolute top-full text-[10px] p-1 text-red-400" />
              </FormItem>
            )}
          />

          <div className="flex gap-2 items-center">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative w-full border border-white/20 focus-within:border-teal-400 rounded-lg flex items-center transition-colors duration-300">
                  <motion.div
                    initial={{
                      opacity: 0.5,
                      top: "auto",
                      backgroundColor: "rgba(0,0,0,0)",
                    }}
                    animate={{
                      opacity: 1,
                      top: -7,
                      backgroundColor: "rgba(5, 16, 16, 0.9)",
                    }}
                    transition={{ delay: 0.9 }}
                    className="px-2 rounded absolute left-2"
                  >
                    <FormLabel className="!text-teal-300/80 text-[10px] font-semibold uppercase tracking-wider">
                      Password
                    </FormLabel>
                  </motion.div>

                  <FormControl>
                    <Input
                      type={`${!showPassword && "password"}`}
                      autoComplete="off"
                      {...field}
                      className="!text-xs px-4 border-none outline-none focus-visible:ring-0 h-10 bg-transparent text-white/90 placeholder:text-white/20"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-full text-[10px] p-1 text-red-400" />
                </FormItem>
              )}
            />

            <div
              className="cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="stroke-white/50 size-4" />
              ) : (
                <EyeClosed className="stroke-white/50 size-4" />
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className="relative w-full border border-white/20 focus-within:border-teal-400 rounded-lg flex items-center transition-colors duration-300">
                  <motion.div
                    initial={{
                      opacity: 0.5,
                      top: "auto",
                      backgroundColor: "rgba(0,0,0,0)",
                    }}
                    animate={{
                      opacity: 1,
                      top: -7,
                      backgroundColor: "rgba(5, 16, 16, 0.9)",
                    }}
                    transition={{ delay: 1.1 }}
                    className="px-2 rounded absolute left-2"
                  >
                    <FormLabel className="!text-teal-300/80 text-[10px] font-semibold uppercase tracking-wider">
                      Confirm Password
                    </FormLabel>
                  </motion.div>

                  <FormControl>
                    <Input
                      type={`${!showConfirmPassword && "password"}`}
                      autoComplete="off"
                      {...field}
                      className="!text-xs px-4 border-none outline-none focus-visible:ring-0 h-10 bg-transparent text-white/90 placeholder:text-white/20"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-full text-[10px] p-1 text-red-400" />
                </FormItem>
              )}
            />

            <div
              className="cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <Eye className="stroke-white/50 size-4" />
              ) : (
                <EyeClosed className="stroke-white/50 size-4" />
              )}
            </div>
          </div>

          <div className="space-y-4 pt-1">
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full text-xs bg-teal-500 hover:bg-teal-400 active:scale-[0.98] text-[#051010] cursor-pointer font-bold h-10 rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/30 disabled:opacity-30"
            >
              {status === "loading" ? "Creating account..." : "Create account"}
            </Button>
            <p className="text-center text-[11px] text-white/35">
              Already have an account?{" "}
              <span
                onClick={() => router.replace("/login")}
                className="text-teal-400 font-semibold hover:text-teal-300 cursor-pointer transition-colors"
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
