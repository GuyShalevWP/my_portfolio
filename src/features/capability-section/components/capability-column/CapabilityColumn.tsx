import { Body, Column, Heading, Kicker } from "./CapabilityColumn.styles";
import type { CapabilityColumnProps } from "./CapabilityColumn.types";

const CapabilityColumn = ({ item }: CapabilityColumnProps) => {
  return (
    <Column>
      <Kicker variant="signal">{item.label}</Kicker>
      <Heading>
        {item.headingLead}
        <br />
        {item.headingTail}
      </Heading>
      <Body>{item.body}</Body>
    </Column>
  );
};

export default CapabilityColumn;
