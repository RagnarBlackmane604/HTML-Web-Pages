function Category({ name, isSelected, onClick, darkMode }) {
  return (
    <li
      className={`px-3 py-1 rounded cursor-pointer transition ${
        isSelected
          ? "bg-blue-500 text-white"
          : darkMode
          ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
          : "bg-gray-200 hover:bg-gray-300 text-black"
      }`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

function CategoriesList({ selectedCategory, setSelectedCategory, darkMode }) {
  return (
    <section>
      <h2 className={`text-2xl font-semibold mb-3 ${darkMode ? "text-white" : "text-black"}`}>
        Categories
      </h2>
      <p className={darkMode ? "text-gray-300" : "text-black"}>Select category</p>
      <ul className="mt-4 flex gap-4 flex-wrap mb-6">
        {categories.map((cat) => (
          <Category
            key={cat}
            name={cat}
            isSelected={cat === selectedCategory}
            onClick={() => setSelectedCategory(cat)}
            darkMode={darkMode} // pass darkMode down here
          />
        ))}
      </ul>
    </section>
  );
}
