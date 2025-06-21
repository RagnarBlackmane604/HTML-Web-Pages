export type ChallengeLevel = "Easy" | "Moderate" | "Hard";

export type ChallengeCategory = "Strings" | "Logic" | "Algorithms" | string; 

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
  description: string; 
  level: ChallengeLevel;
  language: 'js' | 'py';
  functionName: string;
  code: string; 
  tests: TestCase[];
  createdAt: string; 
  fontSize?: number; 
}
