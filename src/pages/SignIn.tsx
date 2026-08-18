import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email va parolni kiriting.");
      return;
    }

    const result = signIn(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate("/");
  }

  return (
    <AuthLayout
      title="Xush kelibsiz"
      subtitle="Hisobingizga kirib, o'qishni davom ettiring."
      footer={
        <>
          Hisobingiz yo'qmi?{" "}
          <Link to="/royxatdan-otish" className="font-semibold text-brand-400 hover:text-brand-300">
            Ro'yxatdan o'ting
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="siz@misol.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-300">
            Parol
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parolingiz"
              className={`${inputClass} pr-10`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {error}
          </div>
        )}

        <button
          type="submit"
          className="mt-1 rounded-lg bg-brand-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ink-950 shadow-glow transition-colors hover:bg-brand-400"
        >
          Kirish
        </button>
      </form>
    </AuthLayout>
  );
}
