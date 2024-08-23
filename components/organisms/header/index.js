import React from "react";
import Section from "components/atoms/section";
import MainNavigation from "components/molecules/navbar";

import css from "./header.module.scss";

/**
 * Organism Header
 *
 */
function Header(props) {
  const { className = "", style, ...other } = props;

  return (
    <header className={`${css["header-wrapper"]} ${className}`} {...other}>
      <Section tag="div" className={css["header-container"]} data-style={style}>
        <div className={css["header-logo"]}>
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="20" fill="#4CAF50" />
            <text x="70" y="35" font-family="Arial, sans-serif" font-size="24">
              MeuLogo
            </text>
          </svg>
        </div>

        <div className={css["header-navigation"]}>
          <MainNavigation />
        </div>
      </Section>
    </header>
  );
}

export default Header;
