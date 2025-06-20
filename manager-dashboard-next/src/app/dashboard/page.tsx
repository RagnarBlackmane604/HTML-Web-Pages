"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteChallenge } from "@/app/actions/actions";
import { Challenge } from "@/app/types";

export default function DashboardPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Replace this with real fetch logic (z.B. getChallenges())
    const mockChallenges: Challenge[] = [
      {
        id: "1",
        title: "Palindrome Checker",
        category: "Strings",
        level: "Easy",
        createdAt: "2024-04-02",
        description: "",
        code: {
          language: "js",
          content: "",
          functionName: "",
        },
        tests: [],
      },
      {
        id: "2",
        title: "FizzBuzz",
        category: "Logic",
        level: "Easy",
        createdAt: "2024-04-02",
        description: "",
        code: {
          language: "js",
          content: "",
          functionName: "",
        },
        tests: [],
      },
      {
        id: "3",
        title: "Binary Search",
        category: "Algorithms",
        level: "Moderate",
        createdAt: "2024-04-02",
        description: "",
        code: {
          language: "js",
          content: "",
          functionName: "",
        },
        tests: [],
      },
      {
        id: "4",
        title: "Merge Sort",
        category: "Algorithms",
        level: "Hard",
        createdAt: "2024-04-02",
        description: "",
        code: {
          language: "js",
          content: "",
          functionName: "",
        },
        tests: [],
      },
    ];

    setChallenges(mockChallenges);
  }, []);

  async function handleDelete(id: string): Promise<void> {
    setDeletingId(id);

    const result = await deleteChallenge(id);

    if (result.success) {
      toast.success("Challenge deleted successfully");
      setChallenges((prev) => prev.filter((c) => c.id !== id));
    } else {
      toast.error(`Delete failed: ${result.error}`);
    }

    setDeletingId(null);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Your Challenges</h2>
          <button
            onClick={() => router.push("/challenges/create")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            + Create Challenge
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Level</th>
                <th className="py-3 px-4 text-left">Created At</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {challenges.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No challenges found.
                  </td>
                </tr>
              ) : (
                challenges.map((challenge) => (
                  <tr
                    key={challenge.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4">{challenge.title}</td>
                    <td className="py-3 px-4">{challenge.category}</td>
                    <td className="py-3 px-4">{challenge.level}</td>
                    <td className="py-3 px-4">
                      {new Date(challenge.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() =>
                          router.push(`/challenges/${challenge.id}/edit`)
                        }
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(challenge.id)}
                        disabled={deletingId === challenge.id}
                        className={`${
                          deletingId === challenge.id
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        } bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition`}
                      >
                        {deletingId === challenge.id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
