import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const Intro = styled.p`
  font-family: ${theme.font.body};
  font-size: 18px;
  line-height: 1.65;
  color: ${theme.color.muted};
  /* -40px matches the comp's fine-tuned pull-up under the heading —
   * not on the s1–s10 scale. */
  margin: -40px 0 ${theme.spacing.s7};
  max-width: 60ch;

  @media (max-width: ${theme.breakpoint.mobile}) {
    margin: 0 0 ${theme.spacing.s6};
    font-size: 17px;
  }
`;

export const Demos = styled.div`
  display: flex;
  gap: ${theme.spacing.s6};

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;
