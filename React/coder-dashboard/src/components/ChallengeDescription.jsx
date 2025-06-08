import MarkdownPreview from '@uiw/react-markdown-preview';
import { useChallenge } from '../contexts/ChallengeContext';
import { CheckCircle } from 'lucide-react'; // Install `lucide-react` if not already

const ChallengeDescription = ({ darkMode }) => {
  const { currentChallenge: challenge } = useChallenge();

  if (!challenge) return <div>Loading...</div>;

  const isCompleted = challenge.status?.toLowerCase() === 'completed';

  return (
    <div
      className={`relative prose max-w-full p-4 rounded shadow overflow-auto h-full transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Top-right metadata block */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {challenge.difficulty}
        </span>
        {isCompleted && (
          <span className="flex items-center gap-1 text-green-500 text-sm font-medium">
            <CheckCircle size={16} />
            
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>

      {/* Markdown content */}
      <MarkdownPreview
        source={challenge.description}
        className="rounded"
        style={{
          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
          color: darkMode ? '#e5e7eb' : '#000000',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
      />
    </div>
  );
};

export default ChallengeDescription;
