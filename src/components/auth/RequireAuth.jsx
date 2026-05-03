"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const RequireAuth = ({ children }) => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Login Required
          </h2>
          <p className="text-slate-600 mb-6">
            You need to be logged in to view this page.
          </p>
          <Link
            href={"/login"}
            className="btn bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return children(user);
};

export default RequireAuth;
