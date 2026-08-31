import { contact } from "@data/contact-links";
import ButtonLink from "../../components/button-link/ButtonLink";
import SectionFrame from "../../components/section-frame/SectionFrame";
import SectionHeading from "../../components/section-heading/SectionHeading";
import ContactRowItem from "./components/contact-row-item/ContactRowItem";
import { CtaRows, CtaWrap, Intro } from "./ContactSection.styles";

/** Get it — email / GitHub / LinkedIn rows and the closing CTA. */
const ContactSection = () => {
  return (
    <SectionFrame id="contact" ariaLabelledBy="contact-heading">
      <SectionHeading id="contact-heading" heading={contact.heading} kicker={contact.kicker} />
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
