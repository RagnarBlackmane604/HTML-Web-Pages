import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  if (user) return null; // Hide navbar when user is logged in

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-200 gap-4 md:gap-0">
      <div className="flex items-center gap-2">
        <img src="src/assets/logo.svg" alt="CodeCLA-Logo" width="40" />
        <h5 className="font-semibold text-lg">CodeCLA</h5>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Link to="/" className="text-black">Home</Link>
        <HashLink smooth to="/#coders" className="text-black">For coders</HashLink>
        <HashLink smooth to="/#managers" className="text-black">For developers</HashLink>

        <Link to="/signin" className="text-black">Sign In</Link>
        <Link to="/signup" className="bg-purple-600 text-white text-sm px-3 py-2 rounded hover:bg-white hover:text-purple-600">Join Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
