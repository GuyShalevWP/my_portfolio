import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

/** The raised panel primitive — console, demo panels, the wide capability
 * callout. `background: surface`, `border: line`, `radius: lg`. */
const Panel = styled.div`
  background: ${theme.color.surface};
  border: 1px solid ${theme.color.line};
  border-radius: ${theme.radius.lg};
`;

export default Panel;
