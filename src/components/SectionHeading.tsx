export default function SectionHeading({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="relative mb-12 text-center">
      <span
        className={`mx-auto mb-3 block h-16 w-px ${dark ? "bg-white/10" : "bg-ink-900/10 dark:bg-white/10"}`}
      />
      <h2
        className={`inline-block border-2 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[2px] ${
          dark
            ? "border-white/10 text-white"
            : "border-ink-200 text-ink-900 dark:border-white/10 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-lg text-sm ${dark ? "text-ink-300" : "text-ink-500 dark:text-ink-400"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
