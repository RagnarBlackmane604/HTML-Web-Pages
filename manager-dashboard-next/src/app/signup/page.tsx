'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/authSlice";
import type { AppDispatch } from "@/redux/store";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();  // <--- Typed dispatch here
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setApiError("");
    setIsLoading(true);
    try {
      const resultAction = await dispatch(registerUser(data));
      if (registerUser.fulfilled.match(resultAction)) {
        router.push("/signin");
      } else {
        const message = typeof resultAction.payload === "string"
          ? resultAction.payload
          : "Registration failed";
        setApiError(message);
      }
    } catch (err: any) {
      setApiError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-200">
      <div className="hidden md:flex items-center justify-center bg-blue-950">
        <Image
          src="/coding.png"
          alt="Sign Up Visual"
          className="max-w-md"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Join Managers now!</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {apiError && <p className="text-red-500">{apiError}</p>}

            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full bg-blue-950 p-2 border rounded placeholder:text-gray-400 text-white"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}

            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full bg-blue-950 p-2 border rounded placeholder:text-gray-400 text-white"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full bg-blue-950 p-2 border rounded placeholder:text-gray-400 text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full bg-blue-950 p-2 border rounded placeholder:text-gray-400 text-white"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
