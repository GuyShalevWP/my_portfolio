import CapabilitySection from "@features/capability-section/CapabilitySection";
import ContactSection from "@features/contact-section/ContactSection";
import DemoSection from "@features/demo-section/DemoSection";
import HeroSection from "@features/hero-section/HeroSection";
import ReceiptsSection from "@features/receipts-section/ReceiptsSection";
import SpecSheetSection from "@features/spec-sheet-section/SpecSheetSection";
import TopBar from "@layouts/top-bar/TopBar";
import { Foot, Main, Wrap } from "@layouts/page-layout/PageLayout.styles";

const PageLayout = () => {
  return (
    <>
      <TopBar />
      <Main className="allow-selection">
        <Wrap>
          <HeroSection />
          <CapabilitySection />
          <SpecSheetSection />
          <DemoSection />
          <ReceiptsSection />
          <ContactSection />
          <Foot>
            GUY SHALEV · FULL-STACK DEVELOPER
            <br />
            DESIGNED AND BUILT WITH A MULTI-AGENT TEAM. THE LEAD AGENT WROTE THE TICKETS.
          </Foot>
        </Wrap>
      </Main>
    </>
  );
};

export default PageLayout;
