import React, { useEffect, useState } from "react";
import Header from "../../components/organisms/header";
import Footer from "components/molecules/footer";
import Button from "components/atoms/button";

import css from "./styles.module.scss";

const Layout = ({ children }) => {
  const [themeState, setThemeState] = useState(false);
  const [themeStyle, setThemeStyle] = useState("");

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      setThemeState(true);
      document.body.classList.add("dark-mode");
    } else {
      setThemeState(false);
      document.body.classList.remove("dark-mode");
    }
    setThemeStyle(themeState ? "light" : "");
  }, [themeState]);

  const handleThemeChange = () => {
    const newThemeState = !themeState;
    setThemeState(newThemeState);
    localStorage.setItem("Theme", newThemeState ? "dark" : "light");
    document.body.classList.toggle("dark-mode", newThemeState);
  };

  return (
    <div className={css["layout-container"]}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <Header className={css["header"]} style={themeStyle}/>

      <main>{children}</main>

      <Footer className={css["footer"]} style={themeStyle} />

      <Button
        className={css["theme-toggle-button"]}
        onClick={handleThemeChange}
      >
        {themeState ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default Layout;
