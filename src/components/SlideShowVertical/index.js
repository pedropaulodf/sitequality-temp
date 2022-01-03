import React, { useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { ButtonCircleArrow } from "../ButtonCircleArrow";

import styles from './styles.module.scss';

const SlideShowVertical = () => {
  const slideRef = useRef();

  const slideImages = [
    "/images/sliderHomeApp/banner8.webp",
    "/images/sliderHomeApp/banner9.webp",
    "/images/sliderHomeApp/banner10.webp",
    "/images/sliderHomeApp/banner11.webp",
    "/images/sliderHomeApp/banner1.webp",
    "/images/sliderHomeApp/banner2.webp",
    "/images/sliderHomeApp/banner3.webp",
    "/images/sliderHomeApp/banner4.webp",
    "/images/sliderHomeApp/banner5.webp",
    "/images/sliderHomeApp/banner6.webp",
    "/images/sliderHomeApp/banner7.webp",
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    prevArrow: <ButtonCircleArrow left />,
    nextArrow: <ButtonCircleArrow />
  };

  return (
    <div className={styles.sliderContainer} >
      <Fade ref={slideRef} {...properties}>
        {slideImages.map((each, index) => (
            <div key={index} className="each-slide" style={{height: '100%'}}>
              <img src={each} alt="Print App do Sócio" style={{height: '100%',width: '100%',objectFit: 'fill'}}/>
            </div>
          ))}
      </Fade>
    </div>
  );
};

export default SlideShowVertical;
