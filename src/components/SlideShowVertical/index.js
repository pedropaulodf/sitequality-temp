import React, { useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { ButtonCircleArrow } from "../ButtonCircleArrow";

import styles from "./styles.module.scss";

const SlideShowVertical = () => {
  const slideRef = useRef();

  const slideImages = [
    "/images/sliderHomeApp/app1.png",
    "/images/sliderHomeApp/app2.png",
    "/images/sliderHomeApp/app3.png",
    "/images/sliderHomeApp/app4.png",
    "/images/sliderHomeApp/app5.png",
    "/images/sliderHomeApp/app6.png",
    "/images/sliderHomeApp/app7.png",
    "/images/sliderHomeApp/app8.png",
    "/images/sliderHomeApp/app9.png",
    "/images/sliderHomeApp/app10.png",
    "/images/sliderHomeApp/app11.png",
    "/images/sliderHomeApp/app12.png",
    "/images/sliderHomeApp/app13.png",
    "/images/sliderHomeApp/app14.png",
    "/images/sliderHomeApp/app15.png",
    "/images/sliderHomeApp/app16.png",
    "/images/sliderHomeApp/app17.png",
    "/images/sliderHomeApp/app18.png",
    "/images/sliderHomeApp/app19.png",
    "/images/sliderHomeApp/app20.png",
    "/images/sliderHomeApp/app21.png",
    "/images/sliderHomeApp/app22.png",
    "/images/sliderHomeApp/app23.png",
    "/images/sliderHomeApp/app24.png",
    "/images/sliderHomeApp/app25.png",
    "/images/sliderHomeApp/app26.png",
    "/images/sliderHomeApp/app27.png",
    "/images/sliderHomeApp/app28.png",
    "/images/sliderHomeApp/app29.png",
    "/images/sliderHomeApp/app30.png",
    "/images/sliderHomeApp/app31.png",
    "/images/sliderHomeApp/app32.png",
    "/images/sliderHomeApp/app33.png",
    "/images/sliderHomeApp/app34.png",
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
              alt="Print App do Sócio"
              style={{ height: "100%", width: "100%", objectFit: "fill" }}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShowVertical;
