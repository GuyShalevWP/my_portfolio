import { useEffect, useState } from "react";
import {
  Board,
  CellValue,
  GameStatus,
  UseTicTacToeResult,
} from "@features/tic-tac-toe/TicTacToe.types";

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

const HUMAN: CellValue = "X";
const BOT: CellValue = "O";
const BOT_MOVE_DELAY_MS = 500;

const findWinningLine = (board: Board, player: CellValue): number[] | null =>
  WINNING_LINES.find(
    ([a, b, c]) =>
      board[a] === player && board[b] === player && board[c] === player,
  ) ?? null;

const getEmptyCells = (board: Board): number[] =>
  board.reduce<number[]>((cells, cell, index) => {
    if (cell === null) cells.push(index);
    return cells;
  }, []);

/**
 * Picks the bot's next move: take a win if one is available, otherwise
 * block the human's winning move, otherwise pick a random open cell.
 */
const findBotMove = (board: Board): number => {
  const emptyCells = getEmptyCells(board);

  for (const index of emptyCells) {
    const nextBoard = [...board];
    nextBoard[index] = BOT;
    if (findWinningLine(nextBoard, BOT)) return index;
  }

  for (const index of emptyCells) {
    const nextBoard = [...board];
    nextBoard[index] = HUMAN;
    if (findWinningLine(nextBoard, HUMAN)) return index;
  }

  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

export const useTicTacToe = (): UseTicTacToeResult => {
  const [board, setBoard] = useState<Board>(EMPTY_BOARD);
  const [status, setStatus] = useState<GameStatus>("player-turn");
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  useEffect(() => {
    if (status !== "bot-turn") return;

    const timeoutId = setTimeout(() => {
      setBoard((prevBoard) => {
        const botMove = findBotMove(prevBoard);
        const nextBoard = [...prevBoard];
        nextBoard[botMove] = BOT;

        const line = findWinningLine(nextBoard, BOT);
        if (line) {
          setWinningLine(line);
          setStatus("bot-win");
        } else if (getEmptyCells(nextBoard).length === 0) {
          setStatus("draw");
        } else {
          setStatus("player-turn");
        }

        return nextBoard;
      });
    }, BOT_MOVE_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [status]);

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
  };

  return { board, status, winningLine, handleCellClick, reset };
};
