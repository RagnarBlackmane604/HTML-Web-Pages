import React from "react";

const trendingData = [
  { category: "Graphs", count: 100 },
  { category: "Stacks", count: 45 },
  { category: "Algorithms", count: 20 },
  { category: "Databases", count: 3 },
];

export default function TrendingCategoriesBox({ darkMode }) {
  return (
    <div
      className={`shadow rounded-xl p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Trending Categories</h2>

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
        }}
      >
        {trendingData.map(({ category, count }) => (
          <button
            key={category}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-colors duration-200 ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <span className="font-medium">{category}</span>
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

