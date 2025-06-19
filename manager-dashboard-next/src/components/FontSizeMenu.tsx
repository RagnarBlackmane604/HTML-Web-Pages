"use client";

import { useState } from "react";

const fontSizes = ["Small", "Medium", "Large"];

export default function FontSizeMenu() {
  const [size, setSize] = useState("Medium");

  return (
    <div>
      <label htmlFor="font-size-select" className="mr-2">Font Size:</label>
      <select
        id="font-size-select"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="border rounded p-1"
      >
        {fontSizes.map((fs) => (
          <option key={fs} value={fs}>{fs}</option>
        ))}
      </select>
      <p>Selected font size: {size}</p>
    </div>
  );
}
