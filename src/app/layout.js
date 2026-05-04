import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { BorrowProvider } from "@/context/BorrowContext";

export const metadata = {
  title: "BiblioLoom | Online Book Borrowing",
  description:
    "Browse, search, and borrow books online from our growing collection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <BorrowProvider>
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </BorrowProvider>
      </body>
    </html>
  );
}
