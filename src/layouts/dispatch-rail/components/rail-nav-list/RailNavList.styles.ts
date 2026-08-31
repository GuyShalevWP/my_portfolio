import { motion } from "motion/react";
import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const List = styled(motion.ul)`
  list-style: none;
`;

export const Item = styled(motion.li)``;

export const ItemLink = styled.a<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s3};
  padding: 10px 0;
  font-family: ${theme.font.mono};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? theme.color.ink : theme.color.muted)};
`;

export const StatusWord = styled.span<{ $active: boolean }>`
  margin-left: auto;
  font-size: 10px;
  color: ${({ $active }) => ($active ? theme.color.live : "#4A5568")};
  padding-right: ${theme.spacing.s5};
`;
