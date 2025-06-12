export default function CategoriesList({ selected, onSelect }) {
  const categories = ["All", "Data structure", "Graphs", "Algorithms"];

  return (
    <div className="mb-4 flex gap-3 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded transition-colors
            ${selected === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
            }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
