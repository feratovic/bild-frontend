// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../styles/Slideshow.module.css';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import {LeftArrowIcon, LinkIcon, RightArrowIcon} from '../common/icons';
import {placeholderImage} from '../common/config';
import {useEffect, useRef, useState} from 'react';

export default function Slideshow({slideshows}) {
  const [active, setActive] = useState(0);
  const swipe = useRef(null);

  const changeSlide = (e, index) => {
    let temp_swipe = swipe && swipe.current && swipe.current.swiper;
    let value = 0;

    if (active + index >= slideshows.length) value = 0;
    else if (active + index < 0) value = slideshows.length - 1;
    else value = active + index;

    setActive(value);

    if (temp_swipe) {
      if (index === -1) temp_swipe.slidePrev();
      else temp_swipe.slideNext();
    }
  };

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView="auto"
      centeredSlides={true}
      roundLengths={true}
      loop={true}
      onSwiper={(swiper) => setActive(swiper.realIndex)}
      onSlideChange={(swiper) => setActive(swiper.realIndex)}
      id={styles.slideshow}
      ref={swipe}
    >
      {slideshows &&
        slideshows.length > 0 &&
        slideshows.map((item, i) => {
          return (
            <SwiperSlide key={i} className={styles.item}>
              <div className={styles.image_container}>
                <Image
                  src={item.cover || placeholderImage()}
                  alt={item.alt || ''}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={item.cover || placeholderImage()}
                  className="card-img"
                />
              </div>
              <div
                className={`${styles.card_overlay} ${
                  active === i && styles.active_slide
                }`}
              >
                <div>
                  <a
                    href={item.link || ''}
                    aria-label="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      {slideshows && slideshows.length > 0 && (
        <div id={styles.controls}>
          <div
            id={styles.controls_container}
            className="row align-items-center"
          >
            <div className="col-1">
              <LeftArrowIcon onClick={(e) => changeSlide(e, -1)} />
            </div>
            <div id={styles.controls_content} className="col-10">
              <h4>{slideshows[active].title || ''}</h4>
              <p>{slideshows[active].description || ''}</p>
            </div>
            <div className="col-1">
              <RightArrowIcon onClick={(e) => changeSlide(e, 1)} />
            </div>
          </div>
        </div>
      )}
    </Swiper>
  );
}
