import StatusDot from "../../../../components/status-dot/StatusDot";
import { DemoHeader, DemoPanelContainer, Meta, Rule, Title } from "./DemoPanel.styles";
import type { DemoPanelProps } from "./DemoPanel.types";

/**
 * The shared frame every demo panel uses: header, meta line, rule copy,
 * then the playable game passed in as `children`.
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
    </DemoPanelContainer>
  );
};

export default DemoPanel;
