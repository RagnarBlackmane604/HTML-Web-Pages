import MarkdownPreview from "@uiw/react-markdown-preview";
import { useChallenge } from "../contexts/ChallengeContext";
import { CheckCircle } from "lucide-react";

const ChallengeDescription = ({ darkMode }) => {
  const { currentChallenge: challenge } = useChallenge();

  if (!challenge) return <div>Loading...</div>;

  const isCompleted = challenge.status?.toLowerCase() === "completed";

  return (
    <div className="relative h-full prose max-w-full transition-colors duration-300">
      {/* Metadata */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {challenge.difficulty}
        </span>
        {isCompleted && (
          <span className="flex items-center gap-1 text-green-500 text-sm font-medium">
            <CheckCircle size={16} />
            Completed
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>

      {/* Markdown Description */}
      <div className="rounded overflow-auto">
        <MarkdownPreview
          source={challenge.description}
          wrapperElement={{ "data-color-mode": darkMode ? "dark" : "light" }}
          className={`markdown-preview rounded-md p-4 ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
          }`}
        />
      </div>
    </div>
  );
};

export default ChallengeDescription;
