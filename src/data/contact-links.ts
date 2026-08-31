import type { ContactSectionContent } from "../types/ContactRow";

// Content corrections (decided 2026-08-31, see the project file's
// "Content accuracy" section): the comp's email (guysh1234@gmail.com,
// pulled from the resume) and GitHub handle (github.com/GuyShalevW, a
// 404) are both wrong. This is the one place they're spelled out.
const EMAIL = "guyshalevwp@gmail.com";
const GITHUB_HANDLE = "github.com/GuyShalevWP";
const LINKEDIN_HANDLE = "linkedin.com/in/guy-shalev-93448b228";

export const contact: ContactSectionContent = {
  heading: "Get it",
  kicker: "Available",
  intro: "Open to full-time roles and client work. I answer my own email, usually the same day.",
  rows: [
    { key: "Email", label: EMAIL, href: `mailto:${EMAIL}` },
    { key: "GitHub", label: GITHUB_HANDLE, href: `https://${GITHUB_HANDLE}` },
    { key: "LinkedIn", label: LINKEDIN_HANDLE, href: `https://${LINKEDIN_HANDLE}` },
  ],
  cta: { label: "Email Guy", href: `mailto:${EMAIL}` },
};
