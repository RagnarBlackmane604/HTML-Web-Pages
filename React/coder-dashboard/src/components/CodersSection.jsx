const coderBenefits = [
  "Access a rich library of practice problems, algorithms, and data structures to enhance your skills.",
  "Compete in regularly scheduled contests against talent from around the globe.",
  "Receive personalized feedback to improve your problem-solving abilities.",
  "Connect with like-minded individuals, form teams, and tackle challenges together.",
  "Track your progress and climb the ranks on our leaderboard.",
  "Detailed solutions for problems."
];

const CodersSection = () => (
  <section id="coders" className="px-6 py-12 bg-gray-50">
    <h3 className="text-purple-600 text-lg">For coders</h3>
    <h1 className="text-2xl font-bold mb-4">
      What you will <span className="text-purple-600">gain</span>
    </h1>
    <p className="mb-6 max-w-2xl">
      You are a coder who wants to level-up their skills in coding and problem solving? Here is what we provide.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {coderBenefits.map((text, index) => (
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
        Join coders community
      </button>
    </div>
  </section>
);

export default CodersSection;

  