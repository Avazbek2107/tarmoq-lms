import { useCallback, useState } from "react";

export type Role = "student" | "admin";

interface StoredUser {
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface AuthUser {
  name: string;
  email: string;
  role: Role;
}

const USERS_KEY = "tarmoq-lms:users";
const SESSION_KEY = "tarmoq-lms:session";

export const ADMIN_EMAIL = "admin@tarmoqlms.uz";
const ADMIN_PASSWORD = "Admin123";
const ADMIN_NAME = "Administrator";

export function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  window.dispatchEvent(new Event("tarmoq-lms:users-changed"));
}

export function deleteUser(email: string) {
  writeUsers(readUsers().filter((u) => u.email !== email));
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
      if (normalizedEmail === ADMIN_EMAIL) {
        return { ok: false, error: "Bu email band qilingan." };
      }
      const users = readUsers();
      if (users.some((u) => u.email === normalizedEmail)) {
        return { ok: false, error: "Bu email bilan hisob allaqachon mavjud." };
      }
      users.push({
        name: name.trim(),
        email: normalizedEmail,
        password,
        createdAt: new Date().toISOString(),
      });
      writeUsers(users);
      const session: AuthUser = { name: name.trim(), email: normalizedEmail, role: "student" };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { ok: true };
    },
    [],
  );

  const signIn = useCallback(
    (email: string, password: string): { ok: true } | { ok: false; error: string } => {
      const normalizedEmail = email.trim().toLowerCase();

      if (normalizedEmail === ADMIN_EMAIL) {
        if (password !== ADMIN_PASSWORD) {
          return { ok: false, error: "Email yoki parol xato." };
        }
        const session: AuthUser = { name: ADMIN_NAME, email: ADMIN_EMAIL, role: "admin" };
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        setUser(session);
        return { ok: true };
      }

      const users = readUsers();
      const found = users.find((u) => u.email === normalizedEmail && u.password === password);
      if (!found) {
        return { ok: false, error: "Email yoki parol xato, yoki hisob mavjud emas." };
      }
      const session: AuthUser = { name: found.name, email: found.email, role: "student" };
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
