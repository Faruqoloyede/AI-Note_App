// Import the necessary functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH!,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE!,
  appId: process.env.NEXT_PUBLIC_APP_ID!
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 🔥 Set auth persistence before using it
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("🔥 Auth persistence enabled"))
  .catch((error) => console.error("⚠️ Auth persistence error:", error));

export { auth, db };
export default app;
