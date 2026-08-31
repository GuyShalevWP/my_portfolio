import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

export const SectionHeadingRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing.s5};
  margin-bottom: ${theme.spacing.s8};

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.s3};
    margin-bottom: ${theme.spacing.s6};
  }
`;

export const H2 = styled.h2`
  font-family: ${theme.font.display};
  font-weight: ${theme.fontWeight.displayBold};
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 30px;
  }
`;
