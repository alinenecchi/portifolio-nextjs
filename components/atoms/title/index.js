import React from 'react';
import css from './title.module.scss';

function Title (props) {
  const {
    className = "",
    children,
    level = 2,
    style,
    ...other
  } = props;

  const El = `h${level}`;

  return <El
    className={`${css['atom__title-container']} ${className}`}
    data-style={style}
    {...other}
  >
    {children}
  </El>;
}

export default Title;