import { useCallback, useState } from "react";
import { getBotReply } from "../lib/chatService";

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

const GREETING: ChatMessage = {
  id: "greeting",
  role: "bot",
  text: "Salom! TarmoqLMS yordamchisiman. Kurs, mavzular yoki tizimga kirish bo'yicha savolingiz bo'lsa so'rang.",
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [sending, setSending] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setSending(true);

    try {
      const reply = await getBotReply(trimmed);
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "bot", text: reply }]);
    } finally {
      setSending(false);
    }
  }, []);

  return { messages, sending, sendMessage };
}
