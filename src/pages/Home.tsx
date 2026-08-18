import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock,
  FlaskConical,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { modules } from "../data/modules";
import { useProgress } from "../hooks/useProgress";
import ModuleIcon from "../components/ModuleIcon";
import ProgressRing from "../components/ProgressRing";
import SectionHeading from "../components/SectionHeading";
import Globe from "../components/Globe";
import {
  LayerStackDiagram,
  TcpIpStackDiagram,
  FirewallDiagram,
} from "../components/diagrams/Diagrams";

const stats = [
  { label: "Mavzular", value: "15", icon: BookOpen },
  { label: "Auditoriya soati", value: "72", icon: Clock },
  { label: "Kredit", value: "6", icon: GraduationCap },
  { label: "Mustaqil ta'lim, soat", value: "108", icon: Layers3 },
];

const features = [
  {
    icon: BookOpen,
    title: "15 mavzu",
    desc: "Kompyuter tarmoqlaridan Internet xavfsizligigacha — fan dasturiga to'liq mos kontent.",
    href: "/kurs",
    linkLabel: "Dasturni ko'rish",
  },
  {
    icon: FlaskConical,
    title: "Virtual laboratoriya",
    desc: "Tarmoq topologiyalari va qurilmalarni xavfsiz, virtual muhitda sinab ko'ring.",
    href: "/laboratoriya",
    linkLabel: "Laboratoriyaga kirish",
  },
  {
    icon: ShieldCheck,
    title: "Amaliy mashg'ulotlar",
    desc: "Har bir mavzuda amaliy (seminar) va mustaqil ish topshiriqlari mavjud.",
    href: "/kurs",
    linkLabel: "Batafsil",
  },
];

const whyTabs = [
  {
    label: "Nazariya + amaliyot",
    title: "To'rt qatlamli chuqur tushuntirish",
    text: "Har bir mavzu tarmoqning fizik, mantiqiy, axborot va boshqaruv tuzilmalari orqali bosqichma-bosqich tushuntiriladi — nazariyadan amaliyotgacha.",
    Diagram: LayerStackDiagram,
  },
  {
    label: "Zamonaviy texnologiyalar",
    title: "TCP/IP va zamonaviy protokollar",
    text: "TCP, UDP, IP qatlamlaridan tortib DNS va Wi-Fi 6 gacha — zamonaviy tarmoq infratuzilmasi to'liq qamrab olinadi.",
    Diagram: TcpIpStackDiagram,
  },
  {
    label: "Tarmoq xavfsizligi",
    title: "Firewall va himoya vositalari",
    text: "Firewall, Kerio Control va shifrlash usullari orqali tarmoqni tashqi tahdidlardan himoya qilishni o'rganasiz.",
    Diagram: FirewallDiagram,
  },
];

export default function Home() {
  const { completed, percent } = useProgress();
  const [tab, setTab] = useState(0);
  const nextModule =
    modules.find((m) => !completed.includes(m.id)) ?? modules[0];
  const ActiveDiagram = whyTabs[tab].Diagram;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 bg-grid px-4 pb-20 pt-20 sm:px-8 lg:pt-28">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-40 h-56 w-56 rounded-full bg-accent-400/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-400">
              <Sparkles size={14} /> Guliston davlat universiteti · KOT1306
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Kompyuter <em className="text-brand-500 not-italic">tarmoqlari</em>
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-semibold uppercase tracking-wide text-ink-400 lg:mx-0">
              Fanini onlayn o'rganing
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base text-ink-300 sm:text-lg lg:mx-0">
              Tarmoq topologiyalaridan Internet tarixigacha, IP-manzillashdan
              tarmoq xavfsizligigacha — 15 mavzu, aniq tushunchalar, chizmalar
              va amaliy misollar bilan.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to={`/kurs/${nextModule.slug}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-xs font-bold uppercase tracking-wide text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-400"
              >
                {completed.length > 0 ? "Davom ettirish" : "Kursni boshlash"}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/kurs"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:border-brand-500 hover:text-brand-400"
              >
                To'liq dasturni ko'rish
              </Link>
            </div>

            {completed.length > 0 && (
              <div className="mx-auto mt-10 flex max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur lg:mx-0">
                <ProgressRing percent={percent} dark />
                <div className="text-sm">
                  <p className="font-semibold text-white">
                    Sizning progressingiz
                  </p>
                  <p className="text-ink-400">
                    {completed.length} / {modules.length} mavzu tugallandi
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 lg:mt-0">
            <Globe />
          </div>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
            >
              <s.icon className="mx-auto mb-1.5 text-brand-500" size={20} />
              <p className="font-display text-2xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-[11px] uppercase tracking-wide text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-ink-50 px-4 py-20 dark:bg-ink-900 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Nega TarmoqLMS?"
            subtitle="Fan dasturiga mos, amaliy va zamonaviy o'quv tajribasi"
          />
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {features.map((f) => (
              <Link
                key={f.title}
                to={f.href}
                className="group relative flex flex-col justify-end bg-ink-950 p-8 transition-colors hover:bg-brand-500"
              >
                <f.icon size={26} className="mb-4 text-brand-400 group-hover:text-ink-950" />
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-white group-hover:text-ink-950">
                  {f.title}
                </h3>
                <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:mt-3 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="text-sm text-ink-300 group-hover:text-ink-900">{f.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 border-b-2 border-white pb-0.5 text-xs font-bold uppercase tracking-wide text-white group-hover:border-ink-950 group-hover:text-ink-950">
                      {f.linkLabel} <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — tabs */}
      <section className="bg-ink-950 px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading dark title="Qanday o'rganasiz?" />

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {whyTabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setTab(i)}
                className={`relative pb-4 text-xs font-bold uppercase tracking-wide transition-colors ${
                  tab === i ? "text-brand-500" : "text-white hover:text-brand-400"
                }`}
              >
                {t.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full transition-colors ${
                    tab === i ? "bg-brand-500" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <ActiveDiagram />
            </div>
            <div>
              <h4 className="font-display text-2xl font-bold text-white">
                {whyTabs[tab].title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-ink-300">
                {whyTabs[tab].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course preview */}
      <section className="bg-ink-900 px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading dark title="Kurs mavzulari" subtitle="15 mavzudan bir nechtasi" />

          <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {modules.slice(0, 8).map((m) => (
              <Link
                key={m.id}
                to={`/kurs/${m.slug}`}
                className="group w-72 shrink-0 snap-start overflow-hidden rounded-xl bg-white transition-transform hover:-translate-y-1"
              >
                <div className="flex h-28 items-center justify-center bg-gradient-to-br from-brand-500 to-accent-500">
                  <ModuleIcon icon={m.icon} className="h-9 w-9 text-white" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink-900">
                    {m.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs text-ink-500">{m.shortDesc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
                    <span className="text-[11px] font-semibold text-ink-400">
                      {String(m.id).padStart(2, "0")} · {m.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-600 group-hover:text-brand-700">
                      Boshlash <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/kurs"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:border-brand-500 hover:text-brand-400"
            >
              Barcha mavzularni ko'rish <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      {completed.length === 0 && (
        <section className="bg-brand-500 px-4 py-16 text-center sm:px-8">
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink-950 sm:text-3xl">
            Bugundan boshlang
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-900/80">
            Bepul ro'yxatdan o'ting va "Kompyuter tarmoqlari" fanini o'z
            sur'atingizda o'rganishni boshlang.
          </p>
          <Link
            to="/royxatdan-otish"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink-950 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            Ro'yxatdan o'tish <ArrowRight size={14} />
          </Link>
        </section>
      )}
    </div>
  );
}
