import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const PageLayoutContainer = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  flex: 1;
  min-width: 0;
`;

export const Wrap = styled.div`
  padding: 0 ${theme.spacing.s9};

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: 0 ${theme.spacing.s5};
  }
`;

export const Foot = styled.footer`
  padding: ${theme.spacing.s7} 0 ${theme.spacing.s8};
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  color: ${theme.color.faint};
  line-height: 1.8;
  border-top: 1px solid ${theme.color.line};
`;
