import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Mango Library | Online Book Borrowing",
  description:
    "A modern online book borrowing platform built with Next.js, BetterAuth, MongoDB, Tailwind CSS, and DaisyUI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <main>{children}</main>
      </body>
    </html>
  );
}
