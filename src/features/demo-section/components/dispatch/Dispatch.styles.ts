import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";
import { buttonBase, buttonPrimary } from "@styles/button-mixins";

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
  ${buttonBase}
  ${buttonPrimary}
  display: block;
  width: 100%;
  text-align: center;
  padding: 13px 22px;

  &:hover:not(:disabled) {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
