import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "@styles/GlobalStyles";

export const ComingSoonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize["xxxl"]};
  font-weight: bold;
`;
export const Letter = styled(motion.span)`
  display: inline-block;
`;
