import React from 'react';

import Bullet from '../../atoms/bullet';

// loading the sass style fot the component
import css from './bullet-set.module.scss';

/**
 * Molecule BulletSet
 * 
 * A set of bullets used in carousel.
 */
function BulletSet (props) {
  const {
    className = "",
    selected = 0,
    list = [],
    dark = null,
    round = null,
    onClick,
    ...other
  } = props;

  const handleMoveToSelectedSlide = (index) => {
    onClick(index);
  };

  return <div
    className={`${css["molecule__bullet-set-container"]} ${className}`}
    data-theme={dark}
    {...other}
  >
    {
      list.map((_, index) => (
        <Bullet
          key={index}
          selected={index === selected ? true : null}
          label = {`Botão para a página ${index + 1}`}
          dark={dark}
          round={round}
          onClick={() => handleMoveToSelectedSlide(index)}
          className={css[round ? "bullet-round" : "bullet"]}
        />
      ))
    }
  </div>;
}

export default BulletSet;
