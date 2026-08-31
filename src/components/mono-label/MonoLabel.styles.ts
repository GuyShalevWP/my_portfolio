import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const StyledMonoLabel = styled.span<{ $variant: "muted" | "signal" }>`
  font-family: ${theme.font.mono};
  font-size: 12px;
  font-weight: ${theme.fontWeight.monoMedium};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${({ $variant }) =>
    $variant === "signal"
      ? css`
          color: ${theme.color.signal};
        `
      : css`
          color: ${theme.color.muted};
        `}
`;
