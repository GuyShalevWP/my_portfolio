import { specSheet } from "@data/spec-sheet";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import SpecTableRow from "./components/spec-table-row/SpecTableRow";
import { SpecTable } from "./SpecSheetSection.styles";

/** What it's made of — named values only, no proficiency bars or percentages. */
const SpecSheetSection = () => {
  return (
    <SectionFrame id="spec" ariaLabelledBy="spec-heading">
      <SectionHeading id="spec-heading" heading={specSheet.heading} kicker={specSheet.kicker} />
      <SpecTable>
        {specSheet.rows.map((row) => (
          <SpecTableRow key={row.label} row={row} />
        ))}
      </SpecTable>
    </SectionFrame>
  );
};

export default SpecSheetSection;
