import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, FlaskConical, X, CheckCircle2, Circle } from "lucide-react";
import { modules } from "../data/modules";
import { useProgress } from "../hooks/useProgress";
import ProgressRing from "./ProgressRing";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2.5 rounded-lg border-2 px-3 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors ${
    isActive
      ? "border-brand-500 text-brand-400"
      : "border-transparent text-ink-300 hover:border-white/10 hover:text-white"
  }`;

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
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-ink-950 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-5 py-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 font-display text-base font-extrabold text-ink-950 shadow-glow">
              T
            </span>
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
              Tarmoq<em className="text-brand-500 not-italic">LMS</em>
            </span>
          </a>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-300 hover:bg-white/5 lg:hidden"
            aria-label="Yopish"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1.5 px-3">
          <NavLink to="/" end onClick={onClose} className={navLinkClass}>
            <LayoutDashboard size={16} />
            Bosh sahifa
          </NavLink>
          <NavLink to="/kurs" onClick={onClose} className={navLinkClass}>
            <BookOpen size={16} />
            Kurs dasturi
          </NavLink>
          <NavLink to="/laboratoriya" onClick={onClose} className={navLinkClass}>
            <FlaskConical size={16} />
            Virtual lab
          </NavLink>
        </nav>

        <div className="mt-4 flex-1 overflow-y-auto border-t border-white/10 px-3 pb-3 pt-4">
          <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
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
                      ? "bg-white/5 font-semibold text-brand-400"
                      : "text-ink-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <span className="shrink-0 text-ink-500 group-hover:text-brand-400">
                  {isCompleted(m.id) ? (
                    <CheckCircle2 size={15} className="text-emerald-400" />
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

        <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4">
          <ProgressRing percent={percent} size={40} stroke={3.5} dark />
          <div className="text-xs">
            <p className="font-semibold text-white">
              {completed.length}/{total} mavzu
            </p>
            <p className="text-ink-400">tugallandi</p>
          </div>
        </div>
      </aside>
    </>
  );
}
