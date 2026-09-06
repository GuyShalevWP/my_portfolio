import { motion } from "motion/react";
import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

/**
 * The full-bleed band itself. Breaks out of the centred 1008px content
 * field with `margin-inline`/`padding-inline` calc, not the comp's fixed
 * `-216px` margin — an artboard is not a viewport, and this formula
 * reaches the window edge at every width above the mobile breakpoint
 * while still resolving to exactly 216px at 1440.
 */
export const LoadoutSection = styled(motion.section)`
  position: relative;
  overflow: hidden;
  background: ${theme.color.surface};
  border-top: 1px solid ${theme.color.line};
  border-bottom: 1px solid ${theme.color.line};
  scroll-margin-top: 64px;
  padding-block: ${theme.spacing.s9};
  margin-inline: calc(50% - 50vw);
  padding-inline: calc(50vw - 50%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(rgba(140, 153, 172, 0.1) 1px, transparent 1px);
    background-size: 8px 8px;
  }

  & > * {
    position: relative;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding-block: ${theme.spacing.s7};
  }
`;

export const LoadoutHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing.s5};
  margin-bottom: ${theme.spacing.s7};

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.s2};
    margin-bottom: ${theme.spacing.s6};
  }
`;
