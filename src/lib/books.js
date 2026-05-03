import books from "@/data/books";

export const getFeaturedBooks = () => {
  return books.slice(0, 4);
};

export const getBookById = (id) => {
  return books.find((book) => book.id === id);
};

export const getCategories = () => {
  return ["All", "Story", "Tech", "Science"];
};
