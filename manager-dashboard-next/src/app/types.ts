export interface Challenge {
  id: string;
  title: string;
  category: string;
  level: string;
  description?: string;
  functionName?: string;
  language?: "js" | "py";
  fontSize?: number;
  code?: string;
  tests?: Array<{
    type: "string" | "number";
    name: string;
    value: string;
    output: string;
    weight: number;
  }>;
}

export enum ChallengeLevel {
  Easy = 'Easy',
  Moderate = 'Moderate',
  Hard = 'Hard'
}

export enum Language {
  JS = 'js',
  PY = 'py'
}
