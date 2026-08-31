import { Key, Row, Sep, Values } from "./SpecTableRow.styles";
import type { SpecTableRowProps } from "./SpecTableRow.types";

/** One labelled row of named values — no proficiency bars, no percentages. */
const SpecTableRow = ({ row }: SpecTableRowProps) => {
  return (
    <Row>
      <Key variant="signal">{row.label}</Key>
      <Values>
        {row.values.map((value, index) => (
          <span key={value}>
            {index > 0 && <Sep aria-hidden="true">·</Sep>}
            {value}
          </span>
        ))}
      </Values>
    </Row>
  );
};

export default SpecTableRow;
