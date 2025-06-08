import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const panelColor = {
  dark: {
    0: "#fadfc3",
    2: "#fcca95",
    4: "#fcbc77",
    10: "#ffaf59",
    20: "#fc9b32",
    30: "#fa5902",
  },
  light: {
    0: "#b89ffc",
    2: "#916afc",
    4: "#7e52f7",
    10: "#6f3cfa",
    20: "#5a1fff",
    30: "#2f03ad",
  },
};

function getClassForValue(value) {
  if (!value || value.count === 0) return "color-0";
  if (value.count >= 30) return "color-30";
  if (value.count >= 20) return "color-20";
  if (value.count >= 10) return "color-10";
  if (value.count >= 4) return "color-4";
  if (value.count >= 2) return "color-2";
  return "color-0";
}

export default function Statistics({ submissionsData, darkMode }) {
  const theme = darkMode ? panelColor.dark : panelColor.light;

  return (
    <div
      className={`mt-6 shadow-md p-4 rounded ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h3 className="font-semibold text-lg mb-3">Your Coding Streak</h3>
      <div className="overflow-x-auto">
        <CalendarHeatmap
          startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
          endDate={new Date()}
          values={submissionsData}
          classForValue={getClassForValue}
          showWeekdayLabels={true}
          gutterSize={3}
          rectSize={15}
        />
      </div>

      <style>{`
        .color-0 { fill: ${theme[0]} !important; }
        .color-2 { fill: ${theme[2]} !important; }
        .color-4 { fill: ${theme[4]} !important; }
        .color-10 { fill: ${theme[10]} !important; }
        .color-20 { fill: ${theme[20]} !important; }
        .color-30 { fill: ${theme[30]} !important; }
      `}</style>
    </div>
  );
}
