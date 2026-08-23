import { theme } from "@styles/GlobalStyles";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing["xl"]};
`;
