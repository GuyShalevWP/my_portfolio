import { capabilities } from "@data/capabilities";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import CapabilityColumn from "./components/capability-column/CapabilityColumn";
import TopologyDiagram from "./components/topology-diagram/TopologyDiagram";
import { Caps, WideBody, WideHeading, WidePanel, WideText } from "./CapabilitySection.styles";

/** What it does — three equal capability columns plus the wide "builds
 * agents, not prompts" panel. Deliberately three equal-width columns
 * with one type scale: the reviewer compared this against an asymmetric
 * grid and chose this one. Do not rebalance it. */
const CapabilitySection = () => {
  return (
    <SectionFrame id="capability" ariaLabelledBy="capability-heading">
      <SectionHeading id="capability-heading" heading={capabilities.heading} />
      <Caps>
        {capabilities.items.map((item) => (
          <CapabilityColumn key={item.label} item={item} />
        ))}
      </Caps>
      <WidePanel>
        <WideText>
          <WideHeading>{capabilities.wide.heading}</WideHeading>
          <WideBody>
            {capabilities.wide.body} <strong>{capabilities.wide.bodyStrong}</strong>
          </WideBody>
        </WideText>
        <TopologyDiagram topology={capabilities.wide.topology} />
      </WidePanel>
    </SectionFrame>
  );
};

export default CapabilitySection;
