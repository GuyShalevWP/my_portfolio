import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import Panel from "../../components/panel/Panel";

export const Caps = styled.div`
  display: flex;
  gap: ${theme.spacing.s7};

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.s7};
  }
`;

export const WidePanel = styled(Panel)`
  margin-top: ${theme.spacing.s7};
  padding: ${theme.spacing.s7};
  display: flex;
  gap: ${theme.spacing.s8};

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    padding: ${theme.spacing.s5};
    gap: ${theme.spacing.s6};
  }
`;

export const WideText = styled.div`
  flex: 1;
`;

export const WideHeading = styled.h3`
  font-family: ${theme.font.display};
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${theme.color.ink};
  margin-bottom: ${theme.spacing.s4};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 24px;
  }
`;

export const WideBody = styled.p`
  font-family: ${theme.font.body};
  font-size: 18px;
  line-height: 1.65;
  color: ${theme.color.muted};
  max-width: 62ch;

  strong {
    color: ${theme.color.ink};
    font-weight: 400;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 17px;
  }
`;
