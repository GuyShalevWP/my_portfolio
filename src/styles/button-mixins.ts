import { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

/**
 * Shared visual language for every button-styled control on the site —
 * the `ButtonLink` CTA and the in-game action buttons (`RunButton`,
 * `GameButton`). Font, radius, transition and the pressed dip are common
 * across all of them; padding, layout and color scheme are per-consumer
 * and stay in each consumer's own styles.
 */
export const buttonBase = css`
  font-family: ${theme.font.mono};
  font-size: 14px;
  font-weight: ${theme.fontWeight.monoBold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: ${theme.radius.md};
  transition: background-color ${theme.motion.duration.fast} ${theme.motion.easing},
    border-color ${theme.motion.duration.fast} ${theme.motion.easing},
    transform ${theme.motion.duration.fast} ${theme.motion.easing};

  &:active {
    transform: translateY(1px);
  }
`;

/** The filled amber CTA variant. Hover lifts `signal` to `signalHi`
 * (10.0:1 → 11.4:1 on canvas) — a state that adds contrast, never
 * removes it. */
export const buttonPrimary = css`
  background: ${theme.color.signal};
  color: ${theme.color.canvas};
  border: 0;

  &:hover {
    background: ${theme.color.signalHi};
  }
`;

/** The outlined, transparent-background variant. Text is already `ink`
 * at rest, so hover lifts the border instead. */
export const buttonGhost = css`
  background: transparent;
  color: ${theme.color.ink};
  border: 1px solid ${theme.color.line};

  &:hover {
    border-color: ${theme.color.muted};
  }
`;

/** Disabled treatment shared by every button that can be disabled
 * (currently just Dispatch's "Run the plan" before a specialist is
 * assigned). Declared last by callers so it wins over the hover rule
 * above at equal specificity. */
export const buttonDisabled = css`
  &:disabled {
    background: ${theme.color.surface2};
    border-color: ${theme.color.line};
    color: ${theme.color.muted};
    cursor: not-allowed;
  }
`;
