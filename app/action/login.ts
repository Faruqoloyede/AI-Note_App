'use server';
import { auth } from '@/config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { cookies } from 'next/headers';

async function createlogin(formData: FormData) {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user) throw new Error("User not found.");

    // Get Firebase Auth token
    const token = await user.getIdToken();

    // Set the token in a cookie
    (await
          // Set the token in a cookie
          cookies()).set('auth-token', token, {
      httpOnly: true, 
      secure: true, 
      sameSite: 'strict', 
      path: '/', 
      maxAge: 60 * 60 * 24 * 7, // 7 days expiration
    });

    return { success: true, message: 'Login successful!' };
  } catch (error: any) {
    console.error("Login Error:", error.message);
    throw new Error(error.message);
  }
}

export default createlogin;
