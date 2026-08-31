import { motion } from "motion/react";
import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import Panel from "../../../../components/panel/Panel";

export const ConsolePanel = styled(Panel)`
  width: 392px;
  flex: none;
  padding: ${theme.spacing.s5};

  @media (max-width: ${theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const ConsoleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  padding-bottom: ${theme.spacing.s4};
  border-bottom: 1px solid ${theme.color.line};
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.color.muted};
`;

export const ConsoleHeaderStatus = styled.span`
  margin-left: auto;
  color: ${theme.color.live};
`;

export const RowsList = styled(motion.div)``;

export const Crow = styled(motion.div)<{ $hideOnMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s3};
  padding: ${theme.spacing.s4} 0;
  border-top: 1px solid rgba(37, 48, 68, 0.6);

  &:first-child {
    border-top: 0;
  }

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    `
    @media (max-width: ${theme.breakpoint.mobile}) {
      display: none;
    }
  `}
`;

export const CrowName = styled.span`
  font-family: ${theme.font.mono};
  font-size: 13px;
  font-weight: ${theme.fontWeight.monoBold};
  color: ${theme.color.ink};
  width: 74px;
  flex: none;
`;

export const CrowDescription = styled.span`
  font-family: ${theme.font.mono};
  font-size: 11px;
  color: ${theme.color.muted};
  line-height: 1.4;
`;

export const CrowStatus = styled.span<{ $on: boolean }>`
  margin-left: auto;
  font-family: ${theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $on }) => ($on ? theme.color.live : "#4A5568")};
  flex: none;
`;

export const ConsoleFooter = styled.p`
  padding-top: ${theme.spacing.s4};
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #4a5568;
`;
