import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useScreenSizeClass } from "./utils/media-query";
import useTheme from "./services/theme";
import ScrollToTop from "./components/ToggleRight";
import "./App.css";
import routes from "./app-routes";
import { SideNav } from "./components";
import { Routes as Switch, Route } from "react-router-dom";

export const ColorModeContext = React.createContext();

export default function App() {
  const screenSizeClass = useScreenSizeClass();
  const { themeColor, setTheme, changeTheme } = useTheme();

  React.useEffect(() => {
    themeColor === "light"
      ? document.body.classList.add("dx-swatch-light")
      : document.body.classList.add("dx-swatch-dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={{ setTheme, themeColor, changeTheme }}>
        <div className={`app ${screenSizeClass} `}>
          <SideNav />
          <Switch>
            {routes.map(({ layoutPath, layoutComponent, path, component }) => (
              <Route key={path} path={layoutPath} element={layoutComponent}>
                <Route path={path} element={component} />
              </Route>
            ))}
          </Switch>
          <ScrollToTop />
        </div>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}
