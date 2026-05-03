import React from "react";
import books from "@/data/books";
import BookCard from "@/components/books/BookCard";

const AllBooksPage = () => {
  return (
    <div className="container-shell section-padding">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        All Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
