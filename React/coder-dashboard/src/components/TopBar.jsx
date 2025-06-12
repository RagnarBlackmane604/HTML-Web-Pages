import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.jpg";
import { useSelector } from "react-redux";

const TopBar = ({ darkMode, toggleDarkMode }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div
  className={`flex justify-between items-center px-8 py-4 shadow-md transition-colors ${
    darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
  }`}
>
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h5 className="font-semibold text-lg">CodeCLA</h5>
        <Link to="/challenges" className="text-sm hover:underline">
          Challenges
        </Link>
        <Link to="/leaderboard" className="text-sm hover:underline">
          Leaderboard
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user && <ProfileDropdown avatarUrl={avatar} />}
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="sr-only"
          />
          <div
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
              darkMode ? "bg-gray-800" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-5" : ""
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default TopBar;
