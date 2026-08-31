/** One of the four specialists the visitor can assign to the ticket. */
export type SpecialistId = "backend" | "frontend" | "qa" | "security";

/** A specialist chip — display order is fixed; the pick *order* (the
 * ordinal shown on the chip) is tracked separately by the game. */
export interface Specialist {
  id: SpecialistId;
  label: string;
}

/** The single ticket the demo plays against. */
export interface DispatchTicket {
  /** e.g. "TICKET-041". */
  id: string;
  body: string;
}

export type DispatchOutcome = "win" | "lose" | "draw";

export interface DispatchResultCopy {
  title: string;
  body: string;
}

/**
 * One row of the ordering rule table. Rules are evaluated top to bottom
 * against the ordered list of assigned specialists; the first whose
 * `matches` returns true decides the outcome. Pure data + pure
 * predicates — no engine, no physics, no AI call.
 */
export interface DispatchRule {
  id: string;
  outcome: DispatchOutcome;
  /** Shown in the ticket's status line once this rule has matched, e.g. "MERGED". */
  ticketStatus: string;
  result: DispatchResultCopy;
  matches: (order: SpecialistId[]) => boolean;
}
