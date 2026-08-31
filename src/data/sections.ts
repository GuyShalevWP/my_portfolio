import type { SectionMeta } from "../types/Section";

/** The six sections, in page order — drives the dispatch rail's nav,
 * the mobile bar/sheet, and the scroll-spy that decides which one is
 * "active". */
export const sections: SectionMeta[] = [
  { id: "claim", navLabel: "Claim" },
  { id: "capability", navLabel: "Capability" },
  { id: "spec", navLabel: "Spec" },
  { id: "demo", navLabel: "Demo" },
  { id: "receipts", navLabel: "Receipts" },
  { id: "contact", navLabel: "Contact" },
];
