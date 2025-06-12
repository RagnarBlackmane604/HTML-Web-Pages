import React from "react";
import { FaMedal } from "react-icons/fa";
import CoderCard from "./CoderCard";

const coders = [
  {
    id: 101,
    first_name: "Alice",
    last_name: "Johnson",
    avatar_url: "https://i.pravatar.cc/150?img=1",
    score: 350,
  },
  {
    id: 102,
    first_name: "Bob",
    last_name: "Smith",
    avatar_url: "https://i.pravatar.cc/150?img=2",
    score: 320,
  },
  {
    id: 103,
    first_name: "Emily",
    last_name: "Davis",
    avatar_url: "https://i.pravatar.cc/150?img=5",
    score: 290,
  },
  {
    id: 104,
    first_name: "Michael",
    last_name: "Brown",
    avatar_url: "https://i.pravatar.cc/150?img=4",
    score: 270,
  },
];

export default function TopKCodersList({ darkMode }) {
  return (
    <div
      className={`shadow rounded-xl p-6 space-y-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-2">Top Coders</h2>
      {coders.map((coder, index) => (
        <CoderCard key={coder.id} coder={coder} index={index} darkMode={darkMode} />
      ))}
    </div>
  );
}
