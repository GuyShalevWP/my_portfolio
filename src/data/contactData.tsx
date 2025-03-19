import { ContactDataTypes } from "./contactData.types";
import linkedinIcon from "../assets/contact-icons/linkedin-icon.svg";
import githubIcon from "../assets/contact-icons/github-icon.svg";
import emailIcon from "../assets/contact-icons/email-icon.svg";

const LINKEDIN_LINK= import.meta.env.VITE_LINK_FOR_LINKEDIN;
const GITHUB_LINK = import.meta.env.VITE_LINK_FOR_GITHUB;
const EMAIL_ADR= import.meta.env.VITE_EMAIL_ADDRESS;

export const contactData: ContactDataTypes = {
    linkedin: {
        icon: linkedinIcon,
        alt: "LinkedIn",
        link: LINKEDIN_LINK,
    },
    github: {
        icon: githubIcon,
        alt: "GitHub",
        link: GITHUB_LINK,
    },
    email: {
        icon: emailIcon,
        alt: "Email",
        link: EMAIL_ADR,
    },
}

