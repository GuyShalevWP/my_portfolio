import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

		user-select: none;
    -webkit-user-select: none;
  }
  body {
    background-color: #333333;
    color: #f0f0f0;
  }

	.allow-selection,
  .allow-selection * {
    user-select: text;
    -webkit-user-select: text;
  }
`;
