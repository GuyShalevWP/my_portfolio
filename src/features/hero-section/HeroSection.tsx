import { useReducedMotion, type Variants } from "motion/react";
import { hero } from "@data/hero";
import ButtonLink from "../../components/button-link/ButtonLink";
import AgentConsole from "./components/agent-console/AgentConsole";
import {
  Accent,
  CtaRow,
  Heading,
  HeroGrid,
  HeroLeft,
  HeroWrap,
  Headline,
  IntroLine,
  Sub,
  Tag,
} from "./HeroSection.styles";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

/** The claim — hero headline, prose, CTAs, and the agent-team console. */
const HeroSection = () => {
  const reducedMotion = useReducedMotion();
  const animateBoot = !reducedMotion;

  return (
    <HeroWrap id="claim" aria-labelledby="claim-heading">
      <HeroGrid
        variants={animateBoot ? containerVariants : undefined}
        initial={animateBoot ? "hidden" : undefined}
        animate={animateBoot ? "visible" : undefined}
      >
        <HeroLeft>
          <Tag variants={animateBoot ? itemVariants : undefined}>{hero.tag}</Tag>
          <Heading id="claim-heading">
            <IntroLine variants={animateBoot ? itemVariants : undefined}>
              {hero.intro}
            </IntroLine>
            <Headline variants={animateBoot ? itemVariants : undefined}>
              {hero.headlineLead}
              <br />
              {hero.headlineTail} <Accent>{hero.headlineAccent}</Accent>
            </Headline>
          </Heading>
          <Sub variants={animateBoot ? itemVariants : undefined}>{hero.sub}</Sub>
          <CtaRow variants={animateBoot ? itemVariants : undefined}>
            <ButtonLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </ButtonLink>
          </CtaRow>
        </HeroLeft>
        <AgentConsole content={hero.console} />
      </HeroGrid>
    </HeroWrap>
  );
};

export default HeroSection;
