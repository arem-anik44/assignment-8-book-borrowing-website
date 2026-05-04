"use client";

import React, { createContext, useContext, useState } from "react";

const BorrowContext = createContext();

export const BorrowProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const borrowBook = (book, userName) => {
    const alreadyBorrowed = borrowedBooks.find(
      (item) => item.book.id === book.id
    );

    if (alreadyBorrowed) {
      return { success: false, message: "You already borrowed this book" };
    }

    const borrowRecord = {
      book,
      borrowedBy: userName,
      borrowedAt: new Date().toLocaleString(),
    };

    setBorrowedBooks((prev) => [...prev, borrowRecord]);
    return { success: true, message: `You have borrowed "${book.title}" successfully!` };
  };

  const isBookBorrowed = (bookId) => {
    return borrowedBooks.some((item) => item.book.id === bookId);
  };

  return (
    <BorrowContext.Provider value={{ borrowedBooks, borrowBook, isBookBorrowed }}>
      {children}
    </BorrowContext.Provider>
  );
};

export const useBorrow = () => {
  return useContext(BorrowContext);
};
