import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { modules } from "../../data/modules";
import ModuleIcon from "../../components/ModuleIcon";

export default function AdminModules() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
        Modullar
      </h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
        Kurs dasturidagi barcha {modules.length} mavzu (KOT1306 fan dasturiga
        muvofiq).
      </p>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-200 dark:border-ink-800">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="bg-ink-50 dark:bg-ink-900">
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">#</th>
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Mavzu</th>
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Amaliy mavzu</th>
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Mustaqil ish</th>
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Davomiylik</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {modules.map((m) => (
              <tr key={m.id} className="border-t border-ink-100 dark:border-ink-800">
                <td className="px-4 py-3 text-ink-400">{String(m.id).padStart(2, "0")}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                      <ModuleIcon icon={m.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-ink-800 dark:text-ink-100">{m.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{m.seminarTopic}</td>
                <td className="px-4 py-3 text-ink-500 dark:text-ink-400">
                  {m.selfStudyTopics.length} mavzu
                </td>
                <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{m.duration}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    to={`/kurs/${m.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
                  >
                    Ko'rish <ExternalLink size={12} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-400">
        Mavzu kontentini tahrirlash imkoniyati backend qo'shilgandan so'ng
        shu panel orqali ta'minlanadi. Hozircha kontent kod ichida
        saqlanadi.
      </p>
    </div>
  );
}
