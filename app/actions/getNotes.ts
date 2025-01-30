'use server';

import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/navigation";

async function getNotes() {
  try {
    const { databases } = await createAdminClient();

    // Fetch notes from Appwrite database
    const { documents: notes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_NOTE!
    );

    return notes;
  } catch (error) {
    console.error("Failed to get notes:", error);

    // Redirect to an error page or handle the error gracefully
    redirect("/error");
  }
}

export default getNotes;
