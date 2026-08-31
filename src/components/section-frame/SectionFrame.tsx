import { useRevealVariants } from "@hooks/useRevealVariants";
import { StyledSectionFrame } from "./SectionFrame.styles";
import type { SectionFrameProps } from "./SectionFrame.types";

/** The `.sec` wrapper repeated by every section below the hero: s10
 * vertical padding, a hairline top border, and the shared scroll-reveal
 * (16px rise + fade, `whileInView`, once — instant opacity swap under
 * reduced motion). */
const SectionFrame = ({ id, ariaLabelledBy, children }: SectionFrameProps) => {
  const reveal = useRevealVariants();

  return (
    <StyledSectionFrame
      id={id}
      aria-labelledby={ariaLabelledBy}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </StyledSectionFrame>
  );
};

export default SectionFrame;
