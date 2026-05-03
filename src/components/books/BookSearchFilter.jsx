"use client";

import React, { useState, useMemo } from "react";
import books from "@/data/books";
import { getCategories } from "@/lib/books";
import BookCard from "./BookCard";
import { FiSearch } from "react-icons/fi";

const BookSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getCategories();

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || book.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="container-shell section-padding">
      {/* search bar */}
      <div className="max-w-xl mx-auto mb-10">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FiSearch className="text-slate-400 text-lg" />
          <input
            type="text"
            placeholder="Search books by title..."
            className="grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* category sidebar */}
        <aside className="md:w-48 shrink-0">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Categories
          </h3>
          <ul className="flex md:flex-col gap-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* book grid */}
        <div className="flex-1">
          <p className="text-sm text-slate-500 mb-4">
            Showing {filteredBooks.length} book
            {filteredBooks.length !== 1 && "s"}
          </p>
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                No books found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSearchFilter;
