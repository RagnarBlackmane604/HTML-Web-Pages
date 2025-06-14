import React, { useState } from "react";
import TopBar from "../components/TopBar";
import ChallengesList from "../components/ChallengesList";
import CategoriesList from "../components/CategoriesList";
import TopKCodersList from "../components/TopKCodersList";
import TrendingCategoriesBox from "../components/TrendingCategoriesBox";

const challenges = [
  { id: 1, title: "Two-sum", category: "Data structure", difficulty: "Easy", status: "Completed", solutionRate: "45%" },
  { id: 2, title: "Fibonacci series", category: "Data structure", difficulty: "Moderate", status: "Attempted", solutionRate: "45%" },
  { id: 3, title: "Skyline problem", category: "Data structure", difficulty: "Moderate", status: "Pending", solutionRate: "45%" },
  { id: 4, title: "NP-hard scheduling", category: "Algorithms", difficulty: "Hard", status: "Pending", solutionRate: "20%" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
      <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Challenges</h1>
        <p className={darkMode ? "text-gray-300" : "text-gray-700"}>Select category</p>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <CategoriesList selected={selectedCategory} onSelect={setSelectedCategory} />
            <ChallengesList challenges={challenges} selectedCategory={selectedCategory} darkMode={darkMode} />
          </div>

          <div className="w-full lg:w-1/3 space-y-6">
            <TrendingCategoriesBox darkMode={darkMode} />
            <TopKCodersList darkMode={darkMode} />
          </div>
        </div>
      </main>
    </div>
  );
}
