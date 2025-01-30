import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    // const { pathname } = request.nextUrl;
    // console.log(`Requested page: ${pathname}`)
    const isAuthenticated = false
    if(!isAuthenticated){
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher:['/dashboard']
}