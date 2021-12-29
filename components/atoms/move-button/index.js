import React from 'react';
import  ArrowRight from '../../icons/ArrowRight';
import  ArrowLeft from '../../icons/ArrowLeft';
import css from './move-button.module.scss';

/**
 * Atom MoveButton
 * 
 * Button used for moving carousels
 */
function MoveButton (props) {
  const {
    className = "",
    variant = "right",
    type = "light",
    children,
    ...other
  } = props;

  const buttonLabel = {
    right: "Botão direcionando para a direita",
    left: "Botão direcionando para a esquerda"
  };

  return <button
    className={`${css["atom__move-button-container"]} ${className}`}
    data-variant={variant}
    data-type={type}
    aria-label={buttonLabel[variant]}
    title={buttonLabel[variant]}
    {...other}
  >
    {variant === "right" ? <ArrowRight /> : <ArrowLeft />}
    {children}
  </button>;
}

export default MoveButton;
