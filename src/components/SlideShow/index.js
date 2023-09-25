import React, { useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { ButtonCircleArrow } from "../ButtonCircleArrow";

import styles from "./styles.module.scss";

const SlideShow = () => {
  const slideRef = useRef();

  const slideImages = [
    "/images/sliderHomeSistema/bannerGestao (1).png",
    "/images/sliderHomeSistema/bannerGestao (2).png",
    "/images/sliderHomeSistema/bannerGestao (3).png",
    "/images/sliderHomeSistema/bannerGestao (4).png",
    "/images/sliderHomeSistema/bannerGestao (5).png",
    "/images/sliderHomeSistema/bannerGestao (6).png",
    "/images/sliderHomeSistema/bannerGestao (7).png",
    "/images/sliderHomeSistema/bannerGestao (8).png",
    "/images/sliderHomeSistema/bannerGestao (9).png",
    "/images/sliderHomeSistema/bannerGestao (10).png",
    "/images/sliderHomeSistema/bannerGestao (11).png",
    "/images/sliderHomeSistema/bannerGestao (12).png",
    "/images/sliderHomeSistema/bannerGestao (13).png",
    "/images/sliderHomeSistema/bannerGestao (14).png",
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
