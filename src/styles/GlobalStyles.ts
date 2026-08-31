import { createGlobalStyle } from "styled-components";
import type { Theme } from "../types/Theme";

/**
 * Design tokens — lifted from the approved comp
 * (projects/portfolio-design/portfolio-design-v2.html). Do not hardcode
 * hex values or literal spacing/radius numbers in component styles;
 * import this `theme` instead, matching the rest of this codebase's
 * convention of importing `theme` directly rather than reading it off
 * the styled-components `props.theme`.
 */
export const theme: Theme = {
  color: {
    canvas: "#0F1520",
    surface: "#171F2E",
    surface2: "#1E2839",
    ink: "#E8EDF5",
    muted: "#8C99AC",
    line: "#253044",
    signal: "#FFB020",
    live: "#4FD1C5",
    alert: "#FF6B5B",
  },
  spacing: {
    s1: "4px",
    s2: "8px",
    s3: "12px",
    s4: "16px",
    s5: "24px",
    s6: "32px",
    s7: "48px",
    s8: "72px",
    s9: "96px",
    s10: "160px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "14px",
    full: "999px",
  },
  font: {
    display: "'Bricolage Grotesque', sans-serif",
    body: "'Newsreader', Georgia, serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontWeight: {
    displayLight: 200,
    displayBold: 800,
    monoRegular: 400,
    monoMedium: 500,
    monoBold: 700,
  },
  motion: {
    easing: "cubic-bezier(.2,.7,.3,1)",
    duration: {
      fast: "120ms",
      base: "200ms",
      slow: "400ms",
    },
  },
  breakpoint: {
    mobile: "1024px",
  },
};

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

		user-select: none;
    -webkit-user-select: none;
  }

  html {
    color-scheme: dark;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.color.canvas};
    color: ${theme.color.ink};
    font-family: ${theme.font.body};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.display};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    cursor: pointer;
  }

	.allow-selection,
  .allow-selection * {
    user-select: text;
    -webkit-user-select: text;
  }

  /* Focus ring — 2px amber signal, 2px offset. Never removed. */
  :focus-visible {
    outline: 2px solid ${theme.color.signal};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
