import { NextResponse } from "next/server";
import {
  CASE_STUDY_COOKIE_NAME,
  CASE_STUDY_COOKIE_VALUE,
  CASE_STUDY_SESSION_SECONDS,
  isCaseStudyAuthConfigured,
  isCaseStudyPasswordValid,
} from "@/lib/case-study-auth";

function sanitizeNextPath(nextPath: string | undefined) {
  if (!nextPath || !nextPath.startsWith("/")) {
    return "/case-study/project-forge";
  }

  if (nextPath.startsWith("//")) {
    return "/case-study/project-forge";
  }

  return nextPath;
}

export async function POST(request: Request) {
  let password = "";
  let nextPath = "/case-study/project-forge";

  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
    nextPath =
      typeof body?.nextPath === "string" ? body.nextPath : nextPath;
  } catch {
    // JSON parsing failure falls back to empty password.
  }

  if (!isCaseStudyAuthConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Password protection is not configured." },
      { status: 500 }
    );
  }

  if (!isCaseStudyPasswordValid(password)) {
    return NextResponse.json(
      { ok: false, message: "Incorrect password. Please try again." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    ok: true,
    redirectTo: sanitizeNextPath(nextPath),
  });

  response.cookies.set({
    name: CASE_STUDY_COOKIE_NAME,
    value: CASE_STUDY_COOKIE_VALUE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: CASE_STUDY_SESSION_SECONDS,
    path: "/",
  });

  return response;
}
