import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default async function handler(req: NextRequest) {
  try {
    // Create a new response object
    const res = new NextResponse();

    // Pass both req and res to clerkMiddleware
    await clerkMiddleware(req as any, res as any);

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
