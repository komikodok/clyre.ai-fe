"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Oregano, Orbitron } from "next/font/google";
import {
  LogIn,
  LogOut,
  SquareArrowOutUpRight,
  ChevronDown,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useAuth } from "@/lib/react-query/hooks/auth.hook";
import { signOut } from "next-auth/react";
import { motion } from "motion/react";

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-orbitron",
});

const Navbar = () => {
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-7xl mx-auto bg-[#0d1e21]/5 flex space-x-3 items-center">
      <Link href="/#" className="p-2">
        <h1
          className={`
              font-extrabold space-x-0.5 text-lg md:text-2xl text-[#0d1e21] tracking-tight p-2
              ${oregano.className}
          `}
        >
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="inline-block px-2 py-1 font-semibold text-white rounded-tl-2xl rounded-tr-3xl rounded-br-lg rounded-bl-[2.5em] bg-gradient-to-br from-teal-900 via-teal-950 to-[#0d1e21]"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block"
            >
              C
            </motion.span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className={cn("inline-block", orbitron.className)}
          >
            lyre
          </motion.span>
        </h1>
      </Link>

      <NavigationMenu className="!ml-auto hidden md:flex">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={`cursor-pointer !bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Get started
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={`cursor-pointer !bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="gap-[1px] hidden md:flex items-center">
        <Link
          href={isAuthenticated ? "/chat" : "/login"}
          className="w-20 h-10 rounded-l-md flex justify-center items-center text-sm !text-white !bg-[#0d1e21] hover:text-white"
        >
          Try it
        </Link>
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger asChild>
            <Button className="cursor-pointer rounded-l-none h-10 !text-white !bg-[#031a1c] p-3 flex items-center">
              <ChevronDown
                className={cn(
                  "size-4 transition-all",
                  openPopover && "rotate-180"
                )}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[170px] space-y-3">
            <h1 className="font-semibold text-sm text-zinc-800">Start With</h1>
            <ul className="space-y-2">
              <li className="cursor-pointer text-sm text-zinc-700 flex gap-2 items-center justify-between hover:bg-zinc-100 hover:underline rounded-md px-2 py-1">
                <Link
                  href={isAuthenticated ? "/chat" : "/login"}
                  className="hover:underline"
                >
                  Consult
                </Link>
                <SquareArrowOutUpRight className="size-3" />
              </li>
            </ul>

            <Separator className="h-[1px] bg-stone-200" />

            {isAuthenticated ? (
              <div
                onClick={() => signOut({ callbackUrl: "/" })}
                data-testid="logout-button"
                className="cursor-pointer flex justify-between text-sm text-red-500 font-semibold"
              >
                <span>Logout</span>
                <LogOut className="size-4" />
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm text-zinc-800 font-semibold flex justify-between items-center"
              >
                Login
                <LogIn className="size-4" />
              </Link>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
