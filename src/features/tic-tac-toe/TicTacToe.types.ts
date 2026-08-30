export type CellValue = "X" | "O" | null;

export type Board = CellValue[];

export type GameStatus =
  | "player-turn"
  | "bot-turn"
  | "player-win"
  | "bot-win"
  | "draw";

export interface UseTicTacToeResult {
  board: Board;
  status: GameStatus;
  winningLine: number[] | null;
  handleCellClick: (index: number) => void;
  reset: () => void;
}
