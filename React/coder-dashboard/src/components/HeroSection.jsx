const HeroSection = () => (
    <main className="flex flex-col items-center text-center px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">The Place for Competitive Programmers</h1>
      <p className="text-lg mb-6">
        CodeCLA is where programmers participate in programming contests,
        solve algorithm and data structure challenges and become part of an
        awesome community.
      </p>
      <div className="flex gap-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-600">Become a coder</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-600">Become a manager</button>
      </div>
    </main>
  );
  
  export default HeroSection;