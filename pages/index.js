import React from "react";

import css from "../utils/styles/home.module.scss";

export default function Home(props) {
  const { className = "", children, ...other } = props;

  return (
    <div className={`${css["page__home-container"]} ${className}`} {...other}>
      <h1>Welcome to My App</h1>
      <p>This is the home page.</p>
    </div>
  );
}
