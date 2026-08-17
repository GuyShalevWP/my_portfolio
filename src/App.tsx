import { useDisableContextMenu } from "@hooks/useDisableContextMenu";
import LoadingPage from "@layouts/loading/LoadingPage";
import { GlobalStyles } from "@styles/GlobalStyles";
import { lazy, Suspense } from "react";

const PageLayout = lazy(() => import("@layouts/page-layout/PageLayout"));

const App = () => {
  useDisableContextMenu();

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
