import React from 'react';
import Section from '../../atoms/section';
import Logo from '../../icons/Logo';
import Link from 'next/link';
import css from "./navbar.module.scss";


function Navbar (props) {
  const {
    className = "",
    children,
    style,
    ...other
  } = props;

  return <Section
    className={`${css['molecule__navbar-container']} ${className}`}
    data-style={style}
    {...other}
  >
    <nav className={css['navbar-container']}>
      <div className={css['logo-container']}>
       <image className={css['logo-el']}><Logo/></image> 
       <p className={css['content']}>Aline Ribeiro</p>
      </div>
    
      <div className={css['menu-burger-container']}>
        =
      </div>
    </nav>
    <div className={css['menu-items-container']}>
        <ul className={css['menu-items-list']}>
          <li><Link href="/">home</Link></li>
        </ul>
      </div>

  </Section>;
}

export default Navbar;
