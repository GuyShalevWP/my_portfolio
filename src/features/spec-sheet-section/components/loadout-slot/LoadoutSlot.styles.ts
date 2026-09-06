import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import MonoLabel from "../../../../components/mono-label/MonoLabel";

export const SlotRow = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: ${theme.spacing.s5};
  align-items: start;

  & + & {
    margin-top: ${theme.spacing.s5};
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.s3};
  }
`;

export const SlotLabel = styled(MonoLabel)`
  padding-top: 9px;

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding-top: 0;
  }
`;

export const TilesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.s2};
`;
