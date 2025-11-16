"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const SectionNavigation = () => {
    const pathname = usePathname()

    return (
        <nav className="relative hidden md:block">
            <ul 
                className="text-sm space-y-3 w-40 sticky top-4 rounded-md p-3 transition-all duration-500"
            >
                <li 
                    className={cn(
                        "text-stone-800 hover:underline hover:font-bold cursor-pointer",
                        pathname === "/" && "font-bold"
                    )}
                >
                    <Link href="/">
                        Introduction
                    </Link>
                </li>
                <Separator/>
                <li 
                    className={cn(
                        "text-stone-800 hover:underline hover:font-bold cursor-pointer",
                        pathname === "/get-started" && "font-bold"
                    )}
                >
                    <Link href="/get-started">
                        Get Started
                    </Link>
                </li>
                <Separator/>
                <li 
                    className={cn(
                        "text-stone-800 hover:underline hover:font-bold cursor-pointer",
                        pathname === "/privacy" && "font-bold"
                    )}
                >
                    <Link href="/privacy">
                        Privacy
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SectionNavigation
