import type { CapabilitySectionContent } from "../types/Capability";

export const capabilities: CapabilitySectionContent = {
  heading: "What it does",
  items: [
    {
      label: "Delivery",
      headingLead: "Ships into production,",
      headingTail: "not into a sandbox.",
      body: "Production features in a Kubernetes-based microservices environment for enterprise banking software. Frontend features, backend services, REST APIs, and the business logic that has to be right the first time.",
    },
    {
      label: "Systems",
      headingLead: "Reads the systems",
      headingTail: "nobody wants to read.",
      body: "Hand me a legacy enterprise codebase with no map and I'll untangle it and write the map. That's the work that earned the move into full-stack. Not a certificate. A pile of undocumented systems that suddenly had documentation.",
    },
    {
      label: "Range",
      headingLead: "End to end means",
      headingTail: "end to end.",
      body: "Client projects taken from the first requirements conversation through to the production deploy. A live dental clinic site. An accessibility toolkit built once and reused across client projects.",
    },
  ],
  wide: {
    heading: "Builds agents. Not prompts.",
    body: "There's a gap between a developer who uses an AI assistant and one who architects the system those assistants run inside. I build the second kind. An investment-intelligence agent that scores opportunities through an LLM backend. A multi-agent software team where a lead agent plans the work, writes the tickets, delegates to specialist builder, QA, and security agents, and ships the pull request.",
    bodyStrong: "This site was designed and built by that team.",
    topology: {
      lead: { label: "lead · plans", variant: "lead" },
      fan: [
        { label: "frontend", variant: "default" },
        { label: "backend", variant: "default" },
        { label: "qa", variant: "default" },
        { label: "security", variant: "default" },
      ],
      result: { label: "pull request → merged", variant: "pr" },
    },
  },
};
