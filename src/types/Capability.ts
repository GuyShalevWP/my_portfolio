export interface CapabilityItem {
  label: string;
  headingLead: string;
  headingTail: string;
  body: string;
}

export interface TopologyNode {
  label: string;
  variant: "lead" | "default" | "pr";
}

export interface CapabilitySectionContent {
  heading: string;
  kicker: string;
  items: CapabilityItem[];
  wide: {
    kicker: string;
    heading: string;
    body: string;
    bodyStrong: string;
    topology: {
      lead: TopologyNode;
      fan: TopologyNode[];
      result: TopologyNode;
    };
  };
}
