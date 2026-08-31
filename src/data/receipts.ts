import type { ReceiptsSectionContent } from "../types/Receipt";

export const receipts: ReceiptsSectionContent = {
  heading: "Already out there",
  kicker: "In production",
  rows: [
    {
      key: "Live site",
      label: "drkerenaharoni.co.il",
      href: "https://drkerenaharoni.co.il/",
      description: "A dental clinic, taken from the first conversation to a production deploy.",
    },
    {
      // Content correction: the repo is private and the npm name
      // "accessibility-tool" belongs to an unrelated author — reframed as
      // a reusable a11y toolkit, not a published package, and no link.
      key: "A11y toolkit",
      label: "accessibility toolkit",
      description: "A reusable accessibility toolkit, built once and reused across client projects.",
    },
    {
      // Content correction: this row links to the site itself, not GitHub.
      key: "This site",
      label: "guyshalevwd.com",
      href: "https://guyshalevwd.com/",
      description: "Designed and built by the multi-agent team described above.",
    },
  ],
};
