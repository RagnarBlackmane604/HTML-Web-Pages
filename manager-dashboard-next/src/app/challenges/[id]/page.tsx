import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function ChallengePage({ params }: Props) {
  // Pfad zu deiner JSON-Datei (im Root, falls db.json dort liegt)
  const filePath = path.join(process.cwd(), "db.json");

  // JSON-Datei lesen
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  // Challenges Array aus dem JSON holen
  const challenges = data.challenges;

  // Prüfen, ob challenges ein Array ist
  if (!Array.isArray(challenges)) {
    throw new Error("Expected 'challenges' to be an array");
  }

  // Challenge mit der id aus URL finden
  const challenge = challenges.find((c: { id: string }) => c.id === params.id);

  // Falls keine Challenge gefunden, 404 anzeigen
  if (!challenge) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{challenge.title}</h1>
      <p className="mt-4 whitespace-pre-wrap">{challenge.description}</p>
    </main>
  );
}
