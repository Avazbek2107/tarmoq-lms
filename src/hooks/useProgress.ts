import { useCallback, useEffect, useState } from "react";
import { modules } from "../data/modules";

const STORAGE_KEY = "tarmoq-lms:completed";

function read(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

function write(ids: number[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function useProgress() {
  const [completed, setCompleted] = useState<number[]>(() => read());

  useEffect(() => {
    const onStorage = () => setCompleted(read());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isCompleted = useCallback(
    (id: number) => completed.includes(id),
    [completed],
  );

  const toggleCompleted = useCallback((id: number) => {
    setCompleted((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      write(next);
      return next;
    });
  }, []);

  const markCompleted = useCallback((id: number) => {
    setCompleted((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      write(next);
      return next;
    });
  }, []);

  const total = modules.length;
  const percent = Math.round((completed.length / total) * 100);

  return { completed, isCompleted, toggleCompleted, markCompleted, total, percent };
}
