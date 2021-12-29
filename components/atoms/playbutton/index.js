import React from 'react';
import PlayArrow from '../../icons/PlayArrow';

// loading the sass style fot the component
import css from './playbutton.module.scss';

/**
 * Atom PlayButton
 * 
 * Button made for playing videos
 */
function PlayButton (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <button
    className={`${css["atom__playbutton-container"]} ${className}`}
    aria-label={"Play-Button"}
    {...other}
  >
    <PlayArrow/>
  </button>;
}

export default PlayButton;
