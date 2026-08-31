import type { ReactNode } from "react";
import type { DemoPanelContent } from "../../../../types/Demo";

export interface DemoPanelProps {
  content: DemoPanelContent;
  /** The playable game — TicTacToe or Dispatch. */
  children: ReactNode;
}
