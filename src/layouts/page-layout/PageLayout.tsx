import { PageLayoutContainer } from "@layouts/page-layout/PageLayout.styles";
import Header from "@layouts/page-layout/header/Header";
import Content from "@layouts/page-layout/content/Content";

const PageLayout = () => {
  return (
    <PageLayoutContainer>
      <Header />
      <Content />
    </PageLayoutContainer>
  );
};

export default PageLayout;
