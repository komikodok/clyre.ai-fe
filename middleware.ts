import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const isAuthenticated = !!req.auth;
  const pathname = req.nextUrl.pathname;

  const publicRoutes = ["/login", "/register"];
  const protectedRoutes = ["/chat"];

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
