import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("eerer");

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Main</Link>
      <Link to="/about">About site</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
