"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RequireAuth from "@/components/auth/RequireAuth";
import { useBorrow } from "@/context/BorrowContext";
import toast from "react-hot-toast";

const BookDetailsClient = ({ book }) => {
  const { title, author, description, category, available_quantity, image_url } =
    book;
  const { borrowBook, isBookBorrowed } = useBorrow();
  const alreadyBorrowed = isBookBorrowed(book.id);

  return (
    <RequireAuth>
      {(user) => {
        const handleBorrow = () => {
          const result = borrowBook(book, user.name);
          if (result.success) {
            toast.success(result.message);
          } else {
            toast.error(result.message);
          }
        };

        return (
          <div className="container-shell section-padding">
            <div className="flex flex-col md:flex-row gap-10">
              {/* book cover */}
              <div className="md:w-1/3">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={image_url}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* book details */}
              <div className="md:w-2/3">
                <span className="badge bg-emerald-600 text-white border-none mb-3">
                  {category}
                </span>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  {title}
                </h1>
                <p className="text-lg text-slate-600 mb-4">by {author}</p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 inline-block mb-6">
                  <span className="text-emerald-800 font-semibold">
                    {available_quantity} copies available
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleBorrow}
                    disabled={alreadyBorrowed}
                    className={`btn text-white ${
                      alreadyBorrowed
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-700"
                    }`}
                  >
                    {alreadyBorrowed ? "Already Borrowed" : "Borrow This Book"}
                  </button>
                  <Link href={"/all-books"} className="btn btn-outline">
                    Back to All Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </RequireAuth>
  );
};

export default BookDetailsClient;
