import React from "react";
import * as iconsList from "../";

import "./styles.scss";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Assets/Icons",
  // component: Styleguide,
};

function Icons() {
  return (
    <div className="icons-list-story">
      {Object.keys(iconsList).map((iconName, i) => {
        const Icon = iconsList[iconName];

        return (
          <div className="icon-container-story" key={i}>
            <Icon />
            {iconName}
          </div>
        );
      })}
    </div>
  );
}

export { Icons as All };
