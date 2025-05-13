const stats = [
    { label: "Problems for practice", value: "1K" },
    { label: "Coders", value: "100+" },
    { label: "Programming languages", value: "10" },
    { label: "Submissions", value: "130K" }
  ];
  
  const PracticeStats = () => (
    <section className="text-center px-6 py-12">
      <h2 className="text-purple-600 text-2xl font-semibold mb-8">Practice to level-up</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow text-xs font-bold">
            <p>{s.value}</p>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default PracticeStats;
  