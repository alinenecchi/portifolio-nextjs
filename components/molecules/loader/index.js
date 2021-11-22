import React from 'react';
import LoaderAtom from '../../atoms/loader';
import css from './loader.module.scss';

function Loader (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css['molecule__loader-container']} ${className}`}
    {...other}
  >
    <LoaderAtom>
      {children}
    </LoaderAtom>
  </div>;
}

export default Loader;
