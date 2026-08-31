import { StyledMonoLabel } from "./MonoLabel.styles";
import type { MonoLabelProps } from "./MonoLabel.types";

/** The mono kicker label used throughout the design — section kickers,
 * spec keys, receipt keys, contact keys. */
const MonoLabel = ({ variant = "muted", id, className, children }: MonoLabelProps) => {
  return (
    <StyledMonoLabel $variant={variant} id={id} className={className}>
      {children}
    </StyledMonoLabel>
  );
};

export default MonoLabel;
