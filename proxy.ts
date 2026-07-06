import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  CASE_STUDY_COOKIE_NAME,
  CASE_STUDY_COOKIE_VALUE,
} from "@/lib/case-study-auth";

export function proxy(request: NextRequest) {
  const accessCookie = request.cookies.get(CASE_STUDY_COOKIE_NAME)?.value;
  if (accessCookie === CASE_STUDY_COOKIE_VALUE) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/case-study-access";
  redirectUrl.searchParams.set(
    "next",
    `${request.nextUrl.pathname}${request.nextUrl.search}`
  );

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/case-study/:path*"],
};
