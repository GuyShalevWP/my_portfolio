export interface ReceiptRow {
  key: string;
  label: string;
  description: string;
  /** Omit for a row that must not be a link — see the accessibility toolkit row. */
  href?: string;
}

export interface ReceiptsSectionContent {
  heading: string;
  kicker: string;
  rows: ReceiptRow[];
}
