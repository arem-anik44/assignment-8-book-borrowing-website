"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Login failed");
      setLoading(false);
      return;
    }

    if (data) {
      toast.success("Login successful!");
      router.push("/");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google login failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Login to BiblioLoom
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* email */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Email
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FiMail className="text-slate-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          {/* password */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Password
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FiLock className="text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="grow"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </label>
          </div>

          {/* login button */}
          <button
            type="submit"
            className="btn bg-emerald-600 text-white hover:bg-emerald-700 w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* divider */}
        <div className="divider text-sm text-slate-400 my-6">OR</div>

        {/* social login */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>
          <button
            onClick={async () => {
              const { error } = await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
              });
              if (error) toast.error(error.message || "GitHub login failed");
            }}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            Continue with GitHub
          </button>
        </div>

        {/* register link */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href={"/register"}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
