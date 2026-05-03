"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-emerald-700 border-b-2 border-b-emerald-700"
          : "text-slate-700 hover:text-emerald-600"
      } transition-colors font-medium ${className || ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
