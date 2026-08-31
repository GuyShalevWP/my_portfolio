import StatusDot from "../../../../components/status-dot/StatusDot";
import {
  DemoHeader,
  DemoPanelContainer,
  Meta,
  Placeholder,
  PlaceholderLabel,
  PlaceholderText,
  Rule,
  Title,
} from "./DemoPanel.styles";
import type { DemoPanelProps } from "./DemoPanel.types";

/**
 * The frame and the panel container only — the interactive board is
 * stage 3. The interior is a clearly-marked static placeholder, not a
 * mock of the finished game.
 */
const DemoPanel = ({ content }: DemoPanelProps) => {
  return (
    <DemoPanelContainer>
      <DemoHeader>
        <StatusDot variant="signal" />
        <Title>{content.title}</Title>
      </DemoHeader>
      <Meta>{content.meta}</Meta>
      <Rule>{content.rule}</Rule>
      <Placeholder>
        <StatusDot variant="queued" />
        <PlaceholderLabel>Stage 3 · queued</PlaceholderLabel>
        <PlaceholderText>{content.placeholder}</PlaceholderText>
      </Placeholder>
    </DemoPanelContainer>
  );
};

export default DemoPanel;
