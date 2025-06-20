import { fetchData } from "@/lib/api/api";
import Navbar from "@/components/Navbar";
import ChallengeForm from "@/components/ChallengeForm";
import ChallengesList from "@/components/ChallengesList";
import FontSizeMenu from "@/components/FontSizeMenu";
import LanguageMenu from "@/components/LanguageMenu";
import TestCaseField from "@/components/TestCaseField";
import { Challenge } from "@/app/types";

import { getServerSession } from "next-auth"; 
import { authOptions } from "@/lib/auth"; 
import { redirect } from "next/navigation";

export default async function Page() {
  // Protect this page
  const session = await getServerSession(authOptions);

  // If not logged in or not a manager, redirect
  if (!session || session.user.role !== "manager") {
    return redirect("/login"); // or a 403 page
  }

  const challenges: Challenge[] = await fetchData();

  return (
    <div>
      <Navbar />

      <div style={{ padding: 20 }}>
        <FontSizeMenu />
        <LanguageMenu />
        <TestCaseField />

        <h2>Challenges List</h2>
        <ChallengesList challenges={challenges} />

        <h2>Create / Edit Challenge</h2>
        <ChallengeForm initialData={challenges[0]} />
      </div>
    </div>
  );
}
