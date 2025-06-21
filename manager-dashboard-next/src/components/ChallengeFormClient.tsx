"use client";

import { useRouter } from "next/navigation"; 
import ChallengeForm from "./ChallengeForm";
import type { FormData } from "./ChallengeForm";

export default function ChallengeFormClient() {
  const router = useRouter();

  async function handleCreate(data: FormData) {
    try {
      
      const response = await fetch("/api/challenges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create challenge");
      }

     
      const createdChallenge = await response.json();

      
      router.push(`/challenges/${createdChallenge.id}`);
    } catch (error) {
      alert("There was an error creating the challenge.");
      console.error(error);
    }
  }

  return <ChallengeForm onSubmit={handleCreate} />;
}
