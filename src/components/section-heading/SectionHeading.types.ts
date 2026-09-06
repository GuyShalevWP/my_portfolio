export interface SectionHeadingProps {
  id: string;
  heading: string;
  /** Suppresses this row's bottom margin — used when a lead paragraph
   * follows immediately and carries the section's own spacing instead
   * (Demo, Contact), matching the comp's `sec-h` structure exactly. */
  noMarginBottom?: boolean;
}
