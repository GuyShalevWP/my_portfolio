import { pxToRem } from "@utils/size-convertor-utils";
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

export const theme = {
  /**
   * @property xxxs - 6px
   * @property xxs  - 8px
   * @property xs   - 10px
   * @property s    - 12px
   * @property l    - 24px
   * @property xl   - 32px
   * @property xxl  - 48px
   * @property xxxl - 64px
   */
  spacing: {
    /** 6px */
    xxxs: pxToRem(6),
    /** 8px */
    xxs: pxToRem(8),
    /** 10px */
    xs: pxToRem(10),
    /** 12px */
    s: pxToRem(12),
    /** 24px */
    l: pxToRem(24),
    /** 32px */
    xl: pxToRem(32),
    /** 48px */
    xxl: pxToRem(48),
    /** 64px */
    xxxl: pxToRem(64),
  },
  /**
   * Application font size scale.
   *
   * All values are converted from px to rem.
   *
   * @property xs   - 12px
   * @property s    - 14px
   * @property m    - 16px
   * @property l    - 20px
   * @property xl   - 24px
   * @property xxl  - 32px
   * @property xxxl - 48px
   */
  fontSize: {
    /** 12px */
    xs: pxToRem(12),
    /** 14px */
    s: pxToRem(14),
    /** 16px - Default body text */
    m: pxToRem(16),
    /** 20px */
    l: pxToRem(20),
    /** 24px */
    xl: pxToRem(24),
    /** 32px */
    xxl: pxToRem(32),
    /** 48px */
    xxxl: pxToRem(48),
  },
};
