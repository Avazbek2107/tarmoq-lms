import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { modules } from "../data/modules";
import { useProgress } from "../hooks/useProgress";
import ModuleIcon from "../components/ModuleIcon";
import ProgressRing from "../components/ProgressRing";

const stats = [
  { label: "Mavzular", value: "15", icon: BookOpen },
  { label: "Auditoriya soati", value: "72", icon: Clock },
  { label: "Kredit", value: "6", icon: GraduationCap },
  { label: "Mustaqil ta'lim, soat", value: "108", icon: Layers3 },
];

const features = [
  {
    icon: Sparkles,
    title: "Nazariya + amaliyot",
    desc: "Har bir mavzu ma'ruza, amaliy (seminar) mashg'ulot va mustaqil ish qismlarini o'z ichiga oladi.",
  },
  {
    icon: Wifi,
    title: "Zamonaviy tarmoq texnologiyalari",
    desc: "LAN'dan tortib Wi-Fi 6 va SSL shifrlashgacha — zamonaviy tarmoq muhiti to'liq qamrab olinadi.",
  },
  {
    icon: ShieldCheck,
    title: "Tarmoq xavfsizligi",
    desc: "Firewall, Kerio Control va shifrlash usullari bilan amaliy xavfsizlik ko'nikmalarini shakllantirasiz.",
  },
];

export default function Home() {
  const { completed, percent } = useProgress();
  const nextModule =
    modules.find((m) => !completed.includes(m.id)) ?? modules[0];

  return (
    <div>
      <section className="relative overflow-hidden bg-grid px-4 pb-16 pt-16 sm:px-8 lg:pt-24">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-40 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-ink-900/60 dark:text-brand-300">
            <Sparkles size={14} /> Guliston davlat universiteti · KOT1306
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Kompyuter tarmoqlari</span>
            <br />
            fanini onlayn o'rganing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink-500 dark:text-ink-400 sm:text-lg">
            Tarmoq topologiyalaridan Internet tarixigacha, IP-manzillashdan
            tarmoq xavfsizligigacha — 15 mavzu, aniq tushunchalar, chizmalar
            va amaliy misollar bilan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={`/kurs/${nextModule.slug}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
            >
              {completed.length > 0 ? "Davom ettirish" : "Kursni boshlash"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/kurs"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 transition-colors hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:bg-ink-800"
            >
              To'liq dasturni ko'rish
            </Link>
          </div>

          {completed.length > 0 && (
            <div className="mx-auto mt-10 flex max-w-sm items-center gap-4 rounded-2xl border border-ink-200 bg-white/70 p-4 text-left shadow-sm dark:border-ink-800 dark:bg-ink-900/50">
              <ProgressRing percent={percent} />
              <div className="text-sm">
                <p className="font-semibold text-ink-800 dark:text-ink-100">
                  Sizning progressingiz
                </p>
                <p className="text-ink-400">
                  {completed.length} / {modules.length} mavzu tugallandi
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="relative mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur dark:border-ink-800 dark:bg-ink-900/50"
            >
              <s.icon className="mx-auto mb-1.5 text-brand-500" size={20} />
              <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                {s.value}
              </p>
              <p className="text-[11px] text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="mb-3 inline-flex rounded-xl bg-brand-50 p-2.5 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <f.icon size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-ink-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
              Kurs mavzulari
            </h2>
            <p className="text-sm text-ink-400">15 mavzudan 6 tasi</p>
          </div>
          <Link
            to="/kurs"
            className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 sm:flex"
          >
            Barchasi <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((m) => (
            <Link
              key={m.id}
              to={`/kurs/${m.slug}`}
              className="group rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-2.5 text-white">
                  <ModuleIcon icon={m.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="text-xs font-semibold text-ink-400">
                  {String(m.id).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-sm font-bold leading-snug text-ink-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {m.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-xs text-ink-500 dark:text-ink-400">
                {m.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
