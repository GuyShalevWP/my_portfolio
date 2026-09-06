export interface SpecTile {
  name: string;
  /** A short qualifier rendered inside the tile at 11px muted, e.g.
   * "caching" — no parentheses, the tile itself is the boundary. */
  qualifier?: string;
}

export interface SpecSlot {
  label: string;
  tiles: SpecTile[];
}

export interface SpecGroup {
  name: string;
  /** Optional two-line note under the group name (`\n` = line break).
   * Hidden below the mobile breakpoint. */
  note?: string;
  slots: SpecSlot[];
}

export interface SpecSheetContent {
  heading: string;
  /** The page's one remaining section eyebrow. */
  kicker: string;
  groups: SpecGroup[];
}
