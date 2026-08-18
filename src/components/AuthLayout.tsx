import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, ShieldCheck } from "lucide-react";

const perks = [
  { icon: BookOpen, text: "15 mavzu — nazariya, amaliyot va mustaqil ta'lim" },
  { icon: FlaskConical, text: "Virtual laboratoriyada xavfsiz amaliyot" },
  { icon: ShieldCheck, text: "Zamonaviy tarmoq xavfsizligi ko'nikmalari" },
];

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
    <div className="relative flex min-h-screen items-stretch bg-ink-950 bg-grid">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-accent-400/30 blur-3xl" />

      <div className="relative hidden w-1/2 flex-col justify-center px-16 lg:flex">
        <Link to="/" className="mb-10 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 font-display text-base font-extrabold text-ink-950 shadow-glow">
            T
          </span>
          <span className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
            Tarmoq<em className="text-brand-500 not-italic">LMS</em>
          </span>
        </Link>
        <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-white">
          Kompyuter <em className="text-brand-500 not-italic">tarmoqlari</em>
          <br />
          fanini onlayn o'rganing
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          {perks.map((p) => (
            <div key={p.text} className="flex items-center gap-3 text-sm text-ink-300">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-400">
                <p.icon size={16} />
              </span>
              {p.text}
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-8 flex items-center justify-center gap-2.5 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 font-display text-base font-extrabold text-ink-950 shadow-glow">
              T
            </span>
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
              Tarmoq<em className="text-brand-500 not-italic">LMS</em>
            </span>
          </Link>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <h1 className="font-display text-2xl font-bold text-white">{title}</h1>
            <p className="mt-1.5 text-sm text-ink-400">{subtitle}</p>

            <div className="mt-6">{children}</div>
          </div>

          <p className="mt-6 text-center text-sm text-ink-400">{footer}</p>
        </div>
      </div>
    </div>
  );
}
