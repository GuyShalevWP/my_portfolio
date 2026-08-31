import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const StyledButtonLink = styled.a<{ $variant: "primary" | "ghost" }>`
  font-family: ${theme.font.mono};
  font-size: 14px;
  font-weight: ${theme.fontWeight.monoBold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: ${theme.radius.md};
  padding: 16px 26px;
  display: inline-block;
  border: 0;
  transition: opacity ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover {
    opacity: 0.88;
  }

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background: ${theme.color.signal};
          color: ${theme.color.canvas};
        `
      : css`
          background: transparent;
          color: ${theme.color.ink};
          border: 1px solid ${theme.color.line};
        `}

  @media (max-width: ${theme.breakpoint.mobile}) {
    text-align: center;
    display: block;
  }
`;
