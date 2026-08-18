import { useEffect, useRef, useState } from "react";
import createGlobe, { type Marker, type Arc } from "cobe";

const markers: Marker[] = [
  { location: [40.4897, 68.7842], size: 0.1 }, // Guliston, O'zbekiston
  { location: [41.2995, 69.2401], size: 0.06 }, // Toshkent
  { location: [51.5074, -0.1278], size: 0.05 }, // London
  { location: [40.7128, -74.006], size: 0.05 }, // New York
  { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
  { location: [55.7558, 37.6173], size: 0.05 }, // Moskva
  { location: [1.3521, 103.8198], size: 0.04 }, // Singapur
  { location: [-33.8688, 151.2093], size: 0.04 }, // Sidney
];

const arcColor: [number, number, number] = [0.96, 0.64, 0.15];

const arcs: Arc[] = markers.slice(1).map((m) => ({
  from: markers[0].location,
  to: m.location,
  color: arcColor,
}));

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ x }, setPosition] = useState({ x: 0 });

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let frame = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.11, 0.15, 0.29],
      markerColor: [0.96, 0.64, 0.15],
      glowColor: [0.4, 0.35, 0.2],
      markers,
      arcs,
      arcColor,
      arcWidth: 1.2,
      arcHeight: 0.32,
    });

    const animate = () => {
      if (!pointerInteracting.current) {
        phi += 0.0045;
      }
      globe.update({ phi: phi + x, width: width * 2, height: width * 2 });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    requestAnimationFrame(() => {
      if (canvas) canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [x]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setPosition({ x: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setPosition({ x: delta / 100 });
          }
        }}
        className="h-full w-full cursor-grab opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
      />
    </div>
  );
}
