import { theme } from "@styles/GlobalStyles";
import { pxToRem } from "@utils/size-convertor-utils";
import { motion } from "motion/react";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: ${theme.spacing["xs"]};
`;

export const LoadingDot = styled(motion.div)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: 50%;
  will-change: transform;
  background-color: #fff;
`;
