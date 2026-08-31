import { useReducedMotion } from "motion/react";
import { StyledStatusDot } from "./StatusDot.styles";
import type { StatusDotProps } from "./StatusDot.types";

/** The status dot used in the rail, hero console, and demo headers.
 * `pulse` is the one looping animation on the page — reserved for the
 * single active rail item — and is dropped under reduced motion. */
const StatusDot = ({ variant, pulse = false, className }: StatusDotProps) => {
  const reduced = useReducedMotion();

  return (
    <StyledStatusDot
      $variant={variant}
      $pulse={pulse && !reduced}
      className={className}
      aria-hidden="true"
    />
  );
};

export default StatusDot;
