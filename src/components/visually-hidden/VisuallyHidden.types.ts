import type { ReactNode } from "react";

export interface VisuallyHiddenProps {
  children: ReactNode;
  /** Defaults to "polite" — set "off" for markup that isn't a live region. */
  "aria-live"?: "polite" | "assertive" | "off";
  className?: string;
}
