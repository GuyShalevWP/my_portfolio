export interface ContactRow {
  key: string;
  label: string;
  href: string;
}

export interface ContactSectionContent {
  heading: string;
  intro: string;
  rows: ContactRow[];
  cta: { label: string; href: string };
}
