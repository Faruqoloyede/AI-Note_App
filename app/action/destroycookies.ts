"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

async function destroycookies() {
    const sessionCookie = (await cookies()).get("auth-token");

    if (!sessionCookie) {
        return { error: "No session cookies found" };
    }

    try {
        // Remove the session cookie
        await signOut(auth);
        (await cookies()).delete("auth-token");

        // Redirect to the login page
        return {
            success: true
        };

    } catch (error: any) {
        return {
            error: 'failed'
        };
    }
}

export default destroycookies;
