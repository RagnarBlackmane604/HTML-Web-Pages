"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function TestCaseField() {
  const [text, setText] = useState("");
  const [caseType, setCaseType] = useState("uppercase");

  const [value, setValue] = useState("42");
  const [output, setOutput] = useState("Result");
  const [weight, setWeight] = useState(0.5);

  const transformText = () => {
    if (caseType === "uppercase") return text.toUpperCase();
    if (caseType === "lowercase") return text.toLowerCase();
    return text;
  };

  const InputWithControls = ({
    id,
    value,
    onChange,
    onIncrement,
    onDecrement,
    type = "text",
    step,
    min,
    max,
    placeholder,
  }: {
    id: string;
    value: any;
    onChange: (e: any) => void;
    onIncrement: () => void;
    onDecrement: () => void;
    type?: string;
    step?: number;
    min?: number;
    max?: number;
    placeholder?: string;
  }) => (
    <div className="relative">
      <Input
        id={id}
        type={type}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pr-10"
      />
      <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col rounded overflow-hidden border bg-gray-200 shadow-sm z-10">
        <Button
          type="button"
          className="h-5 w-5 p-0 bg-gray-200 hover:bg-gray-300 border-b border-gray-300"
          onClick={onIncrement}
        >
          <ChevronUp className="w-3 h-3 text-gray-700" />
        </Button>
        <Button
          type="button"
          className="h-5 w-5 p-0 bg-gray-200 hover:bg-gray-300"
          onClick={onDecrement}
        >
          <ChevronDown className="w-3 h-3 text-gray-700" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Grid: left = type, name, value | right = output, weight */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left box */}
        <div className="border rounded p-4 space-y-4 bg-gray-50">
          <div>
            <Label htmlFor="type">Type</Label>
            <Input id="type" placeholder="Type (e.g. string)" />
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name" />
          </div>
          <div>
            <Label htmlFor="value">Value</Label>
            <InputWithControls
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onIncrement={() =>
                setValue((prev) => String(Number(prev || "0") + 1))
              }
              onDecrement={() =>
                setValue((prev) => String(Number(prev || "0") - 1))
              }
              placeholder="Value"
            />
          </div>
        </div>

        {/* Right box */}
        <div className="border rounded p-4 space-y-4 bg-gray-50">
          <div>
            <Label htmlFor="output">Output</Label>
            <InputWithControls
              id="output"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              onIncrement={() => setOutput((prev) => prev + "!")}
              onDecrement={() => setOutput((prev) => prev.slice(0, -1))}
              placeholder="Output"
            />
          </div>
          <div>
            <Label htmlFor="weight">Weight</Label>
            <InputWithControls
              id="weight"
              type="number"
              step={0.01}
              min={0}
              max={1}
              value={weight}
              onChange={(e) =>
                setWeight(parseFloat(e.target.value || "0"))
              }
              onIncrement={() =>
                setWeight((prev) => Math.min(prev + 0.1, 1))
              }
              onDecrement={() =>
                setWeight((prev) => Math.max(prev - 0.1, 0))
              }
              placeholder="Weight (0 to 1)"
            />
          </div>
        </div>
      </div>

      {/* Text + Case Selection */}
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

