/**
 * The `motion` library's tween easing wants a cubic-bezier array, not the
 * CSS string form. Mirrors `theme.motion.easing` /
 * `theme.motion.duration` (@styles/GlobalStyles) — keep both in sync if
 * either changes.
 */
export const EASE_OUT: [number, number, number, number] = [0.2, 0.7, 0.3, 1];

export const DURATION_FAST = 0.12;
export const DURATION_BASE = 0.2;
export const DURATION_SLOW = 0.4;
