import { H2, SectionHeadingRow } from "./SectionHeading.styles";
import type { SectionHeadingProps } from "./SectionHeading.types";

/**
 * The bare `<h2>` repeated at the top of every section below the hero.
 * The page carries exactly one section eyebrow now (the loadout band's
 * "LOADOUT"), built separately there — every other headline stands
 * alone, so this component no longer renders a kicker at all.
 * `id` is the heading's own id, referenced by the section's
 * `aria-labelledby`.
 */
const SectionHeading = ({ id, heading, noMarginBottom }: SectionHeadingProps) => {
  return (
    <SectionHeadingRow $noMarginBottom={noMarginBottom}>
      <H2 id={id}>{heading}</H2>
    </SectionHeadingRow>
  );
};

export default SectionHeading;
