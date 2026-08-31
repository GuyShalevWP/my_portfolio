import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import Panel from "../../../../components/panel/Panel";

export const DemoPanelContainer = styled(Panel)`
  flex: 1;
  padding: ${theme.spacing.s6};

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: ${theme.spacing.s5};
  }
`;

export const DemoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  margin-bottom: ${theme.spacing.s2};
`;

export const Title = styled.h3`
  font-family: ${theme.font.display};
  font-weight: 700;
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${theme.color.ink};
`;

export const Meta = styled.p`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.color.muted};
  margin-bottom: ${theme.spacing.s5};
`;

export const Rule = styled.p`
  font-family: ${theme.font.body};
  font-size: 16px;
  color: ${theme.color.muted};
  margin-bottom: ${theme.spacing.s5};
  line-height: 1.5;
`;

export const Placeholder = styled.div`
  border: 1px dashed ${theme.color.line};
  border-radius: ${theme.radius.sm};
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.s3};
  text-align: center;
  padding: ${theme.spacing.s5};
`;

export const PlaceholderLabel = styled.span`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.color.muted};
`;

export const PlaceholderText = styled.p`
  font-family: ${theme.font.body};
  font-size: 15px;
  color: ${theme.color.muted};
  line-height: 1.5;
  max-width: 36ch;
`;
