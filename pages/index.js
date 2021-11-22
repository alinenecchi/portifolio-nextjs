import React, {useState, useEffect } from 'react';
import Container from '../components/organisms/container';
import Section from '../components/atoms/section';
import Button from '../components/atoms/button';
import Navbar from '../components/molecules/navbar';
import Footer from '../components/molecules/footer';
import css from '../styles/home.module.scss';



export default function Home(props) {

  const {
    className = "",
    children,
    ...other
  } = props;

  const [themeState, setThemeState] = useState(false);

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

  return <div
    className={`${css['page__home-container']} ${className}`}
    {...other}
  >
    <div className={css['app']}>
      <div class="stars" ></div>
      <div class="stars2" ></div>
      <div class="stars3" ></div>
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

      <div className={css['navbar']}>
          {
            themeState === true 
            ?
            <Navbar style="light"/>
            : 
            <Navbar/>
          }
        </div>

        <div className={css['info']}>
        {
            themeState === true
            ?
            <Container style="light"/>
            : 
            <Container/>
          }
        </div>
       
   
     
    </div>
 
    < div className={css['footer']}>
        {
            themeState === true 
            ?
            <Footer style="light"/>
            : 
            <Footer/>
          }
            
    </div>


  </div>;
}
