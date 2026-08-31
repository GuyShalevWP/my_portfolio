import type { ReactNode } from "react";

export interface MonoLabelProps {
  variant?: "muted" | "signal";
  id?: string;
  className?: string;
  children: ReactNode;
}
