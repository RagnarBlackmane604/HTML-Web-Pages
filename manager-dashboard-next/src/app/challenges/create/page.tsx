"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ChallengeForm = dynamic(() => import("@/components/ChallengeForm"), {
  ssr: false,
});

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
        router.push("/challenges"); // Zu /challenges navigieren, nicht zur Root
      } else {
        toast.error("Failed to create challenge");
      }
    } catch {
      toast.error("An error occurred while submitting");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create Challenge</h1>
      <ChallengeForm onSubmit={handleCreate} />
    </div>
  );
}
