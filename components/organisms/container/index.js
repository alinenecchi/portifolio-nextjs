import React from 'react';
import Section from '../../atoms/section';
import css from "./container.module.scss";

function Container (props) {
  const {
    className = "",
    style,
    children,
    ...other
  } = props;
 
  return <Section
    className={`${css['organism__container']} ${className}`}
    data-style={style}
    {...other}
  >
      <h1>Front end developer</h1>
      <h2>Portifólio</h2>
      <h3>em desenvolvimento</h3>
     
    </Section>
}

export default Container;