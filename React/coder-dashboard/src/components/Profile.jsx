import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/authSlice";
import avatarImg from "../assets/avatar.jpg";
import StatsPanel from "./StatsPanel";
import Statistics from "./Statistics";
import TopBar from "../components/TopBar";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const [darkMode, setDarkMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [avatar, setAvatar] = useState(user?.avatar || avatarImg);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [bio, setBio] = useState(user?.bio || "");

  // Show success message only if form was submitted
  useEffect(() => {
    if (submitted && status === "succeeded") {
      setSuccessMessage("Profile updated successfully!");
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      setSubmitted(false);
      return () => clearTimeout(timer);
    }
  }, [status, submitted]);

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
    setSubmitted(true);
  };

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
    { date: "2024-05-20", count: 5 },
    { date: "2024-05-21", count: 12 },
    { date: "2024-06-01", count: 20 },
    { date: "2024-12-10", count: 3 },
    { date: "2025-01-15", count: 10 },
    { date: "2025-03-05", count: 6 },
    { date: "2025-04-18", count: 2 },
    { date: "2025-05-15", count: 15 },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <TopBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <div
        className={`flex-grow flex flex-col lg:flex-row gap-8 p-6 transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="flex-1 max-w-lg">
          <div className="mb-2 text-purple-600 font-bold text-xl flex justify-end">
            #12
          </div>
          <h2 className="text-2xl font-bold mb-6">Your Profile</h2>

          {successMessage && (
            <div className="mb-4 p-3 bg-green-200 text-green-800 rounded">
              {successMessage}
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-200 text-red-800 rounded">
              {error}
            </div>
          )}

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
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full border rounded px-3 py-2"
                rows={4}
                disabled={status === "loading"}
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
              className={`bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700 ${
                status === "loading" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <Statistics stats={exampleStats} />
          <StatsPanel submissionsData={submissionsData} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
