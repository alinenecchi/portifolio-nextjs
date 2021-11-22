import React from 'react';
import css from './image.module.scss';
import Image from 'next/image';

function Img (props) {
  const {
    className = "",
    children,
    src = "",
    alt = "",
    tabIndex="0",
    style,
    ...other
  } = props;

  return <div
    className={`${css['atom__image-container']} ${className}`}
    data-style = {style}
    {...other}
  >
    {
      src
        ? <Image
          src={src}
          tabIndex={tabIndex}
          alt={alt}
          layout="fill"
        />
        : null
    }
  </div>;
}

export default Img;
