import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, Moon, Sun, User } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

export default function Topbar({ onMenu }: { onMenu: () => void }) {
  const { theme, toggle } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink-200 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/80 lg:px-8">
      <button
        onClick={onMenu}
        className="rounded-lg p-2 text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900 lg:hidden"
        aria-label="Menyu"
      >
        <Menu size={20} />
      </button>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300 sm:inline">
          Kompyuter tarmoqlari · KOT1306
        </span>
        <button
          onClick={toggle}
          className="rounded-lg p-2 text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900"
          aria-label="Mavzuni almashtirish"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {user ? (
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-ink-100 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:bg-ink-800 dark:text-ink-200">
              <User size={13} />
              <span className="hidden sm:inline">{user.name}</span>
            </span>
            <button
              onClick={handleSignOut}
              className="rounded-lg p-2 text-ink-500 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-900"
              aria-label="Chiqish"
            >
              <LogOut size={17} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <Link
              to="/kirish"
              className="rounded-lg px-3 py-1.5 text-xs font-semibold text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900 sm:text-sm"
            >
              Kirish
            </Link>
            <Link
              to="/royxatdan-otish"
              className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700 sm:text-sm"
            >
              Ro'yxatdan o'tish
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
