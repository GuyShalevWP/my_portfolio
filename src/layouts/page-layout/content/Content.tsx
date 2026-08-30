import ComingSoon from "@features/coming-soon/ComingSoon";
import ContactArea from "@features/contact-area/ContactArea";
import HireMe from "@features/hire-me/HireMe";
import TicTacToe from "@features/tic-tac-toe/TicTacToe";
import { ContentContainer } from "@layouts/page-layout/content/Content.styles";

const Content = () => {
  return (
    <ContentContainer>
      <ComingSoon text="Coming Soon..." />
      <TicTacToe />
      <HireMe />
      <ContactArea />
    </ContentContainer>
  );
};

export default Content;
