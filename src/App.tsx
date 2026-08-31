import { useDisableContextMenu } from "@hooks/useDisableContextMenu";
import LoadingPage from "@layouts/loading/LoadingPage";
import { GlobalStyles, theme } from "@styles/GlobalStyles";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";

const PageLayout = lazy(() => import("@layouts/page-layout/PageLayout"));

const App = () => {
  useDisableContextMenu();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<LoadingPage />}>
        <PageLayout />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
