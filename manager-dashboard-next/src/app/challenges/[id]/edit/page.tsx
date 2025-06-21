import ChallengeFormEditClient from "@/components/ChallengeFormEditClient";
import { fetchChallengeById } from "@/lib/api/api";
import { redirect } from "next/navigation";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params;
  const challenge = await fetchChallengeById(awaitedParams.id);

  if (!challenge) {
    redirect("/challenges"); // or show 404
  }

  return <ChallengeFormEditClient initialData={challenge} />;
}
