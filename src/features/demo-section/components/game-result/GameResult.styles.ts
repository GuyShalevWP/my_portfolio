import { motion } from "motion/react";
import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";
import type { GameResultProps } from "./GameResult.types";

type Variant = GameResultProps["variant"];

export const Result = styled(motion.div)<{ $variant?: Variant; $fullWidth?: boolean }>`
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing.s4};
  margin-top: ${theme.spacing.s5};
  border: 1px solid ${theme.color.line};
  background: ${theme.color.surface2};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

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

export const ResultTitle = styled.p<{ $variant?: Variant }>`
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
