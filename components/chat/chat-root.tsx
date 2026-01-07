"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType>({
  openSidebar: false,
  setOpenSidebar: () => {},
});

function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

function Root({ ...props }: React.ComponentProps<"div">) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      <div
        {...props}
        className={cn("w-screen h-screen overflow-hidden", props.className)}
      >
        {props.children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return <aside>{children}</aside>;
}

function SidebarTrigger({
  asChild,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  const { openSidebar, setOpenSidebar } = useSidebar();
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...props}
      onClick={() => setOpenSidebar(!openSidebar)}
      className={cn(
        "w-8 h-8 flex justify-center bg-background items-center rounded-lg",
        props.className
      )}
    >
      {props.children}
    </Comp>
  );
}

function SidebarHeader({ children, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      {...props}
      className={cn("flex px-1 gap-2 w-full h-fit", props.className)}
    >
      {children}
    </header>
  );
}

function SidebarBody({ ...props }: React.ComponentProps<"div">) {
  const { openSidebar } = useSidebar();

  return (
    <div
      {...props}
      className={cn(
        "w-64 fixed left-0 inset-y-0 transition-transform",
        openSidebar
          ? "translate-x-0"
          : "-translate-x-full md:-translate-x-[80%]",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function Window({ children, ...props }: React.ComponentProps<"div">) {
  const { openSidebar } = useSidebar();

  return (
    <main
      {...props}
      className={cn(
        "w-full h-full",
        openSidebar ? "md:pl-64" : "pl-0 md:pl-12",
        props.className
      )}
    >
      {children}
    </main>
  );
}

function Header({ children, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      {...props}
      className={cn("flex px-1 gap-2 w-full h-fit", props.className)}
    >
      {children}
    </header>
  );
}

function Body({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("w-full h-full relative flex-1", props.className)}
    >
      {children}
    </div>
  );
}

export default useSidebar;

export const Chat = {
  Root,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarBody,
  Window,
  Header,
  Body,
};
