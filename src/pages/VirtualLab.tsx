import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Network, Router, ShieldCheck, Terminal } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { Figure, PacketSwitchingDiagram } from "../components/diagrams/Diagrams";
import { AnimatedStarTopology, AnimatedMeshTopology } from "../components/diagrams/AnimatedTopology";

const tools = [
  {
    icon: Router,
    name: "Cisco Packet Tracer",
    desc: "Router, switch va boshqa tarmoq uskunalarini virtual muhitda ulash va sozlash simulyatori.",
  },
  {
    icon: Network,
    name: "GNS3",
    desc: "Real tarmoq operatsion tizimlari (RouterOS, Cisco IOS) bilan ishlaydigan chuqurroq tarmoq emulyatori.",
  },
  {
    icon: Terminal,
    name: "Wireshark",
    desc: "Tarmoq trafigini jonli tutib olish va paketlarni qatlamma-qatlam tahlil qilish vositasi.",
  },
  {
    icon: ShieldCheck,
    name: "Kerio Control (sinov versiyasi)",
    desc: "Firewall qoidalari va trafik nazoratini xavfsiz, real ta'sirsiz muhitda sinash imkoniyati.",
  },
];

const exercises = [
  {
    title: "Yulduz topologiyasida LAN qurish",
    desc: "Switch atrofida bir nechta kompyuterni ulab, IP-manzillash va ulanishni tekshiring.",
    type: "star" as const,
  },
  {
    title: "Mesh tarmoqda zaxira yo'llarni sinash",
    desc: "Bir ulanish uzilganda ma'lumot muqobil yo'l orqali borishini kuzating.",
    type: "mesh" as const,
  },
];

export default function VirtualLab() {
  return (
    <div>
      <section className="bg-ink-950 bg-grid px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-400">
            <FlaskConical size={14} /> Virtual laboratoriya
          </span>
          <h1 className="mt-6 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
            Xavfsiz muhitda <em className="text-brand-500 not-italic">amaliyot</em>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-300 sm:text-base">
            Haqiqiy uskunani buzib qo'yish xavfisiz — router, switch va tarmoq
            topologiyalarini virtual simulyatorlar yordamida loyihalashtiring,
            sozlang va sinab ko'ring.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
        <SectionHeading
          title="Foydalaniladigan vositalar"
          subtitle="Amaliy mashg'ulotlarda tavsiya etiladigan asosiy simulyatorlar"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="mb-3 inline-flex rounded-xl bg-brand-50 p-2.5 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <t.icon size={20} />
              </div>
              <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
                {t.name}
              </h3>
              <p className="mt-1.5 text-xs text-ink-500 dark:text-ink-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading dark title="Namunaviy mashqlar" />
          <div className="grid gap-8 lg:grid-cols-2">
            {exercises.map((ex) => (
              <div key={ex.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Figure caption={ex.title}>
                  {ex.type === "star" ? <AnimatedStarTopology /> : <AnimatedMeshTopology />}
                </Figure>
                <p className="text-sm text-ink-300">{ex.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <Figure caption="Paketlar tarmoq bo'ylab qanday harakatlanishini kuzating">
              <PacketSwitchingDiagram />
            </Figure>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-8">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">
          Amaliy mashg'ulotlar bilan boshlang
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-500 dark:text-ink-400">
          Har bir mavzuning "Amaliyot" bo'limida shu vositalar yordamida
          bajariladigan aniq topshiriqlar berilgan.
        </p>
        <Link
          to="/kurs/lokal-tarmoq-topologiyasi/amaliyot"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-xs font-bold uppercase tracking-wide text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-400"
        >
          Topologiya amaliyotini ko'rish <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
