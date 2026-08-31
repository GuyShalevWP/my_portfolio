import { useReducedMotion } from "motion/react";
import VisuallyHidden from "@components/visually-hidden/VisuallyHidden";
import { dispatchSpecialists, dispatchTicket } from "@data/dispatch";
import { DURATION_BASE, EASE_OUT } from "@utils/motion-easing-utils";
import type { DispatchOutcome } from "@app-types/Dispatch";
import { useDispatch } from "./hooks/useDispatch";
import {
  AgentsList,
  Chip,
  ChipNum,
  GameArea,
  ReassignButton,
  Result,
  ResultBody,
  ResultTitle,
  RunButton,
  TicketBody,
  TicketCard,
  TicketStatus,
} from "./Dispatch.styles";

const variantForOutcome = (outcome: DispatchOutcome | null): "win" | "lose" | "warn" | undefined => {
  if (outcome === "win") return "win";
  if (outcome === "lose") return "lose";
  if (outcome === "draw") return "warn";
  return undefined;
};

const EMPTY_TITLE = "Ticket ready.";
const EMPTY_BODY =
  "Assign your first agent. Order matters — the same four in a different sequence give a different result.";

/** The demo section's Dispatch game: the visitor plays the lead agent,
 * clicking specialists onto TICKET-041 in the order they'd run them,
 * then "Run the plan" evaluates that order against the pure-data rule
 * table in `@data/dispatch`. Win = shipped, lose = blocked with the
 * specific mistake named, draw = shipped with warnings. */
const Dispatch = () => {
  const { assigned, ticketStatus, outcome, result, toggleAssign, run, reassign } = useDispatch();
  const reducedMotion = useReducedMotion();

  const variant = variantForOutcome(outcome);
  const canRun = assigned.length > 0 && outcome === null;

  const resultMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: DURATION_BASE, ease: EASE_OUT },
      };

  const announcement = outcome && result ? `${result.title} ${result.body}` : `Ticket ${ticketStatus.toLowerCase()}.`;

  return (
    <GameArea>
      <TicketCard>
        <TicketStatus>
          {dispatchTicket.id} · {ticketStatus}
        </TicketStatus>
        <TicketBody>{dispatchTicket.body}</TicketBody>
      </TicketCard>

      <AgentsList role="group" aria-label="Assign specialists">
        {dispatchSpecialists.map((specialist) => {
          const pickedIndex = assigned.indexOf(specialist.id);
          const picked = pickedIndex !== -1;
          const num = picked ? String(pickedIndex + 1).padStart(2, "0") : "—";

          return (
            <Chip
              key={specialist.id}
              type="button"
              $picked={picked}
              aria-pressed={picked}
              aria-label={
                picked
                  ? `${specialist.label}, assigned as step ${pickedIndex + 1}. Activate to unassign.`
                  : `${specialist.label}, not assigned. Activate to assign next.`
              }
              onClick={() => toggleAssign(specialist.id)}
            >
              <ChipNum $picked={picked} aria-hidden="true">
                {num}
              </ChipNum>
              {specialist.label}
            </Chip>
          );
        })}
      </AgentsList>

      <RunButton type="button" onClick={run} disabled={!canRun}>
        Run the plan
      </RunButton>

      <VisuallyHidden aria-live="polite">{announcement}</VisuallyHidden>

      {!outcome && assigned.length === 0 && (
        <Result>
          <ResultTitle>{EMPTY_TITLE}</ResultTitle>
          <ResultBody>{EMPTY_BODY}</ResultBody>
        </Result>
      )}

      {outcome && result && (
        <Result $variant={variant} {...resultMotion}>
          <ResultTitle $variant={variant}>{result.title}</ResultTitle>
          <ResultBody>{result.body}</ResultBody>
        </Result>
      )}

      {outcome && (
        <ReassignButton type="button" onClick={reassign}>
          Reassign
        </ReassignButton>
      )}
    </GameArea>
  );
};

export default Dispatch;
