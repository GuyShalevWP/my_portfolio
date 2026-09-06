export interface GameResultProps {
  /** Visual accent. Omit for a neutral result (e.g. a draw). */
  variant?: "win" | "lose" | "warn";
  title: string;
  body: string;
  /** TicTacToe's board is centered and its result banner needs to span
   * the full board width; Dispatch's ticket panel is already full width
   * and doesn't set this. */
  fullWidth?: boolean;
  /** Whether to run the reduced-motion-aware reveal on mount. Defaults to
   * `true`. The pre-game idle state renders statically — pass `false`
   * there instead of a variant, matching its original no-motion behavior. */
  animate?: boolean;
}
