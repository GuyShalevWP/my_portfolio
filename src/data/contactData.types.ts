export interface ContactDataTypes {
    linkedin: ContactLinksTypes;
    github: ContactLinksTypes;
    email: ContactLinksTypes;
}

interface ContactLinksTypes {
    icon: string;
    alt: string;
    link: string;
}