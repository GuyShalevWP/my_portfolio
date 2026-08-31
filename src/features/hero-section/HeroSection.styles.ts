import { motion } from "motion/react";
import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

/* Load-bearing: top padding is s9 + s2(inner rail top-pad) ... — see the
 * design note. Concretely: 96px, matching the rail's 32 + 16 + 48. */
export const HeroWrap = styled.section`
  padding: ${theme.spacing.s9} 0 ${theme.spacing.s10};
  scroll-margin-top: 64px;

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: ${theme.spacing.s8} 0 ${theme.spacing.s8};
  }
`;

export const HeroGrid = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.s8};
  align-items: flex-start;

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.s7};
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

/* Matches `.rail-item`'s box exactly: padding 10px 0, line-height 16px —
 * the hero/rail baseline tie. Never drift these two apart. */
export const Tag = styled(motion.span)`
  font-family: ${theme.font.mono};
  font-size: 12px;
  font-weight: ${theme.fontWeight.monoMedium};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.color.signal};
  padding: 10px 0;
  line-height: 16px;
  display: block;

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 10px;
    padding: 0;
  }
`;

export const Heading = styled.h1`
  display: contents;
`;

export const IntroLine = styled(motion.span)`
  display: block;
  font-family: ${theme.font.display};
  font-weight: ${theme.fontWeight.displayLight};
  font-size: 34px;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: ${theme.color.muted};
  margin-top: ${theme.spacing.s4};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 22px;
    margin-top: 14px;
  }
`;

export const Headline = styled(motion.span)`
  display: block;
  font-family: ${theme.font.display};
  font-weight: ${theme.fontWeight.displayBold};
  font-size: 96px;
  line-height: 0.92;
  letter-spacing: -0.045em;
  color: ${theme.color.ink};
  margin-top: ${theme.spacing.s3};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 46px;
    letter-spacing: -0.035em;
  }
`;

export const Accent = styled.em`
  font-style: normal;
  color: ${theme.color.signal};
`;

export const Sub = styled(motion.p)`
  font-family: ${theme.font.body};
  font-size: 21px;
  line-height: 1.55;
  color: ${theme.color.muted};
  max-width: 56ch;
  margin-top: ${theme.spacing.s6};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 17px;
    margin-top: ${theme.spacing.s5};
  }
`;

export const CtaRow = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.s3};
  margin-top: ${theme.spacing.s7};

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    margin-top: ${theme.spacing.s6};
  }
`;
