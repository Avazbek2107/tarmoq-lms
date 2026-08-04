import { Link } from "react-router-dom";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { modules } from "../data/modules";
import { useProgress } from "../hooks/useProgress";
import ModuleIcon from "../components/ModuleIcon";

export default function Catalog() {
  const { isCompleted, completed, percent } = useProgress();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          Kurs dasturi
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink-900 dark:text-white">
          Kompyuter tarmoqlari — 15 mavzu
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-500 dark:text-ink-400">
          KOT1306 fan dasturiga muvofiq tayyorlangan to'liq kurs: har bir mavzu
          ma'ruza, amaliy mashg'ulot va mustaqil ta'lim topshiriqlarini o'z
          ichiga oladi.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="whitespace-nowrap text-xs font-semibold text-ink-500 dark:text-ink-400">
            {completed.length}/{modules.length} tugallandi
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => {
          const done = isCompleted(m.id);
          return (
            <Link
              key={m.id}
              to={`/kurs/${m.slug}`}
              className="group relative flex flex-col rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900/40"
            >
              {done && (
                <span className="absolute right-4 top-4 text-emerald-500">
                  <CheckCircle2 size={18} />
                </span>
              )}
              <div className="mb-3 inline-flex w-fit rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-2.5 text-white">
                <ModuleIcon icon={m.icon} className="h-[18px] w-[18px]" />
              </div>
              <span className="text-xs font-semibold text-ink-400">
                {String(m.id).padStart(2, "0")}-MAVZU
              </span>
              <h3 className="mt-1 font-display text-sm font-bold leading-snug text-ink-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {m.title}
              </h3>
              <p className="mt-1.5 flex-1 text-xs text-ink-500 dark:text-ink-400">
                {m.shortDesc}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3 text-xs text-ink-400 dark:border-ink-800">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {m.duration}
                </span>
                <span className="flex items-center gap-1 font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-brand-400">
                  Boshlash <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
