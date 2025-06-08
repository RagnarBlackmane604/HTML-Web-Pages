import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/logo.svg";
import avatarImg from "../assets/avatar.jpg";
import { Link } from "react-router-dom";

const dummyData = [
  {
    rank: 1,
    first_name: "John",
    last_name: "Doe",
    score: 400,
    solved_challenges: 150,
  },
  {
    rank: 2,
    first_name: "Alice",
    last_name: "Smith",
    score: 350,
    solved_challenges: 140,
  },
  {
    rank: 3,
    first_name: "Emma",
    last_name: "Johnson",
    score: 320,
    solved_challenges: 135,
  },
];

export default function Leaderboard() {
  const user = useSelector((state) => state.auth.user);
  const initials = user
    ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase()
    : "";

  const avatar = user?.avatar || avatarImg;  
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Apply dark mode to body
  useEffect(() => {
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("text-white", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`relative p-8 max-w-4xl mx-auto shadow-md rounded ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Top bar with logo, links and avatar/toggle */}
      <div className="flex justify-between items-center mb-6">
        {/* Left: Logo and nav links */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h5 className="font-semibold text-lg">CodeCLA</h5>
          <Link to="/challenges" className="text-sm hover:underline">
            Challenges
          </Link>
          <Link to="/leaderboard" className="text-sm hover:underline">
            Leaderboard
          </Link>
          {/* <Link to="/profile" className="text-sm hover:underline">
          Profile
          </Link> */}
        </div>

        {/* Right: Avatar and Toggle */}
        <div className="flex items-center gap-4">
          {user && (
            <Link
              to="/profile"
              className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md overflow-hidden"
            >
              <img
                src={avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </Link>
          )}
          {/* Toggle Switch */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
                darkMode ? "bg-purple-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-5" : ""
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-start">Leaderboard</h1>

      {/* Leaderboard Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className={darkMode ? "bg-gray-700" : "bg-gray-200"}>
            <th className="border border-gray-300 p-2">Rank</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Score</th>
            <th className="border border-gray-300 p-2">Solved Challenges</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(
            ({ rank, first_name, last_name, score, solved_challenges }) => (
              <tr key={rank} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{rank}</td>
                <td className="border border-gray-300 p-2">
                  {`${first_name} ${last_name}`}
                </td>
                <td className="border border-gray-300 p-2">{score}</td>
                <td className="border border-gray-300 p-2">
                  {solved_challenges}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
