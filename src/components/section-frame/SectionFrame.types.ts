import type { ReactNode } from "react";

export interface SectionFrameProps {
  id: string;
  ariaLabelledBy: string;
  /** Vertical padding, top and bottom. Defaults to the shared `s10`
   * rhythm (Capability, Demo); Receipts and Contact override it to
   * match the comp's non-flat vertical rhythm. */
  paddingTop?: string;
  paddingBottom?: string;
  /** Same idea, below the mobile breakpoint. Defaults to `s8`. */
  mobilePaddingTop?: string;
  mobilePaddingBottom?: string;
  /** Suppresses the frame's top hairline — used only by the section
   * directly after the full-bleed loadout band, whose own bottom
   * hairline already does that job (avoids a doubled border). */
  noTopBorder?: boolean;
  children: ReactNode;
}
