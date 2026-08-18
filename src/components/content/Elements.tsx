import type { ReactNode } from "react";
import { Info, Lightbulb, AlertTriangle } from "lucide-react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 mt-10 border-l-4 border-brand-500 pl-3 font-display text-xl font-bold text-ink-900 dark:text-white first:mt-0">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
      {children}
    </p>
  );
}

export function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-4 flex flex-col gap-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function OL({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mb-4 flex flex-col gap-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
            {i + 1}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
}

type CalloutKind = "info" | "tip" | "warning";

const calloutStyle: Record<CalloutKind, { icon: typeof Info; cls: string }> = {
  info: {
    icon: Info,
    cls: "border-brand-200 bg-brand-50 text-brand-800 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200",
  },
  tip: {
    icon: Lightbulb,
    cls: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",
  },
  warning: {
    icon: AlertTriangle,
    cls: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
  },
};

export function Callout({
  kind = "info",
  title,
  children,
}: {
  kind?: CalloutKind;
  title: string;
  children: ReactNode;
}) {
  const { icon: Icon, cls } = calloutStyle[kind];
  return (
    <div className={`my-5 flex gap-3 rounded-xl border p-4 ${cls}`}>
      <Icon size={18} className="mt-0.5 shrink-0" />
      <div>
        <p className="mb-1 text-sm font-bold">{title}</p>
        <div className="text-sm leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
}

export function KeyTerms({
  terms,
}: {
  terms: { term: string; def: string }[];
}) {
  return (
    <div className="my-5 grid gap-3 rounded-2xl border border-ink-200 bg-ink-50 p-4 dark:border-ink-800 dark:bg-ink-900/50 sm:grid-cols-2">
      {terms.map((t) => (
        <div key={t.term}>
          <p className="text-sm font-bold text-ink-800 dark:text-ink-100">{t.term}</p>
          <p className="text-xs text-ink-500 dark:text-ink-400">{t.def}</p>
        </div>
      ))}
    </div>
  );
}

export function CompareTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-5 overflow-x-auto rounded-2xl border border-ink-200 dark:border-ink-800">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="bg-ink-50 dark:bg-ink-900">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 font-semibold text-ink-700 dark:text-ink-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-ink-100 dark:border-ink-800">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-2.5 text-ink-600 dark:text-ink-300">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
