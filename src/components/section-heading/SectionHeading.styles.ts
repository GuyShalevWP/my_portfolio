import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const SectionHeadingRow = styled.div<{ $noMarginBottom?: boolean }>`
  margin-bottom: ${theme.spacing.s8};

  @media (max-width: ${theme.breakpoint.mobile}) {
    margin-bottom: ${theme.spacing.s6};
  }

  ${({ $noMarginBottom }) =>
    $noMarginBottom &&
    css`
      margin-bottom: 0;
    `}
`;

/** Reused directly by the loadout band's bespoke header — one h2
 * typography rule for every heading on the page, per the comp's single
 * `.h2` class. */
export const H2 = styled.h2`
  font-family: ${theme.font.display};
  font-weight: ${theme.fontWeight.displayBold};
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 30px;
  }
`;
