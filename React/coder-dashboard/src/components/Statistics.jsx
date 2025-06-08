import React from "react";

export default function Statistics({ stats }) {
  const {
    easySolved = 0,
    moderateSolved = 0,
    hardSolved = 0,
  } = stats;

  // Fixed totals
  const easyTotal = 50;
  const moderateTotal = 40;
  const hardTotal = 20;

  const getPercentage = (solved, total) =>
    Math.round((solved / total) * 100);

  const renderBar = (label, solved, total, color) => {
    const percentage = getPercentage(solved, total);

    return (
      <div className="mb-5">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} flex items-center justify-center text-xs font-bold text-white transition-all duration-500 rounded-full`}
            style={{ width: `${percentage}%` }}
          >
            {percentage}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-4">Completed Challenges</h3>
      {renderBar("Easy", easySolved, easyTotal, "bg-green-500")}
      {renderBar("Medium", moderateSolved, moderateTotal, "bg-yellow-500")}
      {renderBar("Hard", hardSolved, hardTotal, "bg-red-500")}
    </div>
  );
}
