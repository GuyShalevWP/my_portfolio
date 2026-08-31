export interface DemoPanelContent {
  title: string;
  meta: string;
  rule: string;
  /** Static, non-functional placeholder copy — the interior game/board ships in stage 3. */
  placeholder: string;
}

export interface DemoSectionContent {
  heading: string;
  kicker: string;
  intro: string;
  panels: {
    ticTacToe: DemoPanelContent;
    dispatch: DemoPanelContent;
  };
}
