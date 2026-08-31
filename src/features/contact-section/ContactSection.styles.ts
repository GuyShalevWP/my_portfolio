import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const Intro = styled.p`
  font-family: ${theme.font.body};
  font-size: 18px;
  line-height: 1.65;
  color: ${theme.color.muted};
  max-width: 52ch;
  /* -40px matches the comp's fine-tuned pull-up — not on the s1–s10 scale. */
  margin-top: -40px;

  @media (max-width: ${theme.breakpoint.mobile}) {
    margin-top: 0;
    font-size: 17px;
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
