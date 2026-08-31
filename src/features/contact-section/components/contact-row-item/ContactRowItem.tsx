import { Key, Row, Value } from "./ContactRowItem.styles";
import type { ContactRowItemProps } from "./ContactRowItem.types";

const isExternal = (href: string) => href.startsWith("http");

const ContactRowItem = ({ row }: ContactRowItemProps) => {
  const external = isExternal(row.href);

  return (
    <Row>
      <Key variant="signal">{row.key}</Key>
      <Value href={row.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {row.label}
      </Value>
    </Row>
  );
};

export default ContactRowItem;
