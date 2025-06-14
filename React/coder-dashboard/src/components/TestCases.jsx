import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTestCase } from "../redux/workspaceSlice";

const testCasesMock = [
  { input: "2 3", expected: "5" },
  { input: "10 20", expected: "30" },
];

const TestCases = ({ darkMode }) => {
  const dispatch = useDispatch();
  const selectedTestCase = useSelector((state) => state.workspace.selectedTestCase);
  const selected = testCasesMock[selectedTestCase] || testCasesMock[0];

  return (
    <div
      className={`p-4 h-full border-t ${
        darkMode
          ? "bg-gray-800 text-gray-100 border-gray-700"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <div className="flex gap-4 mb-2">
        {testCasesMock.map((_, i) => (
          <button
            key={i}
            onClick={() => dispatch(setSelectedTestCase(i))}
            className={`px-3 py-1 rounded ${
              selectedTestCase === i
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Case {i + 1}
          </button>
        ))}
      </div>

      <div className="text-sm space-y-1">
        <p>
          <strong>Input:</strong> {selected.input}
        </p>
        <p>
          <strong>Expected Output:</strong> {selected.expected}
        </p>
      </div>

      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Submit
      </button>
    </div>
  );
};

export default TestCases;
