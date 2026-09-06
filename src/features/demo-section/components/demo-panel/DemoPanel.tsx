import StatusDot from "../../../../components/status-dot/StatusDot";
import KeysLegend from "../keys-legend/KeysLegend";
import { DemoHeader, DemoPanelContainer, Meta, Rule, Title } from "./DemoPanel.styles";
import type { DemoPanelProps } from "./DemoPanel.types";

/**
 * The shared frame every demo panel uses: header, meta line, rule copy,
 * the playable game passed in as `children`, then the keycap legend.
 * The panel is a flex column with the legend on `margin-top: auto`, so
 * it pins to the shared bottom edge of both panels regardless of how
 * tall either game's own content is — the two panels are matched height
 * by construction (the grid they sit in stretches by default), never a
 * fixed height.
 */
const DemoPanel = ({ content, children }: DemoPanelProps) => {
  return (
    <DemoPanelContainer>
      <DemoHeader>
        <StatusDot variant="signal" />
        <Title>{content.title}</Title>
      </DemoHeader>
      <Meta>{content.meta}</Meta>
      <Rule>{content.rule}</Rule>
      {children}
      <KeysLegend items={content.keys} />
    </DemoPanelContainer>
  );
};

export default DemoPanel;
