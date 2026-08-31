import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import MonoLabel from "../../../../components/mono-label/MonoLabel";

export const Row = styled.div`
  display: flex;
  gap: ${theme.spacing.s7};
  padding: ${theme.spacing.s5} 0;
  border-bottom: 1px solid ${theme.color.line};
  align-items: center;

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: flex-start;
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

export const Value = styled.a`
  font-family: ${theme.font.mono};
  font-size: 16px;
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;
