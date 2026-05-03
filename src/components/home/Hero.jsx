import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1400')",
        minHeight: "480px",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative container-shell flex flex-col items-center justify-center text-center py-28 md:py-36">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Find Your Next Read
        </h1>
        <p className="mt-4 text-lg text-slate-200 max-w-xl">
          Explore a growing collection of books across stories, technology, and
          science. Borrow what you love, from anywhere.
        </p>
        <Link
          href={"/all-books"}
          className="btn btn-lg bg-emerald-600 text-white hover:bg-emerald-700 mt-8 border-none"
        >
          Browse Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
