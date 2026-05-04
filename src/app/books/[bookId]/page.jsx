import React from "react";
import { notFound } from "next/navigation";
import { getBookById } from "@/lib/books";
import BookDetailsClient from "@/components/books/BookDetailsClient";

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const book = getBookById(bookId);

  if (!book) {
    notFound();
  }

  return <BookDetailsClient book={book} />;
};

export default BookDetailsPage;
