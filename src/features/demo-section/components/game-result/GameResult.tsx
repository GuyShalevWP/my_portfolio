import { useReducedMotion } from "motion/react";
import { DURATION_BASE, EASE_OUT } from "@utils/motion-easing-utils";
import { Result, ResultBody, ResultTitle } from "./GameResult.styles";
import type { GameResultProps } from "./GameResult.types";

/** The result banner shared by both demo-section games (Dispatch's
 * win/lose/warn outcome, TicTacToe's win/lose/draw). Owns the
 * reduced-motion-aware reveal itself, so callers never handle motion
 * props directly. */
const GameResult = ({ variant, title, body, fullWidth, animate = true }: GameResultProps) => {
  const reducedMotion = useReducedMotion();

  const revealMotion =
    animate && !reducedMotion
      ? {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: DURATION_BASE, ease: EASE_OUT },
        }
      : {};

  return (
    <Result $variant={variant} $fullWidth={fullWidth} {...revealMotion}>
      <ResultTitle $variant={variant}>{title}</ResultTitle>
      <ResultBody>{body}</ResultBody>
    </Result>
  );
};

export default GameResult;
