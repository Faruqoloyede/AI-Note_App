'use server';
import { createAdminClient } from "@/config/appwrite";
import { Cookie, cookies } from "next/headers";

async function createSession(formData: FormData) {
    // Get email and password from formData
    const email = formData.get('email');
    const password = formData.get('password');

    // Check if email and password are valid strings
    if (typeof email !== 'string' || typeof password !== 'string') {
        throw new Error("Invalid email or password");
    }

    // Get account instance
    const { account } = await createAdminClient();

    try {
        // Generate session
        const session = await account.createEmailPasswordSession(email, password);
        // create cookies
        (await cookies()).set('appwrite-session', session.secret, {
            httpOnly:true,
            secure: true,
            sameSite:'strict',
            expires: new Date(session.expire),
            path:'/'
        });
        return {
            success: true
        }
    } catch (error) {
        console.error("Failed to create session:", error);
        throw error; // Optionally rethrow the error to handle it in the caller
    }
}

export default createSession;
