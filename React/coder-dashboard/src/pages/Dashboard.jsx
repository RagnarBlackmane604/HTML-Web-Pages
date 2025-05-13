import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());         // Clear authentication state
    navigate("/signin");        // Redirect to sign-in page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-700">
        You are now authenticated. Explore your personal dashboard!
      </p>
    </main>
  </div>
  );
}
