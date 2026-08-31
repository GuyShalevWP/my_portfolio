import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import MonoLabel from "../../../../components/mono-label/MonoLabel";

export const Column = styled.div`
  flex: 1;
`;

export const Kicker = styled(MonoLabel)`
  display: block;
  margin-bottom: ${theme.spacing.s4};
`;

export const Heading = styled.h3`
  font-family: ${theme.font.display};
  font-weight: 700;
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${theme.color.ink};
  margin-bottom: ${theme.spacing.s4};
`;

export const Body = styled.p`
  font-family: ${theme.font.body};
  font-size: 18px;
  line-height: 1.65;
  color: ${theme.color.muted};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 17px;
  }
`;
