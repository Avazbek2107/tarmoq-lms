import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function RequireAdmin({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/kirish" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return <>{children}</>;
}
