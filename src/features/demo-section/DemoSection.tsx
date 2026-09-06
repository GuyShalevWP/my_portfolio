import { demo } from "@data/demo";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import DemoPanel from "./components/demo-panel/DemoPanel";
import Dispatch from "./components/dispatch/Dispatch";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import { Demos, Intro } from "./DemoSection.styles";

/**
 * Try it before you talk to it — the section frame, the two panel
 * frames, and the two playable games inside them. Immediately follows
 * the full-bleed loadout band, so its own top hairline is suppressed
 * (the band's bottom hairline already does that job).
 */
const DemoSection = () => {
  return (
    <SectionFrame id="demo" ariaLabelledBy="demo-heading" noTopBorder>
      <SectionHeading id="demo-heading" heading={demo.heading} noMarginBottom />
      <Intro>{demo.intro}</Intro>
      <Demos>
        <DemoPanel content={demo.panels.ticTacToe}>
          <TicTacToe />
        </DemoPanel>
        <DemoPanel content={demo.panels.dispatch}>
          <Dispatch />
        </DemoPanel>
      </Demos>
    </SectionFrame>
  );
};

export default DemoSection;
