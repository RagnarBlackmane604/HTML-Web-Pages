export type ChallengeLevel = "Easy" | "Moderate" | "Hard";

export type ChallengeCategory = "Strings" | "Logic" | "Algorithms" | string; // Beispiel, je nach deinem Setup

export interface TestCase {
  type: "string" | "number";
  name: string;
  value: string;
  output: string;
  weight: number;
}

export interface Challenge {
  id: string;
  title: string;
  category: ChallengeCategory;
  description: string; // markdown
  level: ChallengeLevel;
  language: 'js' | 'py';
  functionName: string;
  code: string;  // reiner Code-String
  tests: TestCase[];
  createdAt: string; // ISO date string
  fontSize?: number; // optionales Feld, um mit dem Formular kompatibel zu sein
}
