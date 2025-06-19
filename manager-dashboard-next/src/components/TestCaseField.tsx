"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TestCaseField() {
  const [text, setText] = useState("");
  const [caseType, setCaseType] = useState("uppercase");

  const transformText = () => {
    if (caseType === "uppercase") return text.toUpperCase();
    if (caseType === "lowercase") return text.toLowerCase();
    return text;
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="textcase">Text Case</Label>
        <Input
          id="textcase"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="case"
            value="uppercase"
            checked={caseType === "uppercase"}
            onChange={() => setCaseType("uppercase")}
          />
          Uppercase
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="case"
            value="lowercase"
            checked={caseType === "lowercase"}
            onChange={() => setCaseType("lowercase")}
          />
          Lowercase
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="case"
            value="none"
            checked={caseType === "none"}
            onChange={() => setCaseType("none")}
          />
          None
        </label>
      </div>

      <p className="text-muted-foreground">Result: {transformText()}</p>
    </div>
  );
}
