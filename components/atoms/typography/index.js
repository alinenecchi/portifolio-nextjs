import React from 'react';
import css from './typography.module.scss';

function Typography (props) {
  const {
    className = "",
    level = "1",
    bold = null,
    ariaLabel = "",
    children,
    ...other
  } = props;

  return <span
    className={`${css["atom__typography-container"]} ${className}`}
    data-level={level}
    data-bold={bold}
    aria-label={ariaLabel}
    {...other}
  >
    {children}
  </span>;
}

export default Typography;
