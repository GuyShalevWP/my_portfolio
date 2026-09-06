import { theme } from "@styles/GlobalStyles";
import { useRevealVariants } from "@hooks/useRevealVariants";
import { StyledSectionFrame } from "./SectionFrame.styles";
import type { SectionFrameProps } from "./SectionFrame.types";

/** The `.sec` wrapper repeated by every section below the hero: a
 * hairline top border (unless `noTopBorder`), a per-section vertical
 * rhythm (default `s10`, overridable), and the shared scroll-reveal
 * (16px rise + fade, `whileInView`, once — instant opacity swap under
 * reduced motion). */
const SectionFrame = ({
  id,
  ariaLabelledBy,
  paddingTop = theme.spacing.s10,
  paddingBottom = theme.spacing.s10,
  mobilePaddingTop = theme.spacing.s8,
  mobilePaddingBottom = theme.spacing.s8,
  noTopBorder,
  children,
}: SectionFrameProps) => {
  const reveal = useRevealVariants();

  return (
    <StyledSectionFrame
      id={id}
      aria-labelledby={ariaLabelledBy}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $mobilePaddingTop={mobilePaddingTop}
      $mobilePaddingBottom={mobilePaddingBottom}
      $noTopBorder={noTopBorder}
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
