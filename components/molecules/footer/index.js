import Section from '../../../components/atoms/section';
import React from 'react';
import css from './footer.module.scss';

function Footer (props) {
  const {
    className = "",
    style,
    children,
    ...other
  } = props;

  return <div
    className={`${css['molecule__footer-container']} ${className}`}
    data-style={style}
    {...other}
  >
    <Section>
      <div className={css['content']}>

        <div className={css['location']}>
          <span className={css['highlight']}>Porto Alegre<br/></span>
          <p className={css['smallText']}>
            Brasil<br/>
          </p>
        </div>

        <div className={css['contact']}>
          <a href="mailto:alinenecchi@gmail.com" className={css['mail']}>alinenecchi@gmail.com</a>
          <p className={css['smallText']}>
            <a href="https://www.linkedin.com/in/aline-necchi/" target="blanck" className={css['link']}>LinkedIn</a>&nbsp;/&nbsp;
            <a href="https://github.com/alinenecchi" target="blanck" className={css['link']}>GitHub</a>
          </p>
        </div>
        
      </div>
    </Section>
  </div>;
}

export default Footer;
