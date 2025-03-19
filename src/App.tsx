import { lazy, Suspense } from 'react';
import LoadingPage from './components/layouts/loading/LoadingPage';
import { GlobalStyles } from './styles/GlobalStyles';

const PageLayout = lazy(
    () => import('./components/layouts/page-layout/PageLayout')
);

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
