import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id, title, author, category, available_quantity, image_url } = book;

  return (
    <div className="card bg-white shadow-sm hover:-translate-y-1 transition-transform duration-200">
      <figure className="relative aspect-[4/3]">
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute top-2 right-2 badge bg-emerald-600 text-white border-none text-xs">
          {category}
        </span>
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-base font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-sm text-slate-500">by {author}</p>
        <p className="text-sm text-slate-600">
          Available: <span className="font-medium">{available_quantity}</span>{" "}
          copies
        </p>
        <div className="card-actions mt-3">
          <Link
            href={`/books/${id}`}
            className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700 w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
