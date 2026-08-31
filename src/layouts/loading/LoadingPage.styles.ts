import { theme } from "@styles/GlobalStyles";
import { motion } from "motion/react";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: ${theme.spacing.s3};
  background: ${theme.color.canvas};
`;

export const LoadingDot = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: ${theme.radius.full};
  will-change: transform;
  background-color: ${theme.color.signal};
`;
