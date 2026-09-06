import styled, { css, keyframes } from "styled-components";
import { theme } from "@styles/GlobalStyles";
import type { StatusDotVariant } from "./StatusDot.types";

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 3px rgba(79, 209, 197, 0.16); }
  50% { box-shadow: 0 0 0 6px rgba(79, 209, 197, 0.05); }
`;

const variantStyle = ($variant: StatusDotVariant) => {
  switch ($variant) {
    case "live":
      return css`
        background: ${theme.color.live};
        box-shadow: 0 0 0 3px rgba(79, 209, 197, 0.16);
      `;
    case "signal":
      return css`
        background: ${theme.color.signal};
        box-shadow: 0 0 0 3px rgba(255, 176, 32, 0.16);
      `;
    case "alert":
      return css`
        background: ${theme.color.alert};
      `;
    case "queued":
    default:
      return css`
        background: ${theme.color.queued};
      `;
  }
};

export const StyledStatusDot = styled.span<{
  $variant: StatusDotVariant;
  $pulse: boolean;
}>`
  width: 7px;
  height: 7px;
  border-radius: ${theme.radius.full};
  display: inline-block;
  flex: none;
  ${({ $variant }) => variantStyle($variant)}
  ${({ $pulse }) =>
    $pulse &&
    css`
      animation: ${pulse} 2s ease-in-out infinite;
    `}
`;
