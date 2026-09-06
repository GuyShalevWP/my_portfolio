import type { SpecSheetContent } from "../types/SpecRow";

/** The loadout band's three clusters. 26 item tiles total: 6 + 4 + 5 + 3
 * + 6 + 2. */
export const specSheet: SpecSheetContent = {
  heading: "What it's made of",
  kicker: "Loadout",
  groups: [
    {
      name: "Ships the client",
      note: "Everything the person\nactually touches.",
      slots: [
        {
          label: "Frontend",
          tiles: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "TanStack Query" },
            { name: "styled-components" },
            { name: "HTML" },
            { name: "CSS" },
          ],
        },
      ],
    },
    {
      name: "Ships the service",
      note: "The half of full-stack\nthat nobody sees.",
      slots: [
        {
          label: "Backend",
          tiles: [
            { name: "NestJS" },
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "REST APIs" },
          ],
        },
        {
          label: "Data & infra",
          tiles: [
            { name: "Redis", qualifier: "caching" },
            { name: "Kafka", qualifier: "async messaging" },
            { name: "Kubernetes", qualifier: "microservices" },
            { name: "MongoDB" },
            { name: "SQL / MySQL" },
          ],
        },
      ],
    },
    {
      name: "Ships the rest",
      note: "Languages, agents,\nand the two I speak.",
      slots: [
        {
          label: "Languages",
          tiles: [{ name: "JavaScript" }, { name: "TypeScript" }, { name: "Python" }],
        },
        {
          label: "AI & agents",
          tiles: [
            { name: "Claude Code" },
            { name: "Gemini" },
            { name: "Ollama" },
            { name: "Cursor" },
            { name: "OpenAI API" },
            { name: "TensorFlow" },
          ],
        },
        {
          label: "Spoken",
          tiles: [
            { name: "Hebrew", qualifier: "native" },
            { name: "English", qualifier: "fluent" },
          ],
        },
      ],
    },
  ],
};
