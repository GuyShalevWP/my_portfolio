import { useRef, useState, type KeyboardEvent } from "react";
import StatusDot from "@components/status-dot/StatusDot";
import VisuallyHidden from "@components/visually-hidden/VisuallyHidden";
import { GameButton } from "../game-button/GameButton.styles";
import GameResult from "../game-result/GameResult";
import { useTicTacToe } from "./hooks/useTicTacToe";
import { BoardGrid, Cell, GameArea, Rationale, Thinking } from "./TicTacToe.styles";
import type { GameStatus } from "./TicTacToe.types";

const EMPTY_TITLE = "You're X. Go first.";
const EMPTY_BODY =
  "Arrow keys move, Enter places. The agent will tell you why it played where it played.";

// Honesty note: the approved comp's win/lose copy originally credited the
// bot with seeing a "fork" coming. The salvaged bot (see useTicTacToe)
// only ever takes an available win, blocks the human's win, or plays a
// random open square — no fork detection. These two lines are rewritten
// to describe that real behaviour instead of a capability the code
// doesn't have.
const WIN_TITLE = "You win.";
const WIN_BODY =
  "It always takes the win when one's there and blocks when it has to. This time, neither move was enough.";

const LOSE_TITLE = "Agent wins.";
const LOSE_BODY =
  "It took the win the moment you left one open. Play again: it doesn't get any smarter, so this is winnable.";

const DRAW_TITLE = "Draw.";
const DRAW_BODY = "Neither of us made a mistake. That's the correct result and we both know it.";

const isGameOver = (status: GameStatus): boolean =>
  status === "player-win" || status === "bot-win" || status === "draw";

const announce = (status: GameStatus, rationale: string | null): string => {
  switch (status) {
    case "player-turn":
      return rationale ? `Your move. ${rationale}` : "Your move.";
    case "bot-turn":
      return "agent.tictactoe is thinking.";
    case "player-win":
      return `${WIN_TITLE} ${WIN_BODY}`;
    case "bot-win":
      return `${LOSE_TITLE} ${LOSE_BODY}`;
    case "draw":
      return `${DRAW_TITLE} ${DRAW_BODY}`;
  }
};

/** The demo section's tic-tac-toe board. Salvaged game logic from the
 * unmerged `feature/tic-tac-toe` branch (win/block/random bot, no fork
 * detection), reskinned to the approved comp: arrow-key + Enter play,
 * `aria-busy` while the agent "thinks" (capped 500ms, 0 under reduced
 * motion), and a one-line rationale derived from the branch the bot
 * actually took. */
const TicTacToe = () => {
  const { board, status, winningLine, rationale, handleCellClick, reset } = useTicTacToe();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const cellRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const gameStarted = board.some((cell) => cell !== null);
  const busy = status === "bot-turn";
  const interactive = status === "player-turn";

  const moveFocus = (nextIndex: number): void => {
    setFocusedIndex(nextIndex);
    cellRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number): void => {
    const row = Math.floor(index / 3);
    const col = index % 3;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        if (col < 2) moveFocus(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (col > 0) moveFocus(index - 1);
        break;
      case "ArrowDown":
        event.preventDefault();
        if (row < 2) moveFocus(index + 3);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (row > 0) moveFocus(index - 3);
        break;
      default:
        break;
    }
  };

  const handleRematch = (): void => {
    reset();
    setFocusedIndex(0);
    cellRefs.current[0]?.focus();
  };

  return (
    <GameArea>
      <BoardGrid role="group" aria-label="Tic-tac-toe board" aria-busy={busy}>
        {board.map((cell, index) => {
          const disabled = !interactive || cell !== null;
          const label = cell
            ? `${cell === "X" ? "You" : "Agent"} played ${cell}, cell ${index + 1}`
            : `Cell ${index + 1}, empty`;

          return (
            <Cell
              key={index}
              type="button"
              ref={(node) => {
                cellRefs.current[index] = node;
              }}
              $mark={cell}
              $winning={winningLine?.includes(index) ?? false}
              tabIndex={index === focusedIndex ? 0 : -1}
              aria-disabled={disabled}
              aria-label={label}
              onClick={() => {
                if (!disabled) handleCellClick(index);
              }}
              onFocus={() => setFocusedIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {cell}
            </Cell>
          );
        })}
      </BoardGrid>

      <VisuallyHidden aria-live="polite">{announce(status, rationale)}</VisuallyHidden>

      {!gameStarted && status === "player-turn" && (
        <GameResult animate={false} fullWidth title={EMPTY_TITLE} body={EMPTY_BODY} />
      )}

      {gameStarted && !isGameOver(status) && (
        <>
          {busy && (
            <Thinking>
              <StatusDot variant="live" />
              agent.tictactoe is thinking…
            </Thinking>
          )}
          {rationale && <Rationale>“{rationale}”</Rationale>}
        </>
      )}

      {status === "player-win" && (
        <GameResult variant="win" fullWidth title={WIN_TITLE} body={WIN_BODY} />
      )}

      {status === "bot-win" && (
        <GameResult variant="lose" fullWidth title={LOSE_TITLE} body={LOSE_BODY} />
      )}

      {status === "draw" && <GameResult fullWidth title={DRAW_TITLE} body={DRAW_BODY} />}

      {isGameOver(status) && (
        <GameButton type="button" onClick={handleRematch}>
          Play again
        </GameButton>
      )}
    </GameArea>
  );
};

export default TicTacToe;
