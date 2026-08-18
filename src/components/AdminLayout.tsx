import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, Users, BookOpen, ExternalLink, Menu, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function AdminLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  const navItems = [
    { to: "/admin", label: "Boshqaruv paneli", icon: LayoutDashboard, end: true },
    { to: "/admin/foydalanuvchilar", label: "Foydalanuvchilar", icon: Users, end: false },
    { to: "/admin/modullar", label: "Modullar", icon: BookOpen, end: false },
  ];

  return (
    <div className="flex min-h-screen bg-ink-50 dark:bg-ink-950">
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen w-64 shrink-0 flex-col bg-ink-950 transition-transform duration-300 lg:sticky lg:top-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2.5 px-5 py-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 font-display text-base font-extrabold text-ink-950 shadow-glow">
              T
            </span>
            <div>
              <p className="font-display text-sm font-extrabold uppercase tracking-wide text-white">
                Admin panel
              </p>
              <p className="text-[11px] text-ink-500">TarmoqLMS</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-ink-300 hover:bg-white/5 lg:hidden"
            aria-label="Yopish"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1.5 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-lg border-2 px-3 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border-brand-500 text-brand-400"
                    : "border-transparent text-ink-300 hover:border-white/10 hover:text-white"
                }`
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-white/10 px-3 py-3">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-bold uppercase tracking-wide text-ink-300 hover:bg-white/5 hover:text-white"
          >
            <ExternalLink size={16} />
            Saytga qaytish
          </NavLink>
          <div className="flex items-center justify-between rounded-lg px-3 py-2.5">
            <span className="text-xs font-semibold text-ink-400">{user?.name}</span>
            <button
              onClick={handleSignOut}
              className="text-ink-400 hover:text-red-400"
              aria-label="Chiqish"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col">
        <div className="sticky top-0 z-20 flex items-center gap-3 border-b border-ink-200 bg-white px-4 py-3 dark:border-ink-800 dark:bg-ink-900 lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
            aria-label="Menyu"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm font-bold uppercase tracking-wide text-ink-700 dark:text-ink-200">
            Admin panel
          </span>
        </div>

        <main key={location.pathname} className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
