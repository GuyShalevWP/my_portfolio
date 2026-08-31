export type StatusDotVariant = "live" | "queued" | "signal" | "alert";

export interface StatusDotProps {
  variant: StatusDotVariant;
  /** Loops a 2s pulse — reserved for the single active rail item. Off under reduced motion. */
  pulse?: boolean;
  className?: string;
}
