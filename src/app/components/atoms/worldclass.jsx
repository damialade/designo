"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./worldclass.module.scss";

const WorldClassHero = () => {
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
      : "/images/herotablet.png";

  const sideImage =
    screenSize === "desktop"
      ? "/images/worldclassdesktop.png"
      : screenSize === "tablet"
      ? "/images/worldclasstablet.png"
      : "/images/worldclassmobile.png";

  // Define dynamic width and height for each screen size
  const imageDimensions = {
    desktop: { width: 512, height: 689 },
    tablet: { width: 689, height: 320 },
    mobile: { width: 375, height: 320 },
  };

  // Get current dimensions based on screen size
  const { width, height } = imageDimensions[screenSize];

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.contentWrapper}>
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
        <div className={styles.textContent}>
          <h2>Word Class Talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br />
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand&apos;s story and mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldClassHero;
