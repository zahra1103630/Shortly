import { auth } from "@/lib/auth/server";
import { NextResponse } from "next/server";

export async function proxy(request: Request) {
  const result = await auth.getSession();

  if (!result.data) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
