import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/maintenance"))
    return NextResponse.redirect(new URL("/maintenance", request.url));

  NextResponse.next();
}

export const config = {
  matcher: ["/", "/maintenance"],
};
