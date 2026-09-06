import { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

/**
 * Shared visual language for every button-styled control on the site —
 * the `ButtonLink` CTA and the in-game action buttons (`RunButton`,
 * `GameButton`). Font, radius, hover opacity and transition are common
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
  transition: opacity ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover {
    opacity: 0.88;
  }
`;

/** The filled amber CTA variant. */
export const buttonPrimary = css`
  background: ${theme.color.signal};
  color: ${theme.color.canvas};
  border: 0;
`;

/** The outlined, transparent-background variant. */
export const buttonGhost = css`
  background: transparent;
  color: ${theme.color.ink};
  border: 1px solid ${theme.color.line};
`;
