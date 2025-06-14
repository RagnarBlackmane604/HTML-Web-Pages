import { useState, useEffect } from "react";
import Split from "react-split";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChallengeDescription from "./ChallengeDescription";
import { CodeEditor, TestCases } from "./Playground";
import TopBar from "./TopBar";
import { useChallenge } from "../contexts/ChallengeContext";

const Workspace = () => {
  const [darkMode, setDarkMode] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const { challengeId } = useParams();

  const { selectChallengeById, currentChallenge } = useChallenge();

  useEffect(() => {
    if (challengeId) {
      selectChallengeById(challengeId);
    }
  }, [challengeId, selectChallengeById]);

  if (!currentChallenge) {
    return (
      <div className={`h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <p>Lade Challenge...</p>
      </div>
    );
  }

  // Helper for styling panels
  const panelClass = (darkMode, shades) =>
    `p-4 overflow-auto transition-colors duration-300 ${
      darkMode ? `bg-${shades.dark}` : `bg-${shades.light}`
    }`;

  return (
    <div
      className={`h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
      }`}
    >
      {/* Top Navigation */}
      <TopBar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      {/* Split Panels */}
      <div className="flex-grow overflow-hidden">
        <Split
          className="flex h-full"
          sizes={[50, 50]}
          minSize={300}
          gutterSize={10}
          direction="horizontal"
          cursor="col-resize"
        >
          {/* Left Panel */}
          <div
            className={panelClass(darkMode, {
              dark: "gray-800",
              light: "gray-100",
            })}
          >
            <ChallengeDescription darkMode={darkMode} />

          </div>

          {/* Right Panel */}
          <div
            className={panelClass(darkMode, {
              dark: "gray-700",
              light: "gray-100",
            })}
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
