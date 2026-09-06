import type { DemoSectionContent } from "../types/Demo";

export const demo: DemoSectionContent = {
  heading: "Try it before you talk to it.",
  intro: "Two things you can actually play. The second one is my job.",
  panels: {
    ticTacToe: {
      title: "Tic-tac-toe",
      meta: "OPPONENT · agent.tictactoe · difficulty: fair",
      rule: "The warm-up. It tells you why it played where it played.",
      keys: [
        { key: "ARROWS", action: "move" },
        { key: "ENTER", action: "place" },
      ],
    },
    dispatch: {
      title: "Dispatch",
      meta: "YOU ARE THE LEAD AGENT",
      rule: "A ticket comes in. Pick the specialists and the order you'd run them in. Your team executes your plan and reports back.",
      // No literal number-key shortcuts exist in the real game — the
      // chips are native buttons, so this describes what the keyboard
      // actually does rather than the comp's "1 TO 4" copy.
      keys: [
        { key: "TAB", action: "move between agents" },
        { key: "ENTER", action: "assign or run" },
      ],
    },
  },
};
