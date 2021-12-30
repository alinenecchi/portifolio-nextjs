import React, {useState, useEffect } from 'react';
import * as data from '../data/home';
import Container from '../components/organisms/container';
import SectionHero from '../components/organisms/section-hero';
import Navbar from '../components/molecules/navbar';
import Footer from '../components/molecules/footer';
import css from '../utils/styles/home.module.scss';



export default function Home(props) {

  const {
    className = "",
    sectionHero,
    children,
    ...other
  } = props;
    const [themeState, setThemeState] = useState();
    const [themeStyle, setThemeStyle] = useState("");

    useEffect(() => {
      themeState === true ? setThemeStyle("light") : setThemeStyle("")
      const getTheme = localStorage.getItem('Theme');
      if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    })


  return <div
    className={`${css['page__home-container']} ${className}`}
    {...other}
  >

      <div class="stars" ></div>
      <div class="stars2" ></div>
      <div class="stars3" ></div>
  
      <Navbar 
        className={css['navbar']} 
        style={themeStyle}
      />
      
      <SectionHero
        items={data.mock}
        center
        className={css["section-hero"]}
      />

      <Container  
        style={themeStyle}
      />
    
      <Footer
        className={css['footer']}  
        style={themeStyle}
      />

  </div>;
}
