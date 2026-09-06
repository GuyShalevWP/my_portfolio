import { hero } from "@data/hero";
import { useBootStagger } from "@hooks/useBootStagger";
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
} from "./HeroSection.styles";

/** The claim — hero headline, prose, CTAs, and the agent-team console.
 * No eyebrow: a version stamp in a hero was the first thing a recruiter
 * read, so the headline now opens the page on its own. */
const HeroSection = () => {
  const { containerProps, itemProps } = useBootStagger({ stagger: 0.04, itemY: 16, itemDuration: 0.2 });

  return (
    <HeroWrap id="claim" aria-labelledby="claim-heading">
      <HeroGrid {...containerProps}>
        <HeroLeft>
          <Heading id="claim-heading">
            <IntroLine {...itemProps}>{hero.intro}</IntroLine>
            <Headline {...itemProps}>
              {hero.headlineLead}
              <br />
              {hero.headlineTail} <Accent>{hero.headlineAccent}</Accent>
            </Headline>
          </Heading>
          <Sub {...itemProps}>{hero.sub}</Sub>
          <CtaRow {...itemProps}>
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
