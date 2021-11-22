import React from 'react';
import css from './decorative-lines.module.scss';

function DecorativeLines (props) {
  const { 
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css['atom__decorative-lines-container']} ${className}`}
    {...other}
  >
  </div>;
}

export default DecorativeLines;
