"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./realdeal.module.scss";

const RealDealHero = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize("desktop");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  // Set images based on screen size
  const backgroundImage =
    screenSize === "desktop"
      ? "/images/aboutherobgdesktp.png"
      : screenSize === "tablet"
      ? "/images/herotablet.png"
      : "/images/aboutusrealdealhero.png";

  const sideImage =
    screenSize === "desktop"
      ? "/images/realdealdesktop.png"
      : screenSize === "tablet"
      ? "/images/realdealtablet.png"
      : "/images/realdealimg.png";

  // Define dynamic width and height for each screen size
  const imageDimensions = {
    desktop: { width: 512, height: 689 },
    tablet: { width: 689, height: 320 },
    mobile: { width: 450, height: 320 },
  };

  // Get current dimensions based on screen size
  const { width, height } = imageDimensions[screenSize];

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2>The Real Deal</h2>
          <p>
            As strategic partners in our clients&apos; businesses, we are ready
            to take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
            <br />
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <div className={styles.imageContent}>
          <Image
            src={sideImage}
            alt="Hero Side"
            className={styles.img}
            width={width}
            height={height}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RealDealHero;
