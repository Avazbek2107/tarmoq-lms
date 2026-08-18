export default function Footer() {
  return (
    <footer className="bg-ink-950 py-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-300">
        © {new Date().getFullYear()} Tarmoq<span className="text-brand-500">LMS</span> —{" "}
        <span className="text-ink-400">Guliston davlat universiteti</span>
      </p>
    </footer>
  );
}
