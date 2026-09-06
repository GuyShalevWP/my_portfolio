import { contact } from "@data/contact-links";
import { theme } from "@styles/GlobalStyles";
import ButtonLink from "../../components/button-link/ButtonLink";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import ContactRowItem from "./components/contact-row-item/ContactRowItem";
import { CtaRows, CtaWrap, Intro } from "./ContactSection.styles";

/** Get it — email / GitHub / LinkedIn rows and the closing CTA. Nothing
 * on this page is set at display scale except the hero headline and the
 * six section headings, so the closing button stays a regular CTA, not
 * an oversized email link. */
const ContactSection = () => {
  return (
    <SectionFrame
      id="contact"
      ariaLabelledBy="contact-heading"
      paddingTop={theme.spacing.s9}
      paddingBottom={theme.spacing.s8}
      mobilePaddingTop={theme.spacing.s8}
      mobilePaddingBottom={theme.spacing.s7}
    >
      <SectionHeading id="contact-heading" heading={contact.heading} noMarginBottom />
      <Intro>{contact.intro}</Intro>
      <CtaRows>
        {contact.rows.map((row) => (
          <ContactRowItem key={row.key} row={row} />
        ))}
      </CtaRows>
      <CtaWrap>
        <ButtonLink href={contact.cta.href}>{contact.cta.label}</ButtonLink>
      </CtaWrap>
    </SectionFrame>
  );
};

export default ContactSection;
