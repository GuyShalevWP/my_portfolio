import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import MonoLabel from "../../../../components/mono-label/MonoLabel";

export const Row = styled.div`
  display: flex;
  gap: ${theme.spacing.s7};
  padding: ${theme.spacing.s5} 0;
  border-bottom: 1px solid ${theme.color.line};
  align-items: baseline;

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.s2};
  }
`;

export const Key = styled(MonoLabel)`
  width: 170px;
  flex: none;

  @media (max-width: ${theme.breakpoint.mobile}) {
    width: auto;
  }
`;

const labelTypography = `
  font-family: ${theme.font.mono};
  font-size: 16px;
`;

export const Link = styled.a`
  ${labelTypography}
  color: ${theme.color.ink};
  border-bottom: 1px solid ${theme.color.signal};
  padding-bottom: 2px;
  transition: color ${theme.motion.duration.fast} ${theme.motion.easing},
    border-color ${theme.motion.duration.fast} ${theme.motion.easing};

  &:hover {
    color: ${theme.color.signalHi};
    border-bottom-color: ${theme.color.signalHi};
  }

  &:focus-visible {
    outline: 2px solid ${theme.color.signal};
    outline-offset: 3px;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;

/** Same typography as `Link`, without the link affordance — used for
 * the a11y toolkit row, which must not be clickable. */
export const PlainLabel = styled.span`
  ${labelTypography}
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  font-family: ${theme.font.body};
  font-size: 16px;
  color: ${theme.color.muted};
  margin-top: 8px;
  line-height: 1.5;
`;
