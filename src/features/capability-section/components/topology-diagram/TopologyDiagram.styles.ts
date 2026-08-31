import styled, { css } from "styled-components";
import { theme } from "@styles/GlobalStyles";
import type { TopologyNode } from "../../../../types/Capability";

export const Topo = styled.div`
  width: 300px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.s3};
  padding-top: ${theme.spacing.s2};

  @media (max-width: ${theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

const variantStyle = (variant: TopologyNode["variant"]) => {
  switch (variant) {
    case "lead":
      return css`
        background: ${theme.color.signal};
        color: ${theme.color.canvas};
        border-color: ${theme.color.signal};
        font-weight: ${theme.fontWeight.monoBold};
      `;
    case "pr":
      return css`
        border-color: ${theme.color.live};
        color: ${theme.color.live};
      `;
    default:
      return css`
        background: ${theme.color.surface2};
        border-color: ${theme.color.line};
        color: ${theme.color.muted};
      `;
  }
};

export const Node = styled.span<{ $variant: TopologyNode["variant"] }>`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 9px 14px;
  border-radius: ${theme.radius.sm};
  border: 1px solid ${theme.color.line};
  background: ${theme.color.surface2};
  color: ${theme.color.muted};
  ${({ $variant }) => variantStyle($variant)}
`;

export const Stem = styled.span`
  width: 1px;
  height: 16px;
  background: ${theme.color.line};
`;

export const Fan = styled.div`
  display: flex;
  gap: ${theme.spacing.s2};
  flex-wrap: wrap;
  justify-content: center;
`;
