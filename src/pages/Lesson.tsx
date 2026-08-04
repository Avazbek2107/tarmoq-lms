import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  FlaskConical,
  GraduationCap,
  NotebookPen,
} from "lucide-react";
import { getModuleBySlug, modules } from "../data/modules";
import { useProgress } from "../hooks/useProgress";
import ModuleIcon from "../components/ModuleIcon";
import { lectureContent, practiceContent, selfStudyContent } from "../content";

type TabId = "lecture" | "practice" | "selfstudy";

export default function Lesson() {
  const { slug } = useParams();
  const mod = slug ? getModuleBySlug(slug) : undefined;
  const { isCompleted, toggleCompleted } = useProgress();
  const [tab, setTab] = useState<TabId>("lecture");

  if (!mod) return <Navigate to="/kurs" replace />;

  const index = modules.findIndex((m) => m.id === mod.id);
  const prev = index > 0 ? modules[index - 1] : undefined;
  const next = index < modules.length - 1 ? modules[index + 1] : undefined;
  const done = isCompleted(mod.id);

  const tabs: {
    id: TabId;
    label: string;
    icon: typeof GraduationCap;
    topics: string[];
    Content: React.ComponentType;
  }[] = [
    {
      id: "lecture",
      label: "Ma'ruza",
      icon: GraduationCap,
      topics: mod.lectureTopics,
      Content: lectureContent[mod.id],
    },
    {
      id: "practice",
      label: "Amaliyot",
      icon: FlaskConical,
      topics: [mod.seminarTopic],
      Content: practiceContent[mod.id],
    },
    {
      id: "selfstudy",
      label: "Mustaqil ta'lim",
      icon: NotebookPen,
      topics: mod.selfStudyTopics,
      Content: selfStudyContent[mod.id],
    },
  ];

  const active = tabs.find((t) => t.id === tab)!;
  const ActiveContent = active.Content;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-xs text-ink-400">
        <Link to="/kurs" className="hover:text-brand-600">
          Kurs dasturi
        </Link>
        <span>/</span>
        <span className="text-ink-500 dark:text-ink-300">
          {String(mod.id).padStart(2, "0")}-mavzu
        </span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-3 text-white">
            <ModuleIcon icon={mod.icon} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
              {String(mod.id).padStart(2, "0")}-mavzu
            </p>
            <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
              {mod.title}
            </h1>
          </div>
        </div>
        <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
          {mod.shortDesc}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300">
            <Clock size={13} /> {mod.duration}
          </span>
          <button
            onClick={() => toggleCompleted(mod.id)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              done
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                : "bg-brand-600 text-white hover:bg-brand-700"
            }`}
          >
            {done ? <CheckCircle2 size={14} /> : <Circle size={14} />}
            {done ? "Tugallangan" : "Tugallash"}
          </button>
        </div>
      </header>

      <div className="mb-6 flex gap-1 rounded-2xl border border-ink-200 bg-ink-50 p-1 dark:border-ink-800 dark:bg-ink-900/60">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
              tab === t.id
                ? "bg-white text-brand-700 shadow-sm dark:bg-ink-800 dark:text-brand-300"
                : "text-ink-500 hover:text-ink-700 dark:text-ink-400 dark:hover:text-ink-200"
            }`}
          >
            <t.icon size={15} />
            <span className="hidden sm:inline">{t.label}</span>
            <span className="sm:hidden">{t.label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      <section className="mb-6 rounded-2xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900/40">
        <p className="mb-2 text-xs font-semibold text-ink-400">
          {tab === "lecture" && "MA'RUZADA KO'RILADIGAN MAVZULAR"}
          {tab === "practice" && "AMALIY (SEMINAR) MASHG'ULOT MAVZUSI"}
          {tab === "selfstudy" && "MUSTAQIL TA'LIM VA MUSTAQIL ISH MAVZULARI"}
        </p>
        <ul className="flex flex-col gap-1.5">
          {active.topics.map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <article key={tab} className="prose-lesson animate-fade-up">
        {ActiveContent ? (
          <ActiveContent />
        ) : (
          <p className="text-ink-500">Kontent tayyorlanmoqda.</p>
        )}
      </article>

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink-200 pt-6 dark:border-ink-800">
        {prev ? (
          <Link
            to={`/kurs/${prev.slug}`}
            className="group flex items-center gap-2 rounded-xl border border-ink-200 px-4 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 dark:border-ink-800 dark:text-ink-300 dark:hover:bg-ink-900"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
            <span className="hidden sm:inline">Oldingi</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/kurs/${next.slug}`}
            className="group flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <span className="hidden sm:inline">Keyingi mavzu</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <Link
            to="/kurs"
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Kursni yakunlash <CheckCircle2 size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}
