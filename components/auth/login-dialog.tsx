"use strict";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./login-form";

interface LoginDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function LoginDialog({
  children,
  open,
  onOpenChange,
}: LoginDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent
        className="sm:max-w-[420px] p-0 overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/50 rounded-2xl max-h-[95dvh] flex flex-col text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a1f1a 0%, #061210 40%, #040d0d 70%, #081a16 100%)",
        }}
      >
        <div className="relative pt-8 pb-8 px-6 sm:px-8 overflow-y-auto custom-scrollbar">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
          <DialogHeader className="sr-only">
            <DialogTitle>Sign in</DialogTitle>
            <DialogDescription>Sign in to your account</DialogDescription>
          </DialogHeader>
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
