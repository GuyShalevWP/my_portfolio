import { lazy, Suspense } from "react";
import LoadingPage from "./layouts/loading/LoadingPage";
import { GlobalStyles } from "./styles/GlobalStyles";

const PageLayout = lazy(() => import("./layouts/page-layout/PageLayout"));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<LoadingPage />}>
        <PageLayout />
      </Suspense>
    </>
  );
};

export default App;
