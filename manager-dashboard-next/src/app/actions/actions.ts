"use server"; 

import { revalidatePath } from "next/cache";

export async function getAllChallenges() {
  const res = await fetch('http://localhost:3001/challenges', {
    cache: 'no-store',
  });
  return await res.json();
}

export async function deleteChallenge(id: string) {
  try {
    const res = await fetch(`http://localhost:3001/challenges/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete challenge');
    }

    revalidatePath('/');

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
