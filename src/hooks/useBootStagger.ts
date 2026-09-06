import { useReducedMotion, type Variants } from "motion/react";

export interface UseBootStaggerOptions {
  /** Delay, in seconds, between each child's reveal. */
  stagger: number;
  /** Delay, in seconds, before the first child starts revealing. */
  delayChildren?: number;
  /** Vertical offset (px) each child starts from before it reveals. */
  itemY: number;
  /** Reveal transition duration, in seconds, for each child. */
  itemDuration: number;
  /** Master on/off switch for call sites that only sometimes stagger.
   * Defaults to `true`. */
  enabled?: boolean;
}

export interface BootStaggerContainerProps {
  variants?: Variants;
  initial?: "hidden";
  animate?: "visible";
}

export interface BootStaggerItemProps {
  variants?: Variants;
}

export interface UseBootStaggerResult {
  containerProps: BootStaggerContainerProps;
  itemProps: BootStaggerItemProps;
}

/**
 * Wraps the page's repeated "stagger children in on boot, skip it all
 * under reduced motion" pattern (the hero, the agent console, the rail
 * nav list). Each call site keeps its own timing — this only removes the
 * ternary noise of conditionally applying `variants`/`initial`/`animate`
 * at every element. Spread `containerProps` onto the staggering parent
 * and `itemProps` onto each child.
 */
export const useBootStagger = ({
  stagger,
  delayChildren,
  itemY,
  itemDuration,
  enabled = true,
}: UseBootStaggerOptions): UseBootStaggerResult => {
  const reducedMotion = useReducedMotion();
  const animateBoot = enabled && !reducedMotion;

  if (!animateBoot) {
    return { containerProps: {}, itemProps: {} };
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: itemY },
    visible: { opacity: 1, y: 0, transition: { duration: itemDuration } },
  };

  return {
    containerProps: { variants: containerVariants, initial: "hidden", animate: "visible" },
    itemProps: { variants: itemVariants },
  };
};
