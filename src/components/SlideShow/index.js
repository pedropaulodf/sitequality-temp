import React, { useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { ButtonCircleArrow } from "../ButtonCircleArrow";

import styles from "./styles.module.scss";

const SlideShow = () => {
  const slideRef = useRef();

  const slideImages = [
    "/images/sliderHomeSistema/bannerGestao1.png",
    "/images/sliderHomeSistema/bannerGestao2.png",
    "/images/sliderHomeSistema/bannerGestao3.png",
    "/images/sliderHomeSistema/bannerGestao4.png",
    "/images/sliderHomeSistema/bannerGestao5.png",
    "/images/sliderHomeSistema/bannerGestao6.png",
    "/images/sliderHomeSistema/bannerGestao7.png",
    "/images/sliderHomeSistema/bannerGestao8.png",
    "/images/sliderHomeSistema/bannerGestao9.png",
    "/images/sliderHomeSistema/bannerGestao10.png",
    "/images/sliderHomeSistema/bannerGestao11.png",
    "/images/sliderHomeSistema/bannerGestao12.png",
    "/images/sliderHomeSistema/bannerGestao13.png",
    "/images/sliderHomeSistema/bannerGestao14.png",
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    prevArrow: <ButtonCircleArrow left />,
    nextArrow: <ButtonCircleArrow />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Fade ref={slideRef} {...properties}>
        {slideImages.map((each, index) => (
          <div key={index} className="each-slide" style={{ height: "100%" }}>
            <img
              src={each}
              alt="Banner Sistema Quality"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "fill",
                borderRadius: 8,
              }}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
