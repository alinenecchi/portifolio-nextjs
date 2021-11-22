import React from 'react';

// loading the sass style fot the component
import css from './grid.module.scss';

function Grid (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css['atom__grid-container']} ${className}`}
    {...other}
  >
    {children}
  </div>;
}

export default Grid;
