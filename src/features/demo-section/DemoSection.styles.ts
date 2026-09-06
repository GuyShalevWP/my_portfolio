import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const Intro = styled.p`
  font-family: ${theme.font.body};
  font-size: 18px;
  line-height: 1.6;
  color: ${theme.color.muted};
  max-width: 58ch;
  margin: ${theme.spacing.s4} 0 ${theme.spacing.s8};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 17px;
    margin: ${theme.spacing.s4} 0 ${theme.spacing.s6};
  }
`;

export const Demos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.s6};
  align-items: stretch;

  @media (max-width: ${theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.s5};
  }
`;
