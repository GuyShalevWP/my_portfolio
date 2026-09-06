import VisuallyHidden from "@components/visually-hidden/VisuallyHidden";
import { dispatchSpecialists, dispatchTicket } from "@data/dispatch";
import type { DispatchOutcome } from "@app-types/Dispatch";
import { GameButton } from "../game-button/GameButton.styles";
import GameResult from "../game-result/GameResult";
import { useDispatch } from "./hooks/useDispatch";
import {
  AgentsList,
  Chip,
  ChipNum,
  GameArea,
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

  const variant = variantForOutcome(outcome);
  const canRun = assigned.length > 0 && outcome === null;

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
              {picked && (
                <ChipNum aria-hidden="true">{String(pickedIndex + 1).padStart(2, "0")}</ChipNum>
              )}
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
        <GameResult animate={false} title={EMPTY_TITLE} body={EMPTY_BODY} />
      )}

      {outcome && result && <GameResult variant={variant} title={result.title} body={result.body} />}

      {outcome && (
        <GameButton type="button" onClick={reassign}>
          Reassign
        </GameButton>
      )}
    </GameArea>
  );
};

export default Dispatch;
