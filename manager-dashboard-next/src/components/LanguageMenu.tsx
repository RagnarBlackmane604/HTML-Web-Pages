"use client";

import { useState } from "react";

const languages = ["English", "Spanish", "French", "German"];

export default function LanguageMenu() {
  const [language, setLanguage] = useState("English");

  return (
    <div>
      <label htmlFor="language-select" className="mr-2">Language:</label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border rounded p-1"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <p>Selected language: {language}</p>
    </div>
  );
}
