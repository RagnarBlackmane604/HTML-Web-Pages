import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/authSlice";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import avatarImg from "../assets/avatar.jpg";
import StatsPanel from "./StatsPanel";
import Statistics from "./Statistics";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Example stats data
  const easySolved = 30;
  const easyTotal = 50;
  const moderateSolved = 20;
  const moderateTotal = 40;
  const hardSolved = 5;
  const hardTotal = 10;

  const exampleStats = {
    easySolved,
    easyTotal,
    moderateSolved,
    moderateTotal,
    hardSolved,
    hardTotal,
  };

  const submissionsData = [
    { date: new Date("2024-05-20").toISOString().slice(0, 10), count: 5 },
    { date: new Date("2024-05-21").toISOString().slice(0, 10), count: 12 },
    { date: new Date("2024-06-01").toISOString().slice(0, 10), count: 20 },
    { date: new Date("2024-12-10").toISOString().slice(0, 10), count: 3 },
    { date: new Date("2025-01-15").toISOString().slice(0, 10), count: 10 },
    { date: new Date("2025-03-05").toISOString().slice(0, 10), count: 6 },
    { date: new Date("2025-04-18").toISOString().slice(0, 10), count: 2 },
    { date: new Date("2025-05-15").toISOString().slice(0, 10), count: 15 },
  ];

  // Editable fields state
  const [avatar, setAvatar] = useState(user?.avatar || avatarImg);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [bio, setBio] = useState(user?.bio || "");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ avatar, firstName, lastName, bio }));
  };

  return (
    <div
      className={`relative p-8 max-w-6xl mx-auto shadow-md rounded transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Top bar with logo, links and avatar/toggle */}
      <div className="flex justify-between items-center mb-6">
        {/* Left: Logo and nav links */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h5 className="font-semibold text-lg">CodeCLA</h5>
          <Link to="/workspace" className="text-sm hover:underline">
            Challenges
          </Link>
          <Link to="/leaderboard" className="text-sm hover:underline">
            Leaderboard
          </Link>
          {/*  <Link to="/workspace" className="text-sm hover:underline">
            Workspace
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

      {/* Main content: form and stats side-by-side */}
      <div
        className={`flex flex-col lg:flex-row gap-8 p-6 rounded-lg transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        {/* Left: Profile form */}
        <div className="flex-1 max-w-lg">
          <div className="mb-2 text-purple-600 font-bold text-xl flex justify-end">
            #12
          </div>
          <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative w-24 h-24 mb-4">
              <img
                src={avatar}
                alt="Avatar preview"
                className="w-24 h-24 rounded-full object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer shadow hover:bg-purple-700"
                title="Change photo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2L10 17H7v-3l8-8z"
                  />
                </svg>
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full border rounded px-3 py-2"
                rows={4}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className={`w-full border rounded px-3 py-2 cursor-not-allowed ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                value="********"
                readOnly
                className={`w-full border rounded px-3 py-2 cursor-not-allowed ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
                }`}
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Right: Stats Panel */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <Statistics stats={exampleStats} />
          <StatsPanel submissionsData={submissionsData} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
