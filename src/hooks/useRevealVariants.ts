import { useReducedMotion, type Variants } from "motion/react";
import { DURATION_SLOW, EASE_OUT } from "@utils/motion-easing-utils";

/**
 * Shared scroll-reveal used by every section below the hero: 16px rise +
 * fade, `whileInView`, once. Under `prefers-reduced-motion: reduce` it
 * collapses to an instant opacity swap — no rise, no easing.
 */
export const useRevealVariants = (): Variants => {
  const reduced = useReducedMotion();

  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }

  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION_SLOW, ease: EASE_OUT },
    },
  };
};
