import React, { useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { ButtonCircleArrow } from "../ButtonCircleArrow";

import styles from "./styles.module.scss";

const SlideShow = () => {
  const slideRef = useRef();

  const slideImages = [
    "/images/sliderHomeSistema/banner1.webp",
    "/images/sliderHomeSistema/banner2.webp",
    "/images/sliderHomeSistema/banner3.webp",
    "/images/sliderHomeSistema/banner4.webp",
    "/images/sliderHomeSistema/banner5.webp",
    "/images/sliderHomeSistema/banner6.webp",
    "/images/sliderHomeSistema/banner7.webp",
    "/images/sliderHomeSistema/banner8.webp",
    "/images/sliderHomeSistema/banner9.webp",
    "/images/sliderHomeSistema/banner10.webp",
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
