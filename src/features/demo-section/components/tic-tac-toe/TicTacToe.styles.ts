import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const GameArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  width: 270px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const Cell = styled.button<{ $mark: "X" | "O" | null; $winning: boolean }>`
  aspect-ratio: 1;
  background: ${theme.color.surface2};
  border: 1px solid ${theme.color.line};
  border-radius: ${theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.font.display};
  font-weight: ${theme.fontWeight.displayBold};
  font-size: 40px;
  color: ${theme.color.ink};

  ${({ $mark }) =>
    $mark === "O" &&
    css`
      color: ${theme.color.signal};
    `}

  ${({ $winning }) =>
    $winning &&
    css`
      border-color: ${theme.color.live};
      background: rgba(79, 209, 197, 0.1);
      color: ${theme.color.live};
    `}

  &[aria-disabled="true"] {
    cursor: default;
  }
`;

export const Thinking = styled.div`
  font-family: ${theme.font.mono};
  font-size: 12px;
  color: ${theme.color.live};
  margin-top: ${theme.spacing.s4};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Rationale = styled.p`
  font-family: ${theme.font.body};
  font-style: italic;
  font-size: 15px;
  color: ${theme.color.muted};
  margin-top: ${theme.spacing.s3};
  line-height: 1.5;
`;

export const RematchButton = styled.button`
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
