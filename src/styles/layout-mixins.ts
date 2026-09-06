import { css } from "styled-components";
import { theme } from "./GlobalStyles";

/**
 * The 1008px content field, centred — shared by the page's `Wrap` and
 * the top bar's inner row so both align on the same left/right edge at
 * every viewport width (a fixed padding can't do this: only a capped,
 * auto-centred width reproduces the comp's exact 216px gutter at 1440
 * and scales correctly at every other width). Below the mobile
 * breakpoint it drops the cap for a fixed side gutter instead.
 */
export const contentField = css`
  max-width: 1008px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoint.mobile}) {
    max-width: none;
    padding: 0 ${theme.spacing.s5};
  }
`;
