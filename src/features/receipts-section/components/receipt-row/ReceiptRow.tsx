import { Description, Key, Link, PlainLabel, Row } from "./ReceiptRow.styles";
import type { ReceiptRowProps } from "./ReceiptRow.types";

/** One text row with an optional real link — never a card, never a
 * thumbnail. A row with no `href` (the a11y toolkit) renders as plain
 * text, not a link. */
const ReceiptRow = ({ row }: ReceiptRowProps) => {
  return (
    <Row>
      <Key variant="signal">{row.key}</Key>
      <div>
        {row.href ? (
          <Link href={row.href} target="_blank" rel="noreferrer">
            {row.label}
          </Link>
        ) : (
          <PlainLabel>{row.label}</PlainLabel>
        )}
        <Description>{row.description}</Description>
      </div>
    </Row>
  );
};

export default ReceiptRow;
