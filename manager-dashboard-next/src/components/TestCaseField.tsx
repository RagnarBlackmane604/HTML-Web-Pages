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
      {/* Inputs grouped in two columns */}
      <div className="flex gap-6">
        {/* Left box: Type, Name, Value side-by-side */}
        <div className="flex-1 border rounded p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="type">Type</Label>
              <Input id="type" placeholder="Type (e.g. string)" />
            </div>
            <div className="flex-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name" />
            </div>
            <div className="flex-1">
              <Label htmlFor="value">Value</Label>
              <Input id="value" placeholder="Value" />
            </div>
          </div>
        </div>

        {/* Right box: Output and Weight in separate boxes */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="border rounded p-4">
            <Label htmlFor="output">Output</Label>
            <Input id="output" placeholder="Output" />
          </div>
          <div className="border rounded p-4">
            <Label htmlFor="weight">Weight</Label>
            <Input
              id="weight"
              type="number"
              step="0.01"
              min={0}
              max={1}
              placeholder="Weight (0 to 1)"
            />
          </div>
        </div>
      </div>

      {/* The existing text input and radio buttons for case */}
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

