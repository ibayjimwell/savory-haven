import { pagesConfig } from "./pages.config";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const { Pages, Layout, mainPage } = pagesConfig;

// Fallback safety
const mainPageKey = mainPage && Pages[mainPage] ? mainPage : Object.keys(Pages)[0];
const MainPageComponent = Pages[mainPageKey] ?? (() => <></>);

const LayoutWrapper = ({ children, currentPageName }) =>
  Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPageComponent />
            </LayoutWrapper>
          }
        />

        {/* Auto-generated routes */}
        {Object.entries(Pages).map(([pageName, PageComponent]) => (
          <Route
            key={pageName}
            path={`/${pageName}`}
            element={
              <LayoutWrapper currentPageName={pageName}>
                <PageComponent />
              </LayoutWrapper>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
