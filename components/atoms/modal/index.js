import React from 'react';

import {getYoutubeEmbedLink } from '../../../utils/functions/index';

// loading the sass style fot the component
import css from './modal.module.scss';

/**
 * Atom Modal
 * 
 * A modal component
 */
function Modal (props) {
  const {
    className = "",
    width = "560",
    height = "315",
    link = "",
    onClick,
    children,
    ...other
  } = props;

  return <div
    className={`${css["atom__modal-container"]} ${className}`}
    onClick={() => onClick()}
    onKeyPress={() => onClick()}
    role="button"
    tabIndex="0"
    {...other}
  >
    <button
      onClick={() => onClick()}
      aria-label="Fechar"
      title="Fechar"
      className={css["button"]}
    >X</button>
    <iframe
      className={css["iframe"]}
      width={width}
      height={height}
      src={getYoutubeEmbedLink(link)}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>;
}

export default Modal;
