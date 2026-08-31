export interface SpecRow {
  label: string;
  values: string[];
}

export interface SpecSheetContent {
  heading: string;
  kicker: string;
  rows: SpecRow[];
}
