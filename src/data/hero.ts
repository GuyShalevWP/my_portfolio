import type { HeroContent } from "../types/Hero";

export const hero: HeroContent = {
  tag: "NOW SHIPPING · V1 · GUY SHALEV",
  intro: "Most developers use AI.",
  headlineLead: "I build the",
  headlineTail: "team that",
  headlineAccent: "uses it.",
  sub: "Full-stack developer. By day I ship production features into a Kubernetes microservices estate — frontend, backend services, REST APIs, the business logic underneath. The rest of the time I architect multi-agent systems that plan their own work, delegate it, and open the pull request.",
  primaryCta: { label: "Run the demo", href: "#demo" },
  secondaryCta: { label: "Talk to me", href: "#contact" },
  console: {
    label: "agent-team",
    status: "live",
    rows: [
      { name: "lead", description: "plans the ticket, delegates", status: "running" },
      {
        name: "frontend",
        description: "React · TypeScript\nstyled-components",
        status: "building",
      },
      {
        name: "backend",
        description: "NestJS · REST\nRedis · Kafka",
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
    footer: "5 AGENTS · 1 HUMAN · SHIPS PRs",
  },
};
