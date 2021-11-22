import React from 'react';
import css from './button.module.scss';

function Button (props) {
  const {
    className = "",
    children,
    variant = "regular",
    small = false,
    faint = false,
    ...other
  } = props;

  return <button
    className={`${css['atom__button-container']} ${className}`}
    data-variant={variant}
    data-small={small ? 1 : null}
    data-faint={faint ? 1 : null}
    {...other}
  >
    {children}
  </button>;
}

export default Button;
