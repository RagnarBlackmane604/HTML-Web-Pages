import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import avatarImg from "../assets/avatar.jpg";
import TopBar from "../components/TopBar";

const dummyData = [
  { rank: 1, first_name: "John", last_name: "Doe", score: 400, solved_challenges: 150 },
  { rank: 2, first_name: "Alice", last_name: "Smith", score: 350, solved_challenges: 140 },
  { rank: 3, first_name: "Emma", last_name: "Johnson", score: 320, solved_challenges: 135 },
];

export default function Leaderboard() {
  const user = useSelector((state) => state.auth.user);
  const [darkMode, setDarkMode] = useState(false);

  const avatar = user?.avatar || avatarImg;

  useEffect(() => {
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("text-white", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      
      {/* ⬆ Top Bar */}
     <TopBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* ⬇ Leaderboard Card */}
      <div className={`p-8 max-w-4xl mx-auto mt-8 shadow-md rounded ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
        <h1 className="text-3xl font-bold mb-6 text-start">Leaderboard</h1>

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
            {dummyData.map(({ rank, first_name, last_name, score, solved_challenges }) => (
              <tr key={rank} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{rank}</td>
                <td className="border border-gray-300 p-2">{`${first_name} ${last_name}`}</td>
                <td className="border border-gray-300 p-2">{score}</td>
                <td className="border border-gray-300 p-2">{solved_challenges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
