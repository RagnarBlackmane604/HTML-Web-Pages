export interface Challenge {
  id: string;
  title: string;
  category: string;
  level: string;
  description?: string;
  functionName?: string;
  language?: "js" | "py";
  fontSize?: string;
  code?: string;
  tests?: Array<{
    type: "string" | "number";
    name: string;
    value: string;
    output: string;
    weight: number;
  }>;
}
