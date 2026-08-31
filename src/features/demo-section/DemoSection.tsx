import { demo } from "@data/demo";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import DemoPanel from "./components/demo-panel/DemoPanel";
import { Demos, Intro } from "./DemoSection.styles";

/**
 * Try it before you talk to it — section frame and the two panel
 * containers only. The interactive tic-tac-toe and dispatch games ship
 * in stage 3; this renders their frames with static placeholders.
 */
const DemoSection = () => {
  return (
    <SectionFrame id="demo" ariaLabelledBy="demo-heading">
      <SectionHeading id="demo-heading" heading={demo.heading} kicker={demo.kicker} />
      <Intro>{demo.intro}</Intro>
      <Demos>
        <DemoPanel content={demo.panels.ticTacToe} />
        <DemoPanel content={demo.panels.dispatch} />
      </Demos>
    </SectionFrame>
  );
};

export default DemoSection;
