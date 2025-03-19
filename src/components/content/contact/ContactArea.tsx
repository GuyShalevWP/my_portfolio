import { contactData } from "../../../data/contactData";
import {
    ContactAnchor,
    ContactAreaContainer,
    ContactIcon,
} from "./ContactArea.styles";

const ContactArea = () => {
    return (
        <ContactAreaContainer>
            <ContactAnchor
                href={contactData.linkedin.link}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                <ContactIcon
                    src={contactData.linkedin.icon}
                    alt={contactData.linkedin.alt}
                />
            </ContactAnchor>
            <ContactAnchor
                href={contactData.github.link}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                <ContactIcon
                    src={contactData.github.icon}
                    alt={contactData.github.alt}
                />
            </ContactAnchor>
            <ContactAnchor
                href={contactData.email.link}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                <ContactIcon
                    src={contactData.email.icon}
                    alt={contactData.email.alt}
                />
            </ContactAnchor>
        </ContactAreaContainer>
    );
};

export default ContactArea;
