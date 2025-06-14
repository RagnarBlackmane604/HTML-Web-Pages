import React from "react";

const categories = ["All", "Data structure", "Graphs", "Algorithms"];

export default function CategoriesList({ selected, onSelect, darkMode }) {
  return (
    <div className="mb-4 flex gap-3 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded transition-colors
            ${
              selected === cat
                ? "bg-blue-600 text-white"
                : darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}


