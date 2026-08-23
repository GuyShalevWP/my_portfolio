import { theme } from "@styles/GlobalStyles";
import { pxToRem } from "@utils/size-convertor-utils";
import { motion } from "motion/react";
import styled from "styled-components";

export const ContactAreaContainer = styled.div`
  display: flex;
  gap: ${theme.spacing["l"]};
  margin: ${pxToRem(24)} 0;
`;
export const ContactAnchor = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(56)};
  height: ${pxToRem(56)};
  border-radius: 50%;
  background-color: #f0f0f0;
  cursor: pointer;
`;

export const ContactIcon = styled.img`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
`;
