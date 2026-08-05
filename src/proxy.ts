import { auth } from "@/lib/auth/server";
import { NextResponse } from "next/server";

export async function proxy(request: Request) {
  const session = await auth.getSession();

  const { pathname } = new URL(request.url);

  const isLoggedIn = !!session.data;

  // Protected routes
  if (pathname.startsWith("/dashboard") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Guest only routes
  if (
    (pathname.startsWith("/login") || pathname.startsWith("/signup")) &&
    isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
