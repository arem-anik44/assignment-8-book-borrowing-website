import React from "react";
import Link from "next/link";
import { getFeaturedBooks } from "@/lib/books";
import BookCard from "@/components/books/BookCard";

const FeaturedBooks = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Top Books This Week
          </h2>
          <Link
            href={"/all-books"}
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
          >
            View All Books →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
