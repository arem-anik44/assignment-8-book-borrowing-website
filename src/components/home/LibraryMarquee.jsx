"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import books from "@/data/books";

const LibraryMarquee = () => {
  const marqueeBooks = books.slice(0, 6);

  return (
    <section className="bg-emerald-700 py-3">
      <Marquee pauseOnHover speed={40} gradient={false}>
        <span className="text-white font-semibold mx-4">New Arrivals:</span>
        {marqueeBooks.map((book) => (
          <span key={book.id} className="text-emerald-100 mx-4">
            {book.title} by {book.author} &nbsp;|
          </span>
        ))}
        <span className="text-yellow-300 font-semibold mx-4">
          Special Discount on Memberships — Join Today!
        </span>
      </Marquee>
    </section>
  );
};

export default LibraryMarquee;
