import ComingSoon from "@features/coming-soon/ComingSoon";
import ContactArea from "@features/contact-area/ContactArea";
import { PageLayoutContainer } from "./PageLayout.styles";

const PageLayout = () => {
  return (
    <PageLayoutContainer>
      <header>
        <h1 style={{ fontSize: "5rem", textAlign: "center" }}>Guy Shalev</h1>
        <h2 style={{ fontSize: "2rem", textAlign: "center" }}>Web Developer</h2>
      </header>
      <ComingSoon text="Coming Soon..." />
      <ContactArea />
    </PageLayoutContainer>
  );
};

export default PageLayout;
