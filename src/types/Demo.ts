export interface DemoPanelContent {
  title: string;
  meta: string;
  rule: string;
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
