const DEFAULT_BASE_FONT_SIZE = 16;

/**
 * Converts a pixel value to a rem value as a CSS-ready string.
 *
 * @param px - The pixel value to convert.
 * @param baseFontSize - The root font size in pixels (defaults to 16).
 * @returns The equivalent value in rem, e.g. "1.5rem".
 */
export const pxToRem = (
  px: number,
  baseFontSize = DEFAULT_BASE_FONT_SIZE,
): string => {
  return `${px / baseFontSize}rem`;
};
