import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const isAuthenticated = !!req.auth;
  const pathname = req.nextUrl.pathname;

  const publicRoutes = ["/login", "/register"];
  const protectedRoutes: string[] = []; // Allow access to /chat for unauthenticated users

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  // If unauthenticated and trying to access /chat/:topic, redirect to /chat
  if (
    !isAuthenticated &&
    pathname.startsWith("/chat") &&
    pathname !== "/chat"
  ) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
