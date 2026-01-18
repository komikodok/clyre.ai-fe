"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const SectionNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="relative w-full">
      <ul className="flex md:flex-col gap-2 md:gap-1 w-full overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        <li>
          <Link
            href="/"
            className={cn(
              "block px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
              pathname === "/"
                ? "bg-stone-100 text-stone-900"
                : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
            )}
          >
            Introduction
          </Link>
        </li>
        <li>
          <Link
            href="/usage"
            className={cn(
              "block px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
              pathname === "/usage"
                ? "bg-stone-100 text-stone-900"
                : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
            )}
          >
            Usage
          </Link>
        </li>
        <li>
          <Link
            href="/privacy"
            className={cn(
              "block px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
              pathname === "/privacy"
                ? "bg-stone-100 text-stone-900"
                : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
            )}
          >
            Privacy
          </Link>
        </li>
      </ul>
      <Separator className="mt-4 md:hidden" />
    </nav>
  );
};

export default SectionNavigation;
