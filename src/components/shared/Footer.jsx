import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container-shell py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf className="text-2xl text-emerald-400" />
              <span className="text-lg font-bold text-white">
                BiblioLoom
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A modern online book borrowing platform. Explore, discover, and
              borrow books from our growing digital collection.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-emerald-400 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-emerald-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-emerald-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={"/"} className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/all-books"}
                  className="hover:text-emerald-400 transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href={"/my-profile"}
                  className="hover:text-emerald-400 transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* contact us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@biblioloom.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BiblioLoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
