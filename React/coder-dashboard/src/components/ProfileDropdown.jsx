import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const ProfileDropdown = ({ avatarUrl, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    dispatch(logout());
    navigate("/login");
  };

  const dropdownBgClass = darkMode
    ? "bg-gray-800 border-gray-700 text-gray-200"
    : "bg-gray-200 border-gray-300 text-black";

  const hoverBgClass = darkMode
    ? "dark:hover:bg-gray-700 hover:bg-gray-700"
    : "hover:bg-gray-300";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full overflow-hidden focus:outline-none"
        aria-label="User menu"
      >
        <img
          src={avatarUrl}
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 border rounded shadow-lg z-10 ${dropdownBgClass}`}
        >
          <Link
            to="/profile"
            className={`block px-4 py-2 ${hoverBgClass}`}
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className={`block px-4 py-2 ${hoverBgClass}`}
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <button
            className={`w-full text-left px-4 py-2 ${hoverBgClass}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
