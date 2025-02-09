'use server';

import { auth } from '@/config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function createLogin(formData: FormData) {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) {
    return { success: false, error: "Email and password are required." };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user) return { success: false, error: "User not found." };

    return { success: true, user: { uid: user.uid, email: user.email } };
  } catch (error: any) {
    console.error("Login Error:", error.message);
    return { success: false, error: error.message };
  }
}
