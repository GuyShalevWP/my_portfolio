import { StyledVisuallyHidden } from "./VisuallyHidden.styles";
import type { VisuallyHiddenProps } from "./VisuallyHidden.types";

/** Screen-reader-only content — used for `aria-live` announcements that
 * shouldn't also duplicate onto the visible page. */
const VisuallyHidden = ({ children, className, ...rest }: VisuallyHiddenProps) => {
  return (
    <StyledVisuallyHidden role="status" className={className} {...rest}>
      {children}
    </StyledVisuallyHidden>
  );
};

export default VisuallyHidden;
