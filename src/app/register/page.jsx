"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Registration failed");
      setLoading(false);
      return;
    }

    if (data) {
      toast.success("Registration successful! Please login.");
      router.push("/login");
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
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Register for BiblioLoom
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* name */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Your full name"
                className="input input-bordered w-full pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* password */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* register button */}
          <button
            type="submit"
            className="btn bg-emerald-600 text-white hover:bg-emerald-700 w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* divider */}
        <div className="divider text-sm text-slate-400 my-6">OR</div>

        {/* google login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <FaGoogle className="text-lg" />
          Continue with Google
        </button>

        {/* login link */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
