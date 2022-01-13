import React, { useRef } from "react";
import { Rerousel } from "./Rerousel";

import styles from "./styles.module.scss";

export const Carousel = (props) => {
  const customerLogo = useRef(null);

  const CLIENTS_LOGOS = [
    { name: "APCEF DF", imagePath: "/images/carousel/clientsLogos/apcefdf.webp" },
    { name: "Araguaia Campestre Clube", imagePath: "/images/carousel/clientsLogos/araguaiacampestreclube.webp" },
    { name: "Assary", imagePath: "/images/carousel/clientsLogos/assary.webp" },
    { name: "Caiçaras Country Clube", imagePath: "/images/carousel/clientsLogos/caicarascountryclube.webp" },
    { name: "Caiçara de Jaú", imagePath: "/images/carousel/clientsLogos/caicarasjau.webp" },
    { name: "Cajubá", imagePath: "/images/carousel/clientsLogos/cajuba.webp" },
    { name: "Campestre Clube MA", imagePath: "/images/carousel/clientsLogos/campestreclubema.webp" },
    { name: "Clube Campestre Varginha", imagePath: "/images/carousel/clientsLogos/campestrevarginha.webp" },
    { name: "Clube de Campo Umuarama", imagePath: "/images/carousel/clientsLogos/clubecampoumuarama.webp" },
    { name: "Clube CPN", imagePath: "/images/carousel/clientsLogos/clubecpn.webp" },
    { name: "MackenzieBH", imagePath: "/images/carousel/clientsLogos/mackenziebh.webp" },
    { name: "Magic Gardens", imagePath: "/images/carousel/clientsLogos/magicgardens.webp" },
    { name: "RegatasRP", imagePath: "/images/carousel/clientsLogos/regatasrp.webp" },
  ];

  return (
    <>
      <Rerousel itemRef={customerLogo} interval={props.interval}>
        <div className={styles.leftGradient}></div>
        {CLIENTS_LOGOS.map((logo, index) => (
          <span data-tooltip={logo.name} data-flow="top" key={index}>
            <img
              src={logo.imagePath}
              ref={customerLogo}
              className={styles.clientLogo}
              alt={`Logo ${logo.name}`}
            />
          </span>
        ))}
        <div className={styles.rightGradient}></div>
      </Rerousel>
    </>
  );
};
