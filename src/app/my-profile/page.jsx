"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RequireAuth from "@/components/auth/RequireAuth";

const MyProfilePage = () => {
  return (
    <RequireAuth>
      {(user) => (
        <div className="container-shell section-padding">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            My Profile
          </h1>
          <div className="max-w-lg bg-white rounded-xl shadow-sm border border-slate-100 p-8">
            {/* avatar */}
            <div className="flex items-center gap-4 mb-6">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={72}
                  height={72}
                  className="rounded-full"
                />
              ) : (
                <div className="w-18 h-18 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {user.name}
                </h2>
                <p className="text-slate-500">{user.email}</p>
              </div>
            </div>

            {/* account info */}
            <div className="border-t border-slate-100 pt-6 space-y-3">
              <h3 className="font-semibold text-slate-900 mb-3">
                Account Information
              </h3>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Name</span>
                <span className="text-slate-900">{user.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Email</span>
                <span className="text-slate-900">{user.email}</span>
              </div>
            </div>

            <Link
              href={"/my-profile/edit"}
              className="btn bg-emerald-600 text-white hover:bg-emerald-700 w-full mt-6"
            >
              Update Information
            </Link>
          </div>
        </div>
      )}
    </RequireAuth>
  );
};

export default MyProfilePage;
