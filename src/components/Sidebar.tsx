import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, X, CheckCircle2, Circle } from "lucide-react";
import { modules } from "../data/modules";
import { useProgress } from "../hooks/useProgress";
import ProgressRing from "./ProgressRing";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { isCompleted, completed, total, percent } = useProgress();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-ink-950/50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-ink-200 bg-white transition-transform duration-300 dark:border-ink-800 dark:bg-ink-950 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-5 py-5">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-base font-bold text-white shadow-glow">
              T
            </span>
            <span className="font-display text-lg font-bold text-ink-900 dark:text-white">
              Tarmoq<span className="text-brand-500">LMS</span>
            </span>
          </a>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-900 lg:hidden"
            aria-label="Yopish"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-3">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                  : "text-ink-600 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-900"
              }`
            }
          >
            <LayoutDashboard size={17} />
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/kurs"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                  : "text-ink-600 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-900"
              }`
            }
          >
            <BookOpen size={17} />
            Kurs dasturi
          </NavLink>
        </nav>

        <div className="mt-2 flex-1 overflow-y-auto px-3 pb-3">
          <p className="mb-1 mt-4 px-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
            Mavzular
          </p>
          <div className="flex flex-col gap-0.5">
            {modules.map((m) => (
              <NavLink
                key={m.id}
                to={`/kurs/${m.slug}`}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                    isActive
                      ? "bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                      : "text-ink-600 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-900"
                  }`
                }
              >
                <span className="shrink-0 text-ink-400 group-hover:text-brand-500">
                  {isCompleted(m.id) ? (
                    <CheckCircle2 size={15} className="text-emerald-500" />
                  ) : (
                    <Circle size={15} />
                  )}
                </span>
                <span className="line-clamp-1">
                  {m.id}. {m.title}
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-ink-200 px-5 py-4 dark:border-ink-800">
          <ProgressRing percent={percent} size={40} stroke={3.5} />
          <div className="text-xs">
            <p className="font-semibold text-ink-800 dark:text-ink-100">
              {completed.length}/{total} mavzu
            </p>
            <p className="text-ink-400">tugallandi</p>
          </div>
        </div>
      </aside>
    </>
  );
}
