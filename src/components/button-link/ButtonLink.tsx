import { StyledButtonLink } from "./ButtonLink.styles";
import type { ButtonLinkProps } from "./ButtonLink.types";

/** The primary amber / ghost outline CTA used across the page. */
const ButtonLink = ({
  href,
  variant = "primary",
  className,
  children,
  external = false,
}: ButtonLinkProps) => {
  return (
    <StyledButtonLink
      href={href}
      $variant={variant}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </StyledButtonLink>
  );
};

export default ButtonLink;
