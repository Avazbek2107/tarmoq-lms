import { useState } from "react";
import { Trash2, Search } from "lucide-react";
import { useUsers } from "../../hooks/useUsers";

export default function AdminUsers() {
  const { users, removeUser } = useUsers();
  const [query, setQuery] = useState("");
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
        Foydalanuvchilar
      </h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
        Platformada ro'yxatdan o'tgan barcha talabalar ro'yxati ({users.length} ta).
      </p>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 dark:border-ink-800 dark:bg-ink-900/40">
        <Search size={16} className="text-ink-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ism yoki email bo'yicha qidirish..."
          className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400 dark:text-white"
        />
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-200 dark:border-ink-800">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="bg-ink-50 dark:bg-ink-900">
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Ism</th>
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Email</th>
              <th className="px-4 py-3 font-semibold text-ink-700 dark:text-ink-200">Ro'yxatdan o'tgan sana</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-ink-400">
                  Hech kim topilmadi.
                </td>
              </tr>
            ) : (
              filtered.map((u) => (
                <tr key={u.email} className="border-t border-ink-100 dark:border-ink-800">
                  <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">{u.name}</td>
                  <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{u.email}</td>
                  <td className="px-4 py-3 text-ink-500 dark:text-ink-400">
                    {new Date(u.createdAt).toLocaleDateString("uz-UZ")}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {pendingDelete === u.email ? (
                      <span className="inline-flex items-center gap-2">
                        <button
                          onClick={() => {
                            removeUser(u.email);
                            setPendingDelete(null);
                          }}
                          className="rounded-lg bg-red-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-red-700"
                        >
                          Tasdiqlash
                        </button>
                        <button
                          onClick={() => setPendingDelete(null)}
                          className="rounded-lg px-2.5 py-1 text-xs font-semibold text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800"
                        >
                          Bekor qilish
                        </button>
                      </span>
                    ) : (
                      <button
                        onClick={() => setPendingDelete(u.email)}
                        className="rounded-lg p-1.5 text-ink-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
                        aria-label="O'chirish"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
