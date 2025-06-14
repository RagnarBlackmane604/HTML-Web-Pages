import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom";

const challenges = [
  {
    id: 145,
    title: "Two-sum",
    category: "Data structure",
    difficulty: "Easy",
    status: "Completed",
    solutionRate: "45%",
  },
  {
    id: 146,
    title: "Fibonacci series",
    category: "Data structure",
    difficulty: "Moderate",
    status: "Attempted",
    solutionRate: "45%",
  },
  {
    id: 147,
    title: "Skyline problem",
    category: "Data structure",
    difficulty: "Moderate",
    status: "Pending",
    solutionRate: "45%",
  },
  {
    id: 148,
    title: "NP-hard scheduling",
    category: "Algorithms",
    difficulty: "Hard",
    status: "Pending",
    solutionRate: "20%",
  },
];

function getStatusIcon(status, id) {
  const tooltipId = `status-tooltip-${id}`;
  const commonProps = {
    "data-tooltip-id": tooltipId,
    "data-tooltip-place": "top",
    className: "text-xl cursor-default",
  };

  switch (status) {
    case "Completed":
      return (
        <>
          <BsCheck2Circle
            {...commonProps}
            className="text-green-500"
            data-tooltip-content="Challenge completed"
          />
          <Tooltip id={tooltipId} />
        </>
      );
    case "Attempted":
      return (
        <>
          <LuFileSpreadsheet
            {...commonProps}
            className="text-yellow-500"
            data-tooltip-content="Challenge attempted"
          />
          <Tooltip id={tooltipId} />
        </>
      );
    case "Pending":
      return (
        <>
          <FaRegHourglass
            {...commonProps}
            className="text-gray-500"
            data-tooltip-content="Challenge not started yet"
          />
          <Tooltip id={tooltipId} />
        </>
      );
    default:
      return null;
  }
}

function getDifficultyBadge(difficulty) {
  const base = "px-3 py-1 rounded-full text-sm font-medium inline-block";
  switch (difficulty) {
    case "Easy":
      return <span className={`${base} bg-green-500 text-black`}>Easy</span>;
    case "Moderate":
      return <span className={`${base} bg-yellow-500 text-black`}>Moderate</span>;
    case "Hard":
      return <span className={`${base} bg-red-500 text-black`}>Hard</span>;
    default:
      return <span className={base}>{difficulty}</span>;
  }
}

export default function ChallengesList({ selectedCategory, darkMode }) {
  const filteredChallenges =
    selectedCategory === "All"
      ? challenges
      : challenges.filter((ch) => ch.category === selectedCategory);

  return (
    <section>
      <div
        className={`overflow-x-auto rounded-lg shadow-md border ${
          darkMode
            ? "border-gray-700 bg-gray-800"
            : "border-gray-200 bg-white"
        }`}
      >
        <table className="min-w-full table-auto text-center">
          <thead className={darkMode ? "bg-gray-700" : "bg-gray-200"}>
            <tr>
              {["Status", "Title", "Category", "Difficulty", "Solution Rate"].map((header) => (
                <th
                  key={header}
                  className={darkMode ? "px-4 py-3 text-gray-300" : "px-4 py-3 text-gray-700"}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredChallenges.length > 0 ? (
              filteredChallenges.map((ch) => (
                <tr
                  key={ch.id}
                  className={darkMode ? "text-gray-300" : "text-black"}
                >
                  <td className="px-4 py-3 align-middle">{getStatusIcon(ch.status, ch.id)}</td>
                  <td className="px-4 py-3 align-middle">
                    <Link
                      to={`/workspace/${ch.id}`}
                      className={darkMode ? "text-blue-400 hover:underline" : "text-blue-600 hover:underline"}
                    >
                      {ch.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 align-middle">{ch.category}</td>
                  <td className="px-4 py-3 align-middle">{getDifficultyBadge(ch.difficulty)}</td>
                  <td className="px-4 py-3 align-middle">{ch.solutionRate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className={darkMode ? "py-4 text-gray-400" : "py-4 text-gray-500"}>
                  Keine Challenges in dieser Kategorie gefunden.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
