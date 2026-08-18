import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, Send, X, Bot, Sparkles } from "lucide-react";
import { useChat } from "../hooks/useChat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sending, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, open]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || sending) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-2xl dark:border-ink-800 dark:bg-ink-900">
          <div className="flex items-center justify-between gap-2 bg-ink-950 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                <Bot size={16} />
              </span>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  TarmoqLMS yordamchi
                </p>
                <p className="flex items-center gap-1 text-[10px] text-ink-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> onlayn (sinov rejimi)
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-ink-400 hover:bg-white/10 hover:text-white"
              aria-label="Yopish"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-brand-500 text-ink-950"
                      : "rounded-bl-sm bg-ink-100 text-ink-800 dark:bg-ink-800 dark:text-ink-100"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-ink-100 px-3.5 py-2.5 dark:bg-ink-800">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-ink-100 p-3 dark:border-ink-800">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Savolingizni yozing..."
              className="w-full rounded-xl border border-ink-200 bg-ink-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-ink-700 dark:bg-ink-800 dark:text-white dark:focus:ring-brand-500/20"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-950 transition-colors hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Yuborish"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-ink-950 shadow-glow transition-transform hover:scale-105"
        aria-label={open ? "Chatni yopish" : "Chatni ochish"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Sparkles size={9} />
          </span>
        )}
      </button>
    </div>
  );
}
