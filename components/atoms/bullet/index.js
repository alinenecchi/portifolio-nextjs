import React from 'react';

// loading the sass style fot the component
import css from './bullet.module.scss';

/**
 * Atom Bullet
 * 
 * Bullets used in carousels.
 */
function Bullet (props) {
  const {
    className = "",
    selected = null,
    dark = null,
    round = null,
    label = "",
    onClick,
    children,
    ...other
  } = props;

  return <button
    className={`${css["atom__bullet-container"]} ${className}`}
    data-selected={selected}
    data-theme={dark}
    data-round={round}
    onClick={onClick}
    aria-label={label}
    title={label}
    {...other}
  />;
}

export default Bullet;
