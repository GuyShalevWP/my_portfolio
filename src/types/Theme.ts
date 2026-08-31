export interface ThemeColor {
  canvas: string;
  surface: string;
  surface2: string;
  ink: string;
  muted: string;
  line: string;
  signal: string;
  live: string;
  alert: string;
}

export interface ThemeSpacing {
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;
  s7: string;
  s8: string;
  s9: string;
  s10: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface ThemeFont {
  display: string;
  body: string;
  mono: string;
}

export interface ThemeFontWeight {
  displayLight: number;
  displayBold: number;
  monoRegular: number;
  monoMedium: number;
  monoBold: number;
}

export interface ThemeMotionDuration {
  fast: string;
  base: string;
  slow: string;
}

export interface ThemeMotion {
  easing: string;
  duration: ThemeMotionDuration;
}

export interface ThemeBreakpoint {
  /** Below this, the dispatch rail collapses to the mobile top bar and
   * every `.m` content override from the design comp applies. */
  mobile: string;
}

export interface Theme {
  color: ThemeColor;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
  font: ThemeFont;
  fontWeight: ThemeFontWeight;
  motion: ThemeMotion;
  breakpoint: ThemeBreakpoint;
}
