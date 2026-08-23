import { theme } from "@styles/GlobalStyles";
import { pxToRem } from "@utils/size-convertor-utils";
import styled from "styled-components";

export const HeaderCintainer = styled.header`
  align-self: start;
`;

export const HeaderTitle = styled.h1`
  font-size: ${pxToRem(80)};
`;

export const HeaderSubTitle = styled.h2`
  font-size: ${theme.fontSize["xxl"]};
`;
