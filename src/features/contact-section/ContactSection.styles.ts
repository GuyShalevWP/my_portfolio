import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const Intro = styled.p`
  font-family: ${theme.font.body};
  font-size: 18px;
  line-height: 1.6;
  color: ${theme.color.muted};
  max-width: 52ch;
  margin-top: ${theme.spacing.s4};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 17px;
    max-width: none;
  }
`;

export const CtaRows = styled.div`
  margin-top: ${theme.spacing.s7};
  border-top: 1px solid ${theme.color.line};
`;

export const CtaWrap = styled.div`
  margin-top: ${theme.spacing.s7};

  @media (max-width: ${theme.breakpoint.mobile}) {
    margin-top: ${theme.spacing.s6};
  }
`;
