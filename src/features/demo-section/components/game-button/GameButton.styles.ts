import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import { buttonBase, buttonGhost } from "@styles/button-mixins";

/** The ghost-outline action button shared by both demo-section games
 * (Dispatch's "Reassign", TicTacToe's "Play again") — previously two
 * byte-identical styled-components. */
export const GameButton = styled.button`
  ${buttonBase}
  ${buttonGhost}
  padding: 13px 22px;
  margin-top: ${theme.spacing.s5};
`;
