import React from 'react';
import css from './loader.module.scss';

function Loader (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css['atom__loader-container']} ${className}`}
    {...other}
  >
    <div className="loader-circle-container"></div>
    <div className="loader-label-container">
      {children}
    </div>
  </div>;
}

export default Loader;
