export type ConsoleStatus = "running" | "building" | "queued";

export interface ConsoleRow {
  name: string;
  description: string;
  status: ConsoleStatus;
  /** The design comp drops this row on the 390 artboard (security folds away). */
  hideOnMobile?: boolean;
}

export interface HeroContent {
  /** Mono-label kicker, e.g. "NOW SHIPPING · V1 · GUY SHALEV". */
  tag: string;
  /** Light-weight (200) intro line, e.g. "Most developers use AI." */
  intro: string;
  /** Bold (800) headline, first line. */
  headlineLead: string;
  /** Bold (800) headline, second line, before the accent. */
  headlineTail: string;
  /** Bold (800) headline accent, rendered in the signal color. */
  headlineAccent: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  console: {
    label: string;
    status: string;
    rows: ConsoleRow[];
    footer: string;
  };
}
