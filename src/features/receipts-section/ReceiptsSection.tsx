import { receipts } from "@data/receipts";
import { theme } from "@styles/GlobalStyles";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import ReceiptRow from "./components/receipt-row/ReceiptRow";
import { ReceiptList } from "./ReceiptsSection.styles";

/** Already out there — three text rows with links. Not cards. Sits
 * inside the page's non-flat vertical rhythm: more top padding than its
 * neighbours (s11) since it follows straight after the demo section. */
const ReceiptsSection = () => {
  return (
    <SectionFrame
      id="receipts"
      ariaLabelledBy="receipts-heading"
      paddingTop={theme.spacing.s11}
      paddingBottom={theme.spacing.s10}
      mobilePaddingTop={theme.spacing.s9}
      mobilePaddingBottom={theme.spacing.s8}
    >
      <SectionHeading id="receipts-heading" heading={receipts.heading} />
      <ReceiptList>
        {receipts.rows.map((row) => (
          <ReceiptRow key={row.key} row={row} />
        ))}
      </ReceiptList>
    </SectionFrame>
  );
};

export default ReceiptsSection;
