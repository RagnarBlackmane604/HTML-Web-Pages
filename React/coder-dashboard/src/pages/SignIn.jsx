import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import loginImage from "../assets/coding.png";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.email.includes("@")) errs.email = "Invalid email";
    if (form.password.length < 6) errs.password = "Password too short";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(loginUser(form));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-200">
      <div className="hidden md:flex items-center justify-center bg-blue-950">
        <img src={loginImage} alt="Sign In Visual" className="max-w-md" />
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Join Coders now!</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              {status === "loading" ? "Signing In..." : "Sign In"}
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
