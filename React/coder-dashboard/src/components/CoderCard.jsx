import React from "react";
import { Trophy } from "lucide-react";

export default function CoderCard({ coder, rank, darkMode }) {
  if (!coder) return null;

  return (
    <div
      className={`flex items-center p-3 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {coder.avatar_url && (
        <img
          src={coder.avatar_url}
          alt={`${coder.first_name} ${coder.last_name}`}
          className="w-12 h-12 rounded-full mr-3"
        />
      )}
      <div className="flex-1">
        <p className="font-medium">
          {coder.first_name} {coder.last_name}
        </p>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
          Score: {coder.score}
        </p>
      </div>
      <div title={`Rank #${rank + 1}`} className="text-yellow-500">
        <Trophy className="w-5 h-5" />
      </div>
    </div>
  );
}
