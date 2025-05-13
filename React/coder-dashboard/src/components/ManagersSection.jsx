const managerBenefits = [
  "Craft tailored coding challenges suited to your needs and objectives.",
  "Design challenges that align perfectly with your recruitment criteria.",
  "Choose from a wide range of problem types including algorithmic, data structures, puzzles, and more.",
  "Ergonomic tools for challenge design.",
  "Collaborate with colleagues or peers in creating and refining challenges.",
  "Access dedicated support from our team of experts."
];

const ManagersSection = () => (
  <section id="managers" className="px-6 py-12 bg-gray-50">
    <h3 className="text-purple-600 text-lg">For managers</h3>
    <h1 className="text-2xl font-bold mb-4">
      What you will <span className="text-purple-600">access</span>
    </h1>
    <p className="mb-6 max-w-2xl">
      Are you a team leader or recruiter looking to assess candidates' skills efficiently? Here's how we help you design powerful coding challenges.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {managerBenefits.map((text, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow text-xs font-bold flex items-start gap-2"
        >
          <img src="src/assets/ok.svg" alt="ok" className="w-4" />
          <p>{text}</p>
        </div>
      ))}
    </div>

    <div className="mt-6 text-center">
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-600 transition">
        Join managers community
      </button>
    </div>
  </section>
);

export default ManagersSection;

  