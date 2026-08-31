import { motion } from "motion/react";
import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const StyledSectionFrame = styled(motion.section)`
  padding: ${theme.spacing.s10} 0;
  border-top: 1px solid ${theme.color.line};
  scroll-margin-top: 64px;

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: ${theme.spacing.s9} 0;
  }
`;
