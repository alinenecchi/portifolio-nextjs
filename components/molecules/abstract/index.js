import React from 'react';

import Title from '../../atoms/title';

// loading the sass style fot the component
import css from './abstract.module.scss';

/**
 * Molecule Abstract
 * 
 * An abstract is basically a title with a short description bellow it.
 */
function Abstract (props) {
  const {
    className = "",
    title,
    center = null,
    dark = null,
    level = "1",
    children,
    ...other
  } = props;

  return <div
    className={`${css["molecule__abstract-container"]} ${className}`}
    data-theme={dark}
    data-center={center}
    {...other}
  >
    {(typeof title === 'string' || title instanceof String) ? (
      <Title level={level} aria-label={title}>{title}</Title>
    ): (<>
      {title}
    </>)}
    <div className={css["children"]}>{children}</div>
  </div>;
}

export default Abstract;
