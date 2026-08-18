import { useEffect, useState } from "react";

const brand = "var(--color-brand-500)";
const accent = "var(--color-accent-500)";
const inactive = "#94a3b8";

const nodes: [number, number][] = [
  [200, 40],
  [340, 130],
  [300, 280],
  [100, 280],
  [60, 130],
];

function lerp(a: [number, number], b: [number, number], t: number): [number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function useClock() {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const loop = (now: number) => {
      setElapsed((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return elapsed;
}

export function AnimatedStarTopology() {
  const elapsed = useClock();
  const center: [number, number] = [200, 160];

  return (
    <svg viewBox="0 0 400 320" className="mx-auto h-auto w-full max-w-sm">
      {nodes.map(([x, y], i) => (
        <line
          key={`l-${i}`}
          x1={center[0]}
          y1={center[1]}
          x2={x}
          y2={y}
          stroke={inactive}
          strokeWidth={2}
          opacity={0.35}
        />
      ))}

      {nodes.map(([x, y], i) => {
        const phase = elapsed * 1.4 + i * 1.3;
        const p = (Math.sin(phase) + 1) / 2;
        const [px, py] = lerp(center, [x, y], p);
        return <circle key={`p-${i}`} cx={px} cy={py} r={5} fill={brand} opacity={0.9} />;
      })}

      <rect x={172} y={138} width={56} height={44} rx={10} fill={brand} />
      <text x={200} y={165} textAnchor="middle" fontSize="9" fill="white" fontWeight={700}>
        Switch
      </text>
      {nodes.map(([x, y], i) => (
        <rect key={`n-${i}`} x={x - 18} y={y - 14} width={36} height={26} rx={6} fill={accent} />
      ))}
    </svg>
  );
}

export function AnimatedMeshTopology() {
  const elapsed = useClock();
  const cycle = 6;
  const t = (elapsed % cycle) / cycle;

  const A = nodes[0];
  const B = nodes[2];
  const C = nodes[4];

  const brokenStart = 0.35;
  const brokenEnd = 0.95;
  const rerouteStart = brokenStart + 0.05;
  const isBroken = t >= brokenStart && t < brokenEnd;

  let packet: [number, number] | null = null;
  if (t < brokenStart) {
    packet = lerp(A, B, t / brokenStart);
  } else if (t >= rerouteStart && t < brokenEnd) {
    const local = (t - rerouteStart) / (brokenEnd - rerouteStart);
    packet = local < 0.5 ? lerp(A, C, local / 0.5) : lerp(C, B, (local - 0.5) / 0.5);
  }

  return (
    <svg viewBox="0 0 400 320" className="mx-auto h-auto w-full max-w-sm">
      {nodes.map((a, i) =>
        nodes.map((b, j) =>
          j > i ? (
            <line
              key={`${i}-${j}`}
              x1={a[0]}
              y1={a[1]}
              x2={b[0]}
              y2={b[1]}
              stroke={inactive}
              strokeWidth={1.5}
              opacity={0.15}
            />
          ) : null,
        ),
      )}

      <line
        x1={A[0]}
        y1={A[1]}
        x2={B[0]}
        y2={B[1]}
        stroke={isBroken ? "#ef4444" : brand}
        strokeWidth={2.5}
        strokeDasharray={isBroken ? "6 6" : undefined}
      />

      {isBroken && (
        <>
          <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke={accent} strokeWidth={2.5} />
          <line x1={C[0]} y1={C[1]} x2={B[0]} y2={B[1]} stroke={accent} strokeWidth={2.5} />
        </>
      )}

      {nodes.map(([x, y], i) => {
        const isEndpoint = i === 0 || i === 2;
        const isDetour = i === 4 && isBroken;
        return (
          <rect
            key={i}
            x={x - 18}
            y={y - 14}
            width={36}
            height={26}
            rx={6}
            fill={isEndpoint ? brand : isDetour ? accent : inactive}
            opacity={isEndpoint || isDetour ? 1 : 0.4}
          />
        );
      })}

      {packet && <circle cx={packet[0]} cy={packet[1]} r={6} fill="#22c55e" />}

      {isBroken && (
        <text
          x={(A[0] + B[0]) / 2}
          y={(A[1] + B[1]) / 2 - 10}
          textAnchor="middle"
          fontSize="11"
          fill="#ef4444"
          fontWeight={700}
        >
          ULANISH UZILDI
        </text>
      )}
    </svg>
  );
}
