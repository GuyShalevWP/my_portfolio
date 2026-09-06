/** One keycap hint — a key plus the action it performs. */
export interface KeycapHint {
  key: string;
  action: string;
}

export interface DemoPanelContent {
  title: string;
  meta: string;
  rule: string;
  /** The keycap legend pinned to the panel's bottom edge via
   * `margin-top: auto`. */
  keys: KeycapHint[];
}

export interface DemoSectionContent {
  heading: string;
  intro: string;
  panels: {
    ticTacToe: DemoPanelContent;
    dispatch: DemoPanelContent;
  };
}
