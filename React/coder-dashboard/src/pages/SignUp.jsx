import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice"; // AsyncThunk importieren
import { useState } from "react";
import signupImage from "../assets/coding.png";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setApiError(""); // Fehler zurücksetzen
    try {
      // AsyncThunk dispatchen und auf Ergebnis warten
      const resultAction = await dispatch(registerUser(data));
      if (registerUser.fulfilled.match(resultAction)) {
        // Erfolg: resultAction.payload enthält user-Daten 
      } else {
        // Fehler aus rejected case holen
        setApiError(resultAction.payload || "Registration failed");
      }
    } catch (err) {
      setApiError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-200">
      {/* Left Image */}
      <div className="hidden md:flex items-center justify-center bg-blue-950">
        <img src={signupImage} alt="Sign Up Visual" className="max-w-md" />
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Join Coders now!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {apiError && <p className="text-red-500">{apiError}</p>}

            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}

            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full text-white bg-blue-950 p-2 border rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Sign Up
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
