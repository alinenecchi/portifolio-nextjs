import React, { useState, useEffect } from 'react';
import Section from '../../atoms/section';

import MoveButton from '../../atoms/move-button';
import BulletSet from '../../molecules/bullet-set';
import Abstract from '../../molecules/abstract';
import Title from '../../atoms/title';
import Typography from '../../atoms/typography';
import PlayButton from '../../atoms/playbutton';
import Modal from '../../atoms/modal';

import {scrollIntoViewOptions} from'../../../utils/functions';

// loading the sass style fot the component
import css from './section-hero.module.scss';

const itemsData = [
  {
    title: <><strong>lorem</strong> lorem</>,
    description: 'lorem',
    image: "images/geometric.jpg",
    video: null,
  },
  {
    title: <><strong>lorem</strong> lorem</>,
    description: 'lorem',
    image: "images/light-bul.jpg",
    video: null,
  },
  {
    title: <><strong>lorem</strong> lorem</>,
    description: 'lorem',
    image: "images/workspace.jpg",
    video: null,
  },
];

function SectionHero (props) {
  const {
    className = "",
    items= [],
    center = null,
    ...other
  } = props;
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [link, setLink] = useState('');
  const [
    currentBackgroundImg,
    setCurrentBackgroundImg
  ] = useState(itemsData[0].image);

  useEffect(() => {
    const observerOptions = {
      root: document.body,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observerCallback = (entries) => {
      const entry = entries[0];
      const mobileLimit = 600;
      if (
        entry.target &&
        entry.isIntersecting
        && window.innerWidth <= mobileLimit
      ) {
        const slide = Number(entry.target.id.substr(-1));
        setCurrentSlide(slide);
        changeSlide(slide);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const slides = document.querySelectorAll('[id^="hero-slide-"]');
    slides.forEach(slide => {
      observer.observe(slide);
    });
  }, []);

  const changeSlide = (slide) => {
    document.getElementById(`hero-slide-${slide}`)
      .scrollIntoView(scrollIntoViewOptions);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((oldState) => {
      const prev = currentSlide === 0 ?
        itemsData.slice(0, 3).length - 1 :
        oldState - 1;
      setCurrentBackgroundImg(itemsData[prev].image);
      changeSlide(prev);
      return prev;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((oldState) => {
      const next = itemsData.slice(0, 3).length - 1 !== currentSlide ?
        oldState + 1 : 0;
      setCurrentBackgroundImg(itemsData[next].image);
      changeSlide(next);
      return next;
    });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setLink('');
  };

  const handleVideoOnClick = (videoLink) => {
    setLink(videoLink);
    setModalVisible(true);
  };

  return <div
    className={`${css["organism__section-hero-container"]} ${className}`}
    style={{backgroundImage: `url(${currentBackgroundImg})`}}
    {...other}
  >
    <MoveButton
      className={`${css["button"]} ${css["button-prev"]}`}
      type="arrow"
      variant="left"
      onClick={handlePrevSlide}
    />

    <ol className={css["items-list"]}>
      {
        itemsData.length > 0 &&
        itemsData.slice(0, 3).map(({title, description, image, video}, index) => (<>
          <li
            key={`hero-slide-${index}`}
            id={`hero-slide-${index}`}
            className={css["item"]}
          >
            <div
              className={`${css["item-content"]}
              ${!video && css["item-content-end"]}`}
            >
              <PlayButton
                className={css["play-button"]}
                onClick={() => handleVideoOnClick(video)}
                title="Abrir Vídeo"
              />
              <div
                className={css["item-info"]}
                data-center={center}
              >
                <Abstract
                  className={css["abstract"]}
                  level={center? "2" : "1"}
                  center={center}
                  title={<Title className={css["title"]} >{title}</Title>}
                >
                  <Typography bold className={css["description"]}>
                    {description}
                  </Typography>
                </Abstract>
              </div>
            </div>
          </li>
        </>))
      }
    </ol>

    <BulletSet
      key="bullet"
      id="bulleidt"
      selected={currentSlide}
      list={itemsData.slice(0, 3)}
      dark={true}
      round= {true}
      onClick={setCurrentSlide}
      className={css["slider"]}
    />

    <MoveButton
      className={`${css["button"]} ${css["button-next"]}`}
      type="arrow"
      onClick={handleNextSlide}
    />

    {modalVisible && <Modal link={link} onClick={handleCloseModal} />}
  </div>;
}

export default SectionHero;