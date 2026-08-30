import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import { pxToRem } from "@utils/size-convertor-utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing["s"]};
  padding: 2rem;
  background: #4a4947;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: ${pxToRem(360)};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${theme.fontSize["xl"]};
  font-weight: bold;
  color: #faf7f0;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing["xxs"]};
`;

interface CellProps {
  $isWinning: boolean;
}

export const Cell = styled.button<CellProps>`
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  font-size: ${theme.fontSize["xxl"]};
  font-weight: bold;
  color: ${({ $isWinning }) => ($isWinning ? "#f97300" : "#faf7f0")};
  background: ${({ $isWinning }) => ($isWinning ? "#B17457" : "#333333")};
  border: 1px solid #d1d5db;
  border-radius: ${pxToRem(8)};
  cursor: pointer;
  transition: background 0.2s ease;

  &:disabled {
    cursor: default;
  }

  &:not(:disabled):hover {
    background: #5a5856;
  }
`;

export const Status = styled.p`
  font-size: ${theme.fontSize["m"]};
  color: #faf7f0;
`;

export const ResetButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: none;
  background: #b17457;
  color: #f3f4f6;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f97300;
  }
`;
