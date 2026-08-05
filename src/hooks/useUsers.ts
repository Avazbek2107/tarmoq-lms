import { useCallback, useEffect, useState } from "react";
import { readUsers, deleteUser } from "./useAuth";

export function useUsers() {
  const [users, setUsers] = useState(() => readUsers());

  useEffect(() => {
    const refresh = () => setUsers(readUsers());
    window.addEventListener("tarmoq-lms:users-changed", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("tarmoq-lms:users-changed", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const removeUser = useCallback((email: string) => {
    deleteUser(email);
  }, []);

  return { users, removeUser };
}
