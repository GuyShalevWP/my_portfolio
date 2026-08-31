import { receipts } from "@data/receipts";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import ReceiptRow from "./components/receipt-row/ReceiptRow";
import { ReceiptList } from "./ReceiptsSection.styles";

/** Already out there — three text rows with links. Not cards. */
const ReceiptsSection = () => {
  return (
    <SectionFrame id="receipts" ariaLabelledBy="receipts-heading">
      <SectionHeading
        id="receipts-heading"
        heading={receipts.heading}
        kicker={receipts.kicker}
      />
      <ReceiptList>
        {receipts.rows.map((row) => (
          <ReceiptRow key={row.key} row={row} />
        ))}
      </ReceiptList>
    </SectionFrame>
  );
};

export default ReceiptsSection;
