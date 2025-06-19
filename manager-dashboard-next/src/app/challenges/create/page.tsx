'use client';

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const ChallengeForm = dynamic(() => import("@/components/ChallengeForm"), { ssr: false });

export default function CreateChallengePage() {
  const router = useRouter();

  async function handleCreate(data: any) {
    try {
      const res = await fetch("/api/challenges", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Challenge created successfully");
        router.push("/");
      } else {
        toast.error("Failed to create challenge");
      }
    } catch {
      toast.error("An error occurred while submitting");
    }
  }

  return <ChallengeForm onSubmit={handleCreate} />;
}
