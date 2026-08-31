import type { SpecSheetContent } from "../types/SpecRow";

export const specSheet: SpecSheetContent = {
  heading: "What it's made of",
  kicker: "Specification",
  rows: [
    {
      label: "Frontend",
      values: ["React", "TypeScript", "TanStack Query", "styled-components", "HTML", "CSS"],
    },
    {
      label: "Backend",
      values: ["NestJS", "Node.js", "Express.js", "REST APIs"],
    },
    {
      label: "Data & infra",
      values: ["Redis (caching)", "Kafka (async messaging)", "Kubernetes (microservices)", "MongoDB", "SQL / MySQL"],
    },
    {
      label: "Languages",
      values: ["JavaScript", "TypeScript", "Python"],
    },
    {
      label: "AI & agents",
      values: ["Claude Code", "Gemini", "Ollama", "Cursor", "OpenAI API", "TensorFlow"],
    },
    {
      label: "Spoken",
      values: ["Hebrew (native)", "English (fluent)"],
    },
  ],
};
