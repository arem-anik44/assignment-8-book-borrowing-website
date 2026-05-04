"use client";

import React from "react";
import Image from "next/image";
import RequireAuth from "@/components/auth/RequireAuth";
import { useBorrow } from "@/context/BorrowContext";

const MyProfilePage = () => {
  const { borrowedBooks } = useBorrow();

  return (
    <RequireAuth>
      {(user) => (
        <div className="container-shell section-padding">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            My Profile
          </h1>

          {/* user info card */}
          <div className="max-w-2xl bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-10">
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
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Books Borrowed</span>
                <span className="text-slate-900">{borrowedBooks.length}</span>
              </div>
            </div>
          </div>

          {/* borrowed books section */}
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Borrowed Books ({borrowedBooks.length})
            </h2>

            {borrowedBooks.length > 0 ? (
              <div className="space-y-4">
                {borrowedBooks.map((record, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center gap-4"
                  >
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={record.book.image_url}
                        alt={record.book.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">
                        {record.book.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        by {record.book.author}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Borrowed at: {record.borrowedAt}
                      </p>
                    </div>
                    <span className="badge bg-emerald-100 text-emerald-800 border-none text-xs">
                      {record.book.category}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 text-center">
                <p className="text-slate-500">
                  You haven&apos;t borrowed any books yet. Browse our collection
                  and start reading!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </RequireAuth>
  );
};

export default MyProfilePage;
