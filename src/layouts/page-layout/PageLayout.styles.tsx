import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import { contentField } from "@styles/layout-mixins";

export const Main = styled.main`
  min-height: 100vh;
`;

export const Wrap = styled.div`
  ${contentField}
`;

export const Foot = styled.footer`
  padding: ${theme.spacing.s7} 0 ${theme.spacing.s8};
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  color: ${theme.color.muted};
  line-height: 1.8;
  border-top: 1px solid ${theme.color.line};
`;
