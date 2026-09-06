import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import MonoLabel from "../../../../components/mono-label/MonoLabel";

export const Row = styled.div`
  display: flex;
  gap: ${theme.spacing.s7};
  padding: ${theme.spacing.s5} 0;
  border-bottom: 1px solid ${theme.color.line};
  align-items: baseline;

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.s2};
  }
`;

export const Key = styled(MonoLabel)`
  width: 170px;
  flex: none;

  @media (max-width: ${theme.breakpoint.mobile}) {
    width: auto;
  }
`;

export const Values = styled.div`
  font-family: ${theme.font.mono};
  font-size: 14px;
  line-height: 1.6;
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 13px;
  }
`;

export const Sep = styled.span`
  color: ${theme.color.dim};
  padding: 0 6px;
`;
