import type { DemoSectionContent } from "../types/Demo";

export const demo: DemoSectionContent = {
  heading: "Try it before you talk to it.",
  kicker: "Interactive demo",
  intro: "Two things you can actually play. The second one is my job.",
  panels: {
    ticTacToe: {
      title: "Tic-tac-toe",
      meta: "OPPONENT · agent.tictactoe · difficulty: fair",
      rule: "The warm-up. It tells you why it played where it played.",
    },
    dispatch: {
      title: "Dispatch",
      meta: "YOU ARE THE LEAD AGENT",
      rule: "A ticket comes in. Pick the specialists and the order you'd run them in. Your team executes your plan and reports back.",
    },
  },
};
