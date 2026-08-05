import { Link } from "react-router-dom";
import { Users, BookOpen, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { modules } from "../../data/modules";
import { useUsers } from "../../hooks/useUsers";
import { useProgress } from "../../hooks/useProgress";

export default function AdminDashboard() {
  const { users } = useUsers();
  const { percent } = useProgress();

  const totalMinutes = modules.reduce((sum, m) => sum + parseInt(m.duration, 10), 0);
  const recentUsers = [...users]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5);

  const stats = [
    { label: "Ro'yxatdan o'tgan foydalanuvchilar", value: users.length, icon: Users },
    { label: "Jami mavzular", value: modules.length, icon: BookOpen },
    { label: "Auditoriya soati (jami)", value: `${totalMinutes} daq`, icon: Clock },
    { label: "Joriy brauzer progressi", value: `${percent}%`, icon: GraduationCap },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
        Boshqaruv paneli
      </h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
        TarmoqLMS platformasining umumiy holati.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900/40"
          >
            <div className="mb-2 inline-flex rounded-xl bg-brand-50 p-2.5 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
              <s.icon size={18} />
            </div>
            <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">
              {s.value}
            </p>
            <p className="text-xs text-ink-400">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900/40">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-ink-900 dark:text-white">
            So'nggi ro'yxatdan o'tganlar
          </h2>
          <Link
            to="/admin/foydalanuvchilar"
            className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
          >
            Barchasi <ArrowRight size={12} />
          </Link>
        </div>

        {recentUsers.length === 0 ? (
          <p className="text-sm text-ink-400">Hali hech kim ro'yxatdan o'tmagan.</p>
        ) : (
          <div className="flex flex-col divide-y divide-ink-100 dark:divide-ink-800">
            {recentUsers.map((u) => (
              <div key={u.email} className="flex items-center justify-between py-2.5">
                <div>
                  <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{u.name}</p>
                  <p className="text-xs text-ink-400">{u.email}</p>
                </div>
                <span className="text-xs text-ink-400">
                  {new Date(u.createdAt).toLocaleDateString("uz-UZ")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 text-xs text-ink-400">
        Eslatma: bu statistika joriy brauzerning localStorage ma'lumotlariga
        asoslangan (hali backend yo'q). Backend ulanganda barcha
        foydalanuvchilar va progress ma'lumotlari markazlashgan holda
        saqlanadi.
      </p>
    </div>
  );
}
