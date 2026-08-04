import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-extrabold text-gradient">404</p>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
        Sahifa topilmadi.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
