import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const clerkSecret = process.env.CLERK_SECRET_KEY;
const clerkPub = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const enableClerk = !!clerkSecret && !!clerkPub && clerkPub.startsWith("pk_") && !clerkPub.includes("...");

const exportedMiddleware = enableClerk ? clerkMiddleware() : (request: Request) => {
    return NextResponse.next();
};

export default exportedMiddleware;

export const config = {
    matcher: [
        "/((?!_next|.*\\..*|sign-in|sign-up).*)",
    ],
};
