import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/", request.url)); // Redirect to login if no token
    }

    return NextResponse.next();
}

// Protect only the dashboard route
export const config = {
    matcher: ["/dashboard/:path*"], // Protects all dashboard-related pages
};
