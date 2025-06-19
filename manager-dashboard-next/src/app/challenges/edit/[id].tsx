"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChallengeForm from "@/components/ChallengeForm";
import { toast } from "sonner";  


type Challenge = {
  id: string;
  title: string;
  category: string;
  level: "Easy" | "Moderate" | "Hard";
  description: string;
  functionName: string;
  code: string;
  language: "js" | "py";
  fontSize: number;
  tests: TestCase[];
};

type TestCase = {
  type: "number" | "string";
  name: string;
  value: any;
  output: any;
  weight: number;
};

interface ChallengeFormEditProps {
  params: { id: string };
}

export default function ChallengeFormEdit({ params }: ChallengeFormEditProps) {
  const router = useRouter();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch challenge data on mount
  useEffect(() => {
    async function fetchChallenge() {
      try {
        const res = await fetch(`http://localhost:3000/challenges/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch challenge");
        const data: Challenge = await res.json();
        setChallenge(data);
      } catch (error) {
        toast.error("Error loading challenge");
      } finally {
        setLoading(false);
      }
    }
    fetchChallenge();
  }, [params.id]);


  async function handleUpdate(updatedData: Challenge) {
    try {
      const res = await fetch(`http://localhost:3001/challenges/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) throw new Error("Failed to update challenge");

      toast.success("Challenge updated successfully!");
      router.push("/"); 
    } catch (error) {
      toast.error("Failed to update challenge");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (!challenge) return <p>Challenge not found.</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Challenge</h1>
      <ChallengeForm initialData={challenge} onSubmit={handleUpdate} />
    </div>
  );
}
