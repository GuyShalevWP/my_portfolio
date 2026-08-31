import { useState } from "react";
import { dispatchRules } from "@data/dispatch";
import type { DispatchOutcome, DispatchResultCopy, SpecialistId } from "@app-types/Dispatch";
import type { UseDispatchResult } from "../Dispatch.types";

const resolveOutcome = (order: SpecialistId[]): { outcome: DispatchOutcome; status: string; result: DispatchResultCopy } => {
  const rule = dispatchRules.find((candidate) => candidate.matches(order));
  // The rule table always ends in a catch-all, so this is unreachable,
  // but keep the return type honest rather than asserting.
  if (!rule) {
    return {
      outcome: "lose",
      status: "BLOCKED",
      result: { title: "Blocked.", body: "No rule matched that assignment. Reassign and run again." },
    };
  }
  return { outcome: rule.outcome, status: rule.ticketStatus, result: rule.result };
};

/** Dispatch's game state: an ordered list of assigned specialists, plus
 * the outcome once "Run the plan" evaluates it against the ordering
 * rule table in `@data/dispatch`. */
export const useDispatch = (): UseDispatchResult => {
  const [assigned, setAssigned] = useState<SpecialistId[]>([]);
  const [outcome, setOutcome] = useState<DispatchOutcome | null>(null);
  const [result, setResult] = useState<DispatchResultCopy | null>(null);
  const [ticketStatus, setTicketStatus] = useState("OPEN");

  const toggleAssign = (id: SpecialistId): void => {
    setAssigned((prev) => {
      const next = prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id];
      setTicketStatus(next.length === 0 ? "OPEN" : "PLANNING");
      return next;
    });
    setOutcome(null);
    setResult(null);
  };

  const run = (): void => {
    if (assigned.length === 0) return;
    const resolved = resolveOutcome(assigned);
    setOutcome(resolved.outcome);
    setResult(resolved.result);
    setTicketStatus(resolved.status);
  };

  const reassign = (): void => {
    setAssigned([]);
    setOutcome(null);
    setResult(null);
    setTicketStatus("OPEN");
  };

  return { assigned, ticketStatus, outcome, result, toggleAssign, run, reassign };
};
