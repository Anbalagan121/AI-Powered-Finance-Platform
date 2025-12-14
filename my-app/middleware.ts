import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/account(.*)",
    "/transaction(.*)",
]);

export default clerkMiddleware((auth, req) => {
    const { userId } = auth();

    if (!userId && isProtectedRoute(req)) {
        const signInUrl = new URL("/sign-in", req.url);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico)).*)",
        "/(api|trpc)(.*)",
    ],
};
