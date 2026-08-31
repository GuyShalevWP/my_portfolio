import MonoLabel from "../mono-label/MonoLabel";
import { H2, SectionHeadingRow } from "./SectionHeading.styles";
import type { SectionHeadingProps } from "./SectionHeading.types";

/** The `<h2> + mono-label kicker` pair repeated at the top of every
 * section below the hero. `id` is the heading's own id, referenced by
 * the section's `aria-labelledby`. */
const SectionHeading = ({ id, heading, kicker }: SectionHeadingProps) => {
  return (
    <SectionHeadingRow>
      <H2 id={id}>{heading}</H2>
      <MonoLabel>{kicker}</MonoLabel>
    </SectionHeadingRow>
  );
};

export default SectionHeading;
