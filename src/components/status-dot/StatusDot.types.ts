export type StatusDotVariant = "live" | "idle" | "signal" | "alert";

export interface StatusDotProps {
  variant: StatusDotVariant;
  /** Loops a 2s pulse — reserved for the top bar's availability dot, the
   * only looping animation on the page. Off under reduced motion. */
  pulse?: boolean;
  className?: string;
}
