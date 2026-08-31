export type CellValue = "X" | "O" | null;

export type Board = CellValue[];

export type GameStatus =
  | "player-turn"
  | "bot-turn"
  | "player-win"
  | "bot-win"
  | "draw";

/** Which branch the bot's move picker took — drives the one-line
 * rationale shown under the board. No fork detection: the bot only
 * ever takes a win, blocks the human's win, or plays a random open
 * square, so the rationale never claims more than that. */
export type BotMoveReason = "win" | "block" | "open";

export interface BotMove {
  index: number;
  reason: BotMoveReason;
}

export interface UseTicTacToeResult {
  board: Board;
  status: GameStatus;
  winningLine: number[] | null;
  /** One-line explanation for the bot's most recent move. Null until it
   * has made one. */
  rationale: string | null;
  handleCellClick: (index: number) => void;
  reset: () => void;
}
