import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const GroupRow = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: ${theme.spacing.s7};
  padding: ${theme.spacing.s6} 0;

  & + & {
    border-top: 1px solid ${theme.color.line};
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.s5};
    padding: ${theme.spacing.s5} 0;
  }
`;

export const GroupMeta = styled.div``;

export const GroupName = styled.p`
  font-family: ${theme.font.display};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.01em;
  color: ${theme.color.ink};
`;

export const GroupNote = styled.p`
  font-family: ${theme.font.mono};
  font-size: 11px;
  line-height: 1.7;
  color: ${theme.color.muted};
  margin-top: ${theme.spacing.s2};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const SlotsCol = styled.div``;
