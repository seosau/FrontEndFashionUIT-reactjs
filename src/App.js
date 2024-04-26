import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes, adminRoutes } from "./routes/routes";
import { DefaultLayout } from "./layouts";
import { Fragment } from "react";

function App() {
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {decodedToken?.userRole === "admin"
          ? adminRoutes.map((route, index) => {
              const Layout = route.layout || DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })
          : null}
      </Routes>
    </Router>
  );
}

export default App;
