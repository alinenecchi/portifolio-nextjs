import React from 'react';
import css from './tophat.module.scss';

function Tophat (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <h3
    className={`${css['atom__tophat-container']} ${className}`}
    {...other}
  >
    {children}
  </h3>;
}

export default Tophat;
