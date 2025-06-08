import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/authSlice";
import avatarPlaceholder from "../assets/avatar.jpg"; 
import { FaEdit } from "react-icons/fa"; // edit icon

export default function ProfileForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Local state for form fields
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [about, setAbout] = useState(user?.bio || "");
  const [avatarPreview, setAvatarPreview] = useState(user?.avatarUrl || avatarPlaceholder);
  const [rank, setRank] = useState(user?.rank || "N/A");

  // Hidden file input ref to trigger click programmatically
  const fileInputRef = useRef(null);

  // Handle avatar image change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setAvatarPreview(previewURL);
    }
  };

  // Submit updated profile data
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        firstName,
        lastName,
        bio: about,
        // avatarUrl: avatarPreview, // handle avatar upload and set URL accordingly
      })
    );
    alert("Profile updated! (Avatar upload logic not implemented here)");
  };

  // Trigger file input click on edit icon click
  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow-md space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-600 dark:border-purple-400">
          <img
            src={avatarPreview}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleEditClick}
            aria-label="Change avatar"
            title="Change avatar"
            className="absolute bottom-1 right-1 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            <FaEdit />
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleAvatarChange}
          />
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {firstName} {lastName}
          </p>
          <p className="text-gray-600 dark:text-gray-400">Rank: {rank}</p>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100" htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100" htmlFor="email">
          Email (read-only)
        </label>
        <input
          id="email"
          type="email"
          value={user?.email || ""}
          readOnly
          className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 cursor-not-allowed text-gray-500"
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100" htmlFor="about">
          About Me
        </label>
        <textarea
          id="about"
          rows={4}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="Write something about yourself..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        Save Profile
      </button>
    </form>
  );
}
