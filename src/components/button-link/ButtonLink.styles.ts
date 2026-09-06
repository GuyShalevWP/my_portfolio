import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import { buttonBase, buttonGhost, buttonPrimary } from "@styles/button-mixins";

export const StyledButtonLink = styled.a<{ $variant: "primary" | "ghost" }>`
  ${buttonBase}
  padding: 16px 26px;
  display: inline-block;

  ${({ $variant }) => ($variant === "primary" ? buttonPrimary : buttonGhost)}

  @media (max-width: ${theme.breakpoint.mobile}) {
    text-align: center;
    display: block;
  }
`;
