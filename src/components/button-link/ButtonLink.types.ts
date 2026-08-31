export interface ButtonLinkProps {
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: string;
  /** Set for external links so they open in a new tab safely. */
  external?: boolean;
}
