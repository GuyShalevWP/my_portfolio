import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const TileEl = styled.span`
  display: inline-block;
  font-family: ${theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.02em;
  color: ${theme.color.ink};
  background: ${theme.color.surface2};
  border: 1px solid ${theme.color.line};
  border-radius: ${theme.radius.sm};
  padding: 8px 11px;
  transition: border-color ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover {
    border-color: rgba(255, 176, 32, 0.55);
  }
`;

export const Qualifier = styled.span`
  color: ${theme.color.muted};
  font-size: 11px;
`;
