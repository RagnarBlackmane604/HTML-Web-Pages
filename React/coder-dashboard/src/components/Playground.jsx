import Split from "react-split";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";

const Playground = ({ darkMode, challengeId }) => {
  return (
    <Split
      className="flex flex-col h-full"
      sizes={[60, 40]}
      direction="vertical"
      gutterSize={10}
    >
      <div className="overflow-auto">
        <CodeEditor darkMode={darkMode} challengeId={challengeId} />
      </div>
      <div className="overflow-auto">
        <TestCases darkMode={darkMode} challengeId={challengeId} />
      </div>
    </Split>
  );
};

// ✅ Export both the Playground component and the inner ones
export default Playground;
export { CodeEditor, TestCases };


