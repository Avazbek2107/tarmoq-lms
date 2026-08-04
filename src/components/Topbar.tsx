import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Topbar({ onMenu }: { onMenu: () => void }) {
  const { theme, toggle } = useTheme();

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
      <div className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
