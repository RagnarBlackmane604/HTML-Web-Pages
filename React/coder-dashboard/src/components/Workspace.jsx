import { useState } from "react";
import Split from "react-split";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChallengeDescription from "./ChallengeDescription";
import { CodeEditor, TestCases } from "./Playground"; // import individual components
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.svg";

const Workspace = () => {
  const [darkMode, setDarkMode] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const { challengeId } = useParams();

  return (
    <div
      className={`h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h5 className="font-semibold text-lg">CodeCLA</h5>
          <Link to="/workspace" className="text-sm hover:underline">
            Challenges
          </Link>
          <Link to="/leaderboard" className="text-sm hover:underline">
            Leaderboard
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <Link
              to="/profile"
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </Link>
          )}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                darkMode ? "bg-gray-600" : "bg-gray-300"
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

      {/* Split Panel */}
      <div className="flex-grow overflow-hidden">
        <Split
          className="flex h-full"
          sizes={[50, 50]}
          minSize={300}
          gutterSize={10}
          direction="horizontal"
          cursor="col-resize"
        >
          {/* Left: Challenge Description */}
          <div
            className={`p-4 overflow-auto ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <ChallengeDescription
              darkMode={darkMode}
              challengeId={challengeId}
            />
          </div>

          {/* Right: Code Editor + Test Cases split vertically */}
          <div
            className={`p-4 overflow-auto ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <Split
              className="flex flex-col h-full"
              sizes={[70, 30]}
              minSize={100}
              gutterSize={8}
              direction="vertical"
              cursor="row-resize"
            >
              <div className="overflow-auto">
                <CodeEditor darkMode={darkMode} challengeId={challengeId} />
              </div>
              <div className="overflow-auto">
                <TestCases darkMode={darkMode} challengeId={challengeId} />
              </div>
            </Split>
          </div>
        </Split>
      </div>
    </div>
  );
};

export default Workspace;
