import React from 'react';
import css from './section.module.scss';

function Section (props) {
  const {
    className = "",
    children,
    left = '',
    right = '',
    classNameLeft = '',
    classNameRight = '',
    classNameCenter = '',
    ...other
  } = props;

  return <div
    className={`${css['atom__section-container']} ${className}`}
    {...other}
  >
    <div className={`${css['left-el']} ${className}`}>{left}</div> 
    <div className={`${css['center-el']} ${className}`}>{children}</div>
    <div className={`${css['right-el']} ${className}`}>{right}</div>
  </div>;
}

export default Section;
