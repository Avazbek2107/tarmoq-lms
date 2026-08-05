import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, Users, BookOpen, ExternalLink } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function AdminLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

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
      <aside className="sticky top-0 flex h-screen w-64 flex-col border-r border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-base font-bold text-white shadow-glow">
            T
          </span>
          <div>
            <p className="font-display text-base font-bold leading-tight text-ink-900 dark:text-white">
              Admin panel
            </p>
            <p className="text-[11px] text-ink-400">TarmoqLMS</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                    : "text-ink-600 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-900"
                }`
              }
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-ink-200 px-3 py-3 dark:border-ink-800">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-900"
          >
            <ExternalLink size={17} />
            Saytga qaytish
          </NavLink>
          <div className="flex items-center justify-between rounded-xl px-3 py-2.5">
            <span className="text-xs font-semibold text-ink-500 dark:text-ink-400">
              {user?.name}
            </span>
            <button
              onClick={handleSignOut}
              className="text-ink-400 hover:text-red-500"
              aria-label="Chiqish"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6 sm:p-8">
        <Outlet />
      </main>
    </div>
  );
}
