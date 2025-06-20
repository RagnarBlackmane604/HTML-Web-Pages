"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/redux/authSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function SignIn() {
  const dispatch = useAppDispatch(); 
  const router = useRouter();
  const { user, loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-100">
      {/* Left side image */}
      <div className="hidden md:flex items-center justify-center bg-blue-950">
        <Image
          src="/coding.png"
          alt="Sign In"
          className="max-w-md"
          width={400}
          height={400}
        />
      </div>

      {/* Right side form */}
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md p-6">
          <CardContent>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Join Managers now!
            </h2>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                  aria-invalid={!!errors.password}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <p className="text-sm text-center mt-4">
                New to CodeCLA?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Signup
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
