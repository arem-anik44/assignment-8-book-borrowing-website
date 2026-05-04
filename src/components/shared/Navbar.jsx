"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/all-books"}>All Books</NavLink>
      </li>
      <li>
        <NavLink href={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-shell flex justify-between items-center py-3">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <FaLeaf className="text-3xl text-emerald-600" />
          <span className="text-xl font-bold text-slate-900">
            BiblioLoom
          </span>
        </Link>

        {/* desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">{navLinks}</ul>

        {/* desktop auth area */}
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <span className="font-medium text-slate-700">{user.name}</span>
              {user.image ? (
                <Image
                  src={user.image}
                  alt="User avatar"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <button
                className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href={"/login"}
              className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 py-3">{navLinks}</ul>
          <div className="pt-3 border-t border-slate-100">
            {isPending ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : user ? (
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">{user.name}</span>
                <button
                  className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={"/login"}
                className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
