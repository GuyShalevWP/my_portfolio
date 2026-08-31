import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import type {
  Board,
  BotMove,
  BotMoveReason,
  GameStatus,
  UseTicTacToeResult,
} from "../TicTacToe.types";

const WINNING_LINES: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const EMPTY_BOARD: Board = Array(9).fill(null);

const HUMAN: NonNullable<Board[number]> = "X";
const BOT: NonNullable<Board[number]> = "O";

/** Design ceiling is 600ms so the "thinking" state never feels
 * fake-slow. 500ms sits inside that with room to spare. */
const BOT_MOVE_DELAY_MS = 500;

const RATIONALE: Record<BotMoveReason, string> = {
  win: "Taking the win — it had three in a row.",
  block: "Blocking. You had two in a row.",
  open: "No forcing move yet. Taking the open square.",
};

const findWinningLine = (board: Board, player: Board[number]): number[] | null =>
  WINNING_LINES.find(
    ([a, b, c]) => board[a] === player && board[b] === player && board[c] === player,
  ) ?? null;

const getEmptyCells = (board: Board): number[] =>
  board.reduce<number[]>((cells, cell, index) => {
    if (cell === null) cells.push(index);
    return cells;
  }, []);

/**
 * Picks the bot's next move: take a win if one is available, otherwise
 * block the human's winning move, otherwise pick a random open cell.
 * No fork detection — the returned `reason` only ever describes one of
 * those three branches, so the UI never claims more than the bot does.
 */
const findBotMove = (board: Board): BotMove => {
  const emptyCells = getEmptyCells(board);

  for (const index of emptyCells) {
    const nextBoard = [...board];
    nextBoard[index] = BOT;
    if (findWinningLine(nextBoard, BOT)) return { index, reason: "win" };
  }

  for (const index of emptyCells) {
    const nextBoard = [...board];
    nextBoard[index] = HUMAN;
    if (findWinningLine(nextBoard, HUMAN)) return { index, reason: "block" };
  }

  const index = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  return { index, reason: "open" };
};

export const useTicTacToe = (): UseTicTacToeResult => {
  const [board, setBoard] = useState<Board>(EMPTY_BOARD);
  const [status, setStatus] = useState<GameStatus>("player-turn");
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [rationale, setRationale] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (status !== "bot-turn") return;

    // Under reduced motion the "thinking" state resolves immediately —
    // no delay theatre, but still a real (queued) turn.
    const delay = reducedMotion ? 0 : BOT_MOVE_DELAY_MS;

    const timeoutId = setTimeout(() => {
      const { index, reason } = findBotMove(board);
      const nextBoard = [...board];
      nextBoard[index] = BOT;

      const line = findWinningLine(nextBoard, BOT);

      setBoard(nextBoard);
      setRationale(RATIONALE[reason]);

      if (line) {
        setWinningLine(line);
        setStatus("bot-win");
      } else if (getEmptyCells(nextBoard).length === 0) {
        setStatus("draw");
      } else {
        setStatus("player-turn");
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [status, board, reducedMotion]);

  const handleCellClick = (index: number): void => {
    if (status !== "player-turn" || board[index] !== null) return;

    const nextBoard = [...board];
    nextBoard[index] = HUMAN;

    const line = findWinningLine(nextBoard, HUMAN);
    if (line) {
      setWinningLine(line);
      setStatus("player-win");
    } else if (getEmptyCells(nextBoard).length === 0) {
      setStatus("draw");
    } else {
      setStatus("bot-turn");
    }

    setBoard(nextBoard);
  };

  const reset = (): void => {
    setBoard(EMPTY_BOARD);
    setStatus("player-turn");
    setWinningLine(null);
    setRationale(null);
  };

  return { board, status, winningLine, rationale, handleCellClick, reset };
};
