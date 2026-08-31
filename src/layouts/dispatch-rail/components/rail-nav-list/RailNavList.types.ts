import type { SectionMeta } from "../../../../types/Section";

export interface RailNavListProps {
  sections: SectionMeta[];
  activeId: string;
  /** e.g. close the mobile sheet after a jump. */
  onNavigate?: () => void;
  /** Desktop rail only — the ~900ms boot sequence's 60ms dot stagger. */
  staggerBoot?: boolean;
}
