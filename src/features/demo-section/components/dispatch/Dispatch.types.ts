import type { DispatchOutcome, DispatchResultCopy, SpecialistId } from "@app-types/Dispatch";

export interface UseDispatchResult {
  assigned: SpecialistId[];
  /** "OPEN" before any pick, "PLANNING" once picking has started, then
   * whatever the matched rule's `ticketStatus` is once run. */
  ticketStatus: string;
  outcome: DispatchOutcome | null;
  result: DispatchResultCopy | null;
  toggleAssign: (id: SpecialistId) => void;
  run: () => void;
  reassign: () => void;
}
