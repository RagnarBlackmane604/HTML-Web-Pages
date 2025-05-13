import { useState } from "react";
import { login } from "../api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import loginImage from "../assets/coding.png";

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!email.includes("@")) errs.email = "Invalid email";
    if (password.length < 6) errs.password = "Too short";
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        const data = await login(email, password);
        dispatch(setUser(data.user));
      } catch (err) {
        setApiError(err.message);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-200">
      {/* Left Image Section */}
      <div className="hidden md:flex items-center justify-center bg-blue-950">
        <img src={loginImage} alt="Sign In Visual" className="max-w-md" />
      </div>

      {/* Sign In Form Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Join Coders now!</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {apiError && <p className="text-red-500">{apiError}</p>}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Sign In
            </button>

            <p className="text-sm text-center mt-4">
              New to CodeCLA?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Signup
              </a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

