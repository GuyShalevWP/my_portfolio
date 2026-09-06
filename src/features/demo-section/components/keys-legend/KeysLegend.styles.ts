import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const Keys = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: ${theme.spacing.s5};

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding-top: ${theme.spacing.s3};
  }
`;

export const KeyLabel = styled.span`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  color: ${theme.color.muted};
  margin-right: ${theme.spacing.s3};
`;

export const Key = styled.span`
  font-family: ${theme.font.pixel};
  font-size: 9px;
  line-height: 1;
  color: ${theme.color.ink};
  background: ${theme.color.surface2};
  border: 1px solid ${theme.color.line};
  border-radius: ${theme.radius.sm};
  padding: 6px 7px 5px;
`;

export const KeyAction = styled.span`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  color: ${theme.color.muted};
  margin-right: ${theme.spacing.s3};

  &:last-of-type {
    margin-right: 0;
  }
`;
