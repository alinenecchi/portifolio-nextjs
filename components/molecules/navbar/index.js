import React, {useState, useEffect} from 'react';
import Section from '../../atoms/section';
import Button from '../../atoms/button';
import Link from 'next/link';
import css from "./navbar.module.scss";


function Navbar (props) {
  const {
    className = "",
    children,
    style,
    ...other
  } = props;

  const [themeState, setThemeState] = useState();

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
  })

  return <Section
    className={`${css['molecule__navbar-container']} ${className}`}
    data-style={style}
    {...other}
  >
    <nav className={css['navbar-container']}>
      <div className={css['logo-container']}>
       <image className={css['logo-el']}></image> 
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
        <ul className={css['menu-items-list']}>
          <li><Link href="/">blog</Link></li>
        </ul>
        <ul>
          <li>
           <div className={css['button']}>
            {
              themeState === true 
              ?
              <Button style="light" onClick={handleChange}>
                {themeState ? 'Light Mode' : 'Dark Mode'}
              </Button>
              : 
              <Button onClick={handleChange}>
                {themeState ? 'Light Mode' : 'Dark Mode'}
              </Button>
            }
            </div>
          </li>
        </ul>
      </div>

  </Section>;
}

export default Navbar;
