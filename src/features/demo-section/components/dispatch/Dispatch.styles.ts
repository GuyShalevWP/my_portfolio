import { motion } from "motion/react";
import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const GameArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TicketCard = styled.div`
  background: ${theme.color.surface2};
  border: 1px solid ${theme.color.line};
  border-left: 2px solid ${theme.color.signal};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing.s4};
  margin-bottom: ${theme.spacing.s5};
`;

export const TicketStatus = styled.p`
  font-family: ${theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.color.signal};
  margin-bottom: 6px;
`;

export const TicketBody = styled.p`
  font-family: ${theme.font.body};
  font-size: 16px;
  color: ${theme.color.ink};
  line-height: 1.45;
`;

export const AgentsList = styled.div`
  display: flex;
  gap: ${theme.spacing.s2};
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.s5};
`;

export const Chip = styled.button<{ $picked: boolean }>`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 9px 12px;
  min-height: 40px;
  border-radius: ${theme.radius.sm};
  background: ${theme.color.surface2};
  border: 1px solid ${theme.color.line};
  color: ${theme.color.muted};
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: opacity ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover {
    opacity: 0.88;
  }

  ${({ $picked }) =>
    $picked &&
    css`
      border-color: ${theme.color.signal};
      color: ${theme.color.ink};
    `}
`;

export const ChipNum = styled.span<{ $picked: boolean }>`
  color: #3e4a5c;

  ${({ $picked }) =>
    $picked &&
    css`
      color: ${theme.color.signal};
      font-weight: ${theme.fontWeight.monoBold};
    `}
`;

export const RunButton = styled.button`
  font-family: ${theme.font.mono};
  font-size: 14px;
  font-weight: ${theme.fontWeight.monoBold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: ${theme.color.signal};
  color: ${theme.color.canvas};
  border: 0;
  border-radius: ${theme.radius.md};
  display: block;
  width: 100%;
  text-align: center;
  padding: 13px 22px;
  transition: opacity ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover:not(:disabled) {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const ReassignButton = styled.button`
  font-family: ${theme.font.mono};
  font-size: 14px;
  font-weight: ${theme.fontWeight.monoBold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: transparent;
  color: ${theme.color.ink};
  border: 1px solid ${theme.color.line};
  border-radius: ${theme.radius.md};
  padding: 13px 22px;
  margin-top: ${theme.spacing.s5};
  transition: opacity ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover {
    opacity: 0.88;
  }
`;

export const Result = styled(motion.div)<{ $variant?: "win" | "lose" | "warn" }>`
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing.s4};
  margin-top: ${theme.spacing.s5};
  border: 1px solid ${theme.color.line};
  background: ${theme.color.surface2};

  ${({ $variant }) =>
    $variant === "win" &&
    css`
      border-color: ${theme.color.live};
    `}

  ${({ $variant }) =>
    $variant === "lose" &&
    css`
      border-color: ${theme.color.alert};
    `}

  ${({ $variant }) =>
    $variant === "warn" &&
    css`
      border-color: ${theme.color.signal};
    `}
`;

export const ResultTitle = styled.p<{ $variant?: "win" | "lose" | "warn" }>`
  font-family: ${theme.font.display};
  font-weight: ${theme.fontWeight.displayBold};
  font-size: 20px;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
  color: ${theme.color.ink};

  ${({ $variant }) =>
    $variant === "win" &&
    css`
      color: ${theme.color.live};
    `}

  ${({ $variant }) =>
    $variant === "lose" &&
    css`
      color: ${theme.color.alert};
    `}

  ${({ $variant }) =>
    $variant === "warn" &&
    css`
      color: ${theme.color.signal};
    `}
`;

export const ResultBody = styled.p`
  font-family: ${theme.font.body};
  font-size: 15px;
  line-height: 1.5;
  color: ${theme.color.muted};
`;
