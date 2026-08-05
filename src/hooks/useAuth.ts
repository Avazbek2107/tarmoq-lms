import { useCallback, useState } from "react";

interface StoredUser {
  name: string;
  email: string;
  password: string;
}

export interface AuthUser {
  name: string;
  email: string;
}

const USERS_KEY = "tarmoq-lms:users";
const SESSION_KEY = "tarmoq-lms:session";

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function readSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => readSession());

  const signUp = useCallback(
    (name: string, email: string, password: string): { ok: true } | { ok: false; error: string } => {
      const normalizedEmail = email.trim().toLowerCase();
      const users = readUsers();
      if (users.some((u) => u.email === normalizedEmail)) {
        return { ok: false, error: "Bu email bilan hisob allaqachon mavjud." };
      }
      users.push({ name: name.trim(), email: normalizedEmail, password });
      writeUsers(users);
      const session: AuthUser = { name: name.trim(), email: normalizedEmail };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { ok: true };
    },
    [],
  );

  const signIn = useCallback(
    (email: string, password: string): { ok: true } | { ok: false; error: string } => {
      const normalizedEmail = email.trim().toLowerCase();
      const users = readUsers();
      const found = users.find((u) => u.email === normalizedEmail && u.password === password);
      if (!found) {
        return { ok: false, error: "Email yoki parol xato, yoki hisob mavjud emas." };
      }
      const session: AuthUser = { name: found.name, email: found.email };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { ok: true };
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return { user, signUp, signIn, signOut };
}
