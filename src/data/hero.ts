import type { HeroContent } from "../types/Hero";

export const hero: HeroContent = {
  intro: "Most developers use AI.",
  headlineLead: "I build the team",
  headlineTail: "that",
  headlineAccent: "uses it.",
  sub: "Full-stack developer. I ship production features into a Kubernetes estate, and build the agent teams that ship their own.",
  primaryCta: { label: "Play the demos", href: "#demo" },
  secondaryCta: { label: "Email Guy", href: "mailto:guyshalevwp@gmail.com" },
  console: {
    label: "agent-team",
    status: "live",
    rows: [
      { name: "lead", description: "plans the ticket, delegates", status: "running" },
      {
        name: "frontend",
        description: "React, TypeScript\nstyled-components",
        status: "building",
      },
      {
        name: "backend",
        description: "NestJS, REST\nRedis, Kafka",
        status: "building",
      },
      { name: "qa", description: "live browser verification", status: "queued" },
      {
        name: "security",
        description: "vulnerability review",
        status: "queued",
        hideOnMobile: true,
      },
    ],
    footer: "5 agents, 1 human, and it opens the PR.",
  },
};
