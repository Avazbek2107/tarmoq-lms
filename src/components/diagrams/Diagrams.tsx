import type { ReactNode } from "react";

export function Figure({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900/40 sm:p-6">
      <div className="overflow-x-auto">{children}</div>
      <figcaption className="mt-3 text-center text-xs font-medium text-ink-400">
        {caption}
      </figcaption>
    </figure>
  );
}

const brand = "var(--color-brand-500)";
const accent = "var(--color-accent-500)";

export function ClientServerDiagram() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <svg viewBox="0 0 260 160" className="mx-auto h-auto w-full max-w-[240px]">
          <rect x={100} y={15} width={60} height={40} rx={8} fill={brand} />
          <text x={130} y={39} textAnchor="middle" fontSize="10" fill="white" fontWeight={700}>Server</text>
          {[30, 130, 230].map((x) => (
            <g key={x}>
              <line x1={130} y1={55} x2={x} y2={120} stroke="currentColor" strokeWidth={1.5} opacity={0.35} />
              <rect x={x - 24} y={120} width={48} height={30} rx={7} fill={accent} />
              <text x={x} y={139} textAnchor="middle" fontSize="9" fill="white" fontWeight={600}>Klient</text>
            </g>
          ))}
        </svg>
        <p className="mt-2 text-center text-xs font-semibold text-ink-500">Klient–server modeli</p>
      </div>
      <div>
        <svg viewBox="0 0 260 160" className="mx-auto h-auto w-full max-w-[240px]">
          {[[60, 40], [200, 40], [60, 130], [200, 130]].map((a, i) =>
            [[60, 40], [200, 40], [60, 130], [200, 130]].map((b, j) =>
              j > i ? (
                <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="currentColor" strokeWidth={1.5} opacity={0.3} />
              ) : null,
            ),
          )}
          {[[60, 40], [200, 40], [60, 130], [200, 130]].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x - 26} y={y - 15} width={52} height={30} rx={7} fill={brand} />
          ))}
          {[[60, 40], [200, 40], [60, 130], [200, 130]].map(([x, y]) => (
            <text key={`t-${x}-${y}`} x={x} y={y + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight={600}>Tugun</text>
          ))}
        </svg>
        <p className="mt-2 text-center text-xs font-semibold text-ink-500">Teng huquqli (peer-to-peer) model</p>
      </div>
    </div>
  );
}

export function NetworkScaleDiagram() {
  const rings = [
    { r: 40, label: "PAN", sub: "~10 m", color: "#22d3ee" },
    { r: 85, label: "LAN", sub: "uy · ofis · bino", color: "#6366f1" },
    { r: 130, label: "MAN", sub: "shahar", color: "#8b5cf6" },
    { r: 175, label: "GAN / WAN", sub: "davlatlar, qit'alar", color: "#ec4899" },
  ];
  return (
    <svg viewBox="0 0 400 400" className="mx-auto h-auto w-full max-w-md">
      {rings
        .slice()
        .reverse()
        .map((r) => (
          <circle
            key={r.label}
            cx={200}
            cy={200}
            r={r.r}
            fill="none"
            stroke={r.color}
            strokeWidth={1.5}
            strokeDasharray="4 4"
            opacity={0.6}
          />
        ))}
      {rings.map((r) => (
        <g key={r.label}>
          <text
            x={200}
            y={200 - r.r - 6}
            textAnchor="middle"
            fontSize="13"
            fontWeight={700}
            fill={r.color}
          >
            {r.label}
          </text>
          <text
            x={200}
            y={200 - r.r + 10}
            textAnchor="middle"
            fontSize="9"
            fill="currentColor"
            opacity={0.5}
          >
            {r.sub}
          </text>
        </g>
      ))}
      <circle cx={200} cy={200} r={7} fill={brand} />
      <text x={200} y={226} textAnchor="middle" fontSize="9" fill="currentColor" opacity={0.6}>
        siz
      </text>
    </svg>
  );
}

export function TopologyDiagram({
  type,
}: {
  type: "bus" | "star" | "ring" | "mesh";
}) {
  const nodes = [
    [200, 40],
    [340, 130],
    [300, 280],
    [100, 280],
    [60, 130],
  ] as const;

  return (
    <svg viewBox="0 0 400 320" className="mx-auto h-auto w-full max-w-sm">
      {type === "bus" && (
        <>
          <line x1={40} y1={160} x2={360} y2={160} stroke={brand} strokeWidth={4} />
          {[80, 160, 240, 320].map((x) => (
            <g key={x}>
              <line x1={x} y1={160} x2={x} y2={110} stroke="currentColor" strokeWidth={2} opacity={0.5} />
              <rect x={x - 18} y={80} width={36} height={26} rx={6} fill={accent} />
            </g>
          ))}
        </>
      )}
      {type === "star" && (
        <>
          {nodes.map(([x, y]) => (
            <line key={`l-${x}-${y}`} x1={200} y1={160} x2={x} y2={y} stroke="currentColor" strokeWidth={2} opacity={0.35} />
          ))}
          <rect x={172} y={138} width={56} height={44} rx={10} fill={brand} />
          {nodes.map(([x, y]) => (
            <rect key={`n-${x}-${y}`} x={x - 18} y={y - 14} width={36} height={26} rx={6} fill={accent} />
          ))}
        </>
      )}
      {type === "ring" && (
        <>
          <polygon
            points={nodes.map((n) => n.join(",")).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            opacity={0.35}
          />
          {nodes.map(([x, y]) => (
            <rect key={`n-${x}-${y}`} x={x - 18} y={y - 14} width={36} height={26} rx={6} fill={brand} />
          ))}
        </>
      )}
      {type === "mesh" && (
        <>
          {nodes.map((a, i) =>
            nodes.map((b, j) =>
              j > i ? (
                <line
                  key={`${i}-${j}`}
                  x1={a[0]}
                  y1={a[1]}
                  x2={b[0]}
                  y2={b[1]}
                  stroke="currentColor"
                  strokeWidth={1.5}
                  opacity={0.25}
                />
              ) : null,
            ),
          )}
          {nodes.map(([x, y]) => (
            <rect key={`n-${x}-${y}`} x={x - 18} y={y - 14} width={36} height={26} rx={6} fill={accent} />
          ))}
        </>
      )}
    </svg>
  );
}

export function DeviceCompareDiagram() {
  const items = [
    { name: "Hub", desc: "Signalni barcha portlarga qayta uzatadi (broadcast)", layer: "Fizik qatlam" },
    { name: "Switch", desc: "MAC-manzil jadvali asosida faqat kerakli portga yuboradi", layer: "Kanal qatlami" },
    { name: "Router / MikroTik", desc: "Tarmoqlar orasida IP asosida yo'l tanlaydi", layer: "Tarmoq qatlami" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.name} className="rounded-xl border border-ink-200 bg-ink-50 p-4 dark:border-ink-800 dark:bg-ink-900/50">
          <p className="font-display text-sm font-bold text-brand-600 dark:text-brand-400">{it.name}</p>
          <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{it.desc}</p>
          <span className="mt-3 inline-block rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
            {it.layer}
          </span>
        </div>
      ))}
    </div>
  );
}

export function LayerStackDiagram() {
  const layers = [
    { name: "Almashinuv boshqaruvi", desc: "Protokollar, sessiya va navbat boshqaruvi" },
    { name: "Axborot tuzilmasi", desc: "Ma'lumot formati, paket va freym tarkibi" },
    { name: "Mantiqiy tuzilma", desc: "IP-manzillash, marshrutlash sxemasi" },
    { name: "Fizik tuzilma", desc: "Kabel, konnektor, signal uzatish muhiti" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {layers.map((l, i) => (
        <div
          key={l.name}
          className="flex items-center gap-4 rounded-xl border border-ink-200 p-3 dark:border-ink-800"
          style={{
            background: `linear-gradient(90deg, rgba(99,102,241,${0.18 - i * 0.03}), transparent)`,
          }}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
            {layers.length - i}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{l.name}</p>
            <p className="text-xs text-ink-500 dark:text-ink-400">{l.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CableTypesDiagram() {
  const cables = [
    { name: "Vitoy juftlik (UTP/FTP)", speed: "10–10 000 Mbit/s", use: "LAN, ofis tarmoqlari", color: "#6366f1" },
    { name: "Optik tolali kabel", speed: "1–100+ Gbit/s", use: "Magistral kanallar", color: "#06b6d4" },
    { name: "Koaksial kabel", speed: "10–100 Mbit/s", use: "Eski tarmoqlar, TV", color: "#ec4899" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cables.map((c) => (
        <div key={c.name} className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
          <svg viewBox="0 0 120 40" className="mb-2 h-8 w-full">
            <line x1={10} y1={20} x2={110} y2={20} stroke={c.color} strokeWidth={6} strokeLinecap="round" />
            <circle cx={10} cy={20} r={7} fill={c.color} />
            <circle cx={110} cy={20} r={7} fill={c.color} />
          </svg>
          <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{c.name}</p>
          <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">Tezlik: {c.speed}</p>
          <p className="text-xs text-ink-500 dark:text-ink-400">Ishlatilishi: {c.use}</p>
        </div>
      ))}
    </div>
  );
}

export function IpAddressDiagram() {
  const octets = ["192", "168", "1", "25"];
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1.5 sm:gap-2">
        {octets.map((o, i) => (
          <div key={i} className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex h-14 w-16 flex-col items-center justify-center rounded-xl border-2 border-brand-400 bg-brand-50 dark:bg-brand-500/10 sm:w-20">
              <span className="font-mono text-lg font-bold text-brand-700 dark:text-brand-300">{o}</span>
              <span className="text-[9px] text-ink-400">8 bit</span>
            </div>
            {i < 3 && <span className="text-lg font-bold text-ink-400">.</span>}
          </div>
        ))}
      </div>
      <div className="flex w-full max-w-md justify-between text-xs text-ink-500 dark:text-ink-400">
        <span className="rounded-lg bg-ink-100 px-2 py-1 dark:bg-ink-800">Tarmoq qismi</span>
        <span className="rounded-lg bg-ink-100 px-2 py-1 dark:bg-ink-800">Xost qismi</span>
      </div>
    </div>
  );
}

export function TcpIpStackDiagram() {
  const layers = [
    { name: "Ilova qatlami", proto: "HTTP, FTP, DNS, SMTP" },
    { name: "Transport qatlami", proto: "TCP, UDP" },
    { name: "Internet (tarmoq) qatlami", proto: "IP, ICMP" },
    { name: "Kanal (link) qatlami", proto: "Ethernet, Wi-Fi" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {layers.map((l) => (
        <div
          key={l.name}
          className="flex items-center justify-between rounded-xl border border-ink-200 bg-gradient-to-r from-brand-50 to-transparent px-4 py-3 dark:border-ink-800 dark:from-brand-500/10"
        >
          <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">{l.name}</span>
          <span className="font-mono text-xs text-brand-600 dark:text-brand-400">{l.proto}</span>
        </div>
      ))}
    </div>
  );
}

export function TimelineDiagram({
  items,
}: {
  items: { year: string; text: string }[];
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[7px] top-1 bottom-1 w-0.5 bg-gradient-to-b from-brand-500 to-accent-500" />
      <div className="flex flex-col gap-5">
        {items.map((it) => (
          <div key={it.year} className="relative">
            <span className="absolute -left-6 top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-500 ring-4 ring-white dark:ring-ink-950" />
            <p className="font-display text-sm font-bold text-brand-600 dark:text-brand-400">{it.year}</p>
            <p className="text-sm text-ink-600 dark:text-ink-300">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DnsLookupDiagram() {
  const steps = [
    "Foydalanuvchi",
    "DNS Resolver",
    "Root server",
    "TLD server (.uz)",
    "Authoritative server",
  ];
  return (
    <svg viewBox="0 0 700 140" className="mx-auto h-auto w-full">
      {steps.map((s, i) => {
        const x = 30 + i * 165;
        return (
          <g key={s}>
            <rect x={x} y={45} width={130} height={50} rx={10} fill={i === 0 ? brand : "#94a3b8"} opacity={i === 0 ? 1 : 0.85} />
            <text x={x + 65} y={75} textAnchor="middle" fontSize="11" fill="white" fontWeight={600}>
              {s}
            </text>
            {i < steps.length - 1 && (
              <path
                d={`M ${x + 130} 70 L ${x + 160} 70`}
                stroke={accent}
                strokeWidth={2}
                markerEnd="url(#arrow)"
              />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={accent} />
        </marker>
      </defs>
    </svg>
  );
}

export function FirewallDiagram() {
  return (
    <svg viewBox="0 0 640 220" className="mx-auto h-auto w-full max-w-2xl">
      <rect x={20} y={80} width={140} height={60} rx={12} fill="#94a3b8" />
      <text x={90} y={115} textAnchor="middle" fontSize="13" fill="white" fontWeight={600}>
        Internet
      </text>

      <rect x={480} y={80} width={140} height={60} rx={12} fill={brand} />
      <text x={550} y={115} textAnchor="middle" fontSize="13" fill="white" fontWeight={600}>
        Ichki tarmoq
      </text>

      <rect x={280} y={40} width={80} height={140} rx={10} fill="#ef4444" />
      <text x={320} y={30} textAnchor="middle" fontSize="12" fontWeight={700} fill="#ef4444">
        Firewall
      </text>
      {["✓", "✕", "✓"].map((s, i) => (
        <text key={i} x={320} y={75 + i * 35} textAnchor="middle" fontSize="16" fill="white">
          {s}
        </text>
      ))}

      <line x1={160} y1={110} x2={280} y2={110} stroke="#22c55e" strokeWidth={3} />
      <line x1={360} y1={110} x2={480} y2={110} stroke="#22c55e" strokeWidth={3} />
      <text x={220} y={100} textAnchor="middle" fontSize="10" fill="currentColor" opacity={0.6}>
        so'rovlar
      </text>
    </svg>
  );
}

export function WifiBandsDiagram() {
  const bands = [
    { name: "2.4 GHz", range: 90, speed: 40, note: "Uzoq masofa, past tezlik, kanallar tirband" },
    { name: "5 GHz", range: 55, speed: 85, note: "Yuqori tezlik, qisqa masofa, kam xalaqit" },
    { name: "Wi-Fi 6 (6 GHz)", range: 60, speed: 100, note: "Ko'p qurilma, eng yuqori samaradorlik" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {bands.map((b) => (
        <div key={b.name}>
          <div className="mb-1 flex items-center justify-between text-xs font-semibold text-ink-700 dark:text-ink-200">
            <span>{b.name}</span>
            <span className="text-ink-400">{b.note}</span>
          </div>
          <div className="flex gap-1.5">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${b.range}%` }} />
            </div>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
              <div className="h-full rounded-full bg-accent-500" style={{ width: `${b.speed}%` }} />
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-4 text-[11px] text-ink-500">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-500" /> Qamrov masofasi</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-accent-500" /> Tezlik</span>
      </div>
    </div>
  );
}

export function PacketSwitchingDiagram() {
  return (
    <svg viewBox="0 0 640 220" className="mx-auto h-auto w-full max-w-2xl">
      <rect x={20} y={85} width={110} height={50} rx={10} fill={brand} />
      <text x={75} y={115} textAnchor="middle" fontSize="12" fill="white" fontWeight={600}>Yuboruvchi</text>

      <rect x={510} y={85} width={110} height={50} rx={10} fill={brand} />
      <text x={565} y={115} textAnchor="middle" fontSize="12" fill="white" fontWeight={600}>Qabul qiluvchi</text>

      {[0, 1, 2].map((i) => {
        const y = 40 + i * 70;
        return (
          <g key={i}>
            <path d={`M130 110 Q 320 ${y + 15} 510 110`} stroke="#94a3b8" strokeWidth={1.5} fill="none" opacity={0.5} />
            <rect x={290} y={y} width={40} height={26} rx={6} fill={accent} />
            <text x={310} y={y + 18} textAnchor="middle" fontSize="10" fill="white" fontWeight={700}>
              P{i + 1}
            </text>
          </g>
        );
      })}
      <text x={320} y={20} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.6}>
        Paketlar turli yo'llar orqali boradi va manzilda qayta yig'iladi
      </text>
    </svg>
  );
}
