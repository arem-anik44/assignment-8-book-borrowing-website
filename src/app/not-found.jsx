import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href={"/"}
          className="btn bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
