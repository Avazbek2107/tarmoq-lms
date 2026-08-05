import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-grid bg-ink-50 px-4 py-10 dark:bg-ink-950">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-base font-bold text-white shadow-glow">
            T
          </span>
          <span className="font-display text-lg font-bold text-ink-900 dark:text-white">
            Tarmoq<span className="text-brand-500">LMS</span>
          </span>
        </Link>

        <div className="rounded-3xl border border-ink-200 bg-white/90 p-6 shadow-xl backdrop-blur dark:border-ink-800 dark:bg-ink-900/80 sm:p-8">
          <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">{subtitle}</p>

          <div className="mt-6">{children}</div>
        </div>

        <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          {footer}
        </p>
      </div>
    </div>
  );
}
