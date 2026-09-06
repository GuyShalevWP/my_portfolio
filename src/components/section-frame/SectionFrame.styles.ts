import { motion } from "motion/react";
import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const StyledSectionFrame = styled(motion.section)<{
  $paddingTop: string;
  $paddingBottom: string;
  $mobilePaddingTop: string;
  $mobilePaddingBottom: string;
  $noTopBorder?: boolean;
}>`
  padding: ${({ $paddingTop, $paddingBottom }) => `${$paddingTop} 0 ${$paddingBottom}`};
  border-top: 1px solid ${theme.color.line};
  scroll-margin-top: 64px;

  ${({ $noTopBorder }) =>
    $noTopBorder &&
    css`
      border-top: 0;
    `}

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: ${({ $mobilePaddingTop, $mobilePaddingBottom }) =>
      `${$mobilePaddingTop} 0 ${$mobilePaddingBottom}`};
  }
`;
