import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import { setFontSize, setLanguage } from "../redux/workspaceSlice";

const CodeEditor = ({ darkMode, challengeId }) => {
  const dispatch = useDispatch();
  const workspaceState = useSelector((state) => state.workspace) || {};
  const { language = "javascript", fontSize = 14 } = workspaceState;

  return (
    <div
      className={`p-4 flex flex-col gap-2 h-full ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex gap-4 mb-2">
        <DropDown
          label="Language"
          options={["python", "javascript"]}
          value={language}
          onChange={(val) => dispatch(setLanguage(val))}
        />
        <DropDown
          label="Font Size"
          options={[12, 14, 16, 18, 20]}
          value={fontSize}
          onChange={(val) => dispatch(setFontSize(parseInt(val, 10)))}
        />
      </div>

      <CodeMirror
        value=""
        height="100%"
        theme={githubDark}
        extensions={[language === "python" ? python() : javascript()]}
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
};

export default CodeEditor;
