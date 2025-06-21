"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ChallengeForm from "@/components/ChallengeForm";
import type { FormData } from "./ChallengeForm";
import type { Challenge } from "@/app/types";


interface ChallengeFormEditProps {
  initialData: Challenge;
}

type TestCase = {
  type: "number" | "string";
  name: string;
  value: any;
  output: any;
  weight: number;
};

export default function ChallengeFormEditClient({
  initialData,
}: ChallengeFormEditProps) {
  const router = useRouter();

  async function handleUpdate(data: FormData) {
    console.log("Updated data:", data);
    toast.success("Challenge updated!");
    router.push("/dashboard");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Challenge</h1>
      <ChallengeForm 
      initialData={{
        ...initialData, 
        fontSize: initialData.fontSize ?? 14,
        level: (initialData.level ?? "Easy") as "Easy" | "Moderate" | "Hard",
        }}
        onSubmit={handleUpdate}
      />
    </div>
  );
}

