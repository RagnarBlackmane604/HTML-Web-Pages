import teamImage from "../assets/team.svg"; // passe den Pfad an
import logo from "../assets/logo.svg"; // passe ggf. auch das an

const TeamSection = () => (
  <section>
    <div className="team flex flex-col md:flex-row items-start md:-ml-24 gap-2 px-6 py-12 relative overflow-hidden">
      <div className="image-container mb-8 relative">
        <img src={teamImage} alt="Team" className="w-full max-w-md h-auto mx-auto md:mx-0 rounded" />
      </div>
      <div className="text-content md:ml-12 text-center md:text-left max-w-lg flex flex-col">
        <img src={logo} alt="Brand logo" className="mx-auto md:mx-0 mb-4 w-10" />
        <h2 className="text-xl font-semibold mb-4">Brought to you by CLA</h2>
        <p className="mb-4">Join the Ultimate Hub for Competitive Programmers and reach growth and excellence in competitive programming.</p>
        <p>Coding challenges are made simple by our platform. Access a dashboard of tools for high-quality challenge design.</p>
      </div>
    </div>
  </section>
);

export default TeamSection;
