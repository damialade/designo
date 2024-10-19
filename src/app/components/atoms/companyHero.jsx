"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./companyHero.module.scss";

const CompanyHero = () => {
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
      ? "/images/aboutdesktop.png"
      : screenSize === "tablet"
      ? "/images/aboutherotablet.png"
      : "/images/aboutbgmobile.png";

  const sideImage =
    screenSize === "desktop"
      ? "/images/aboutusdesktop.png"
      : screenSize === "tablet"
      ? "/images/abouttablet.png"
      : "/images/aboutmobile.png";

  // Define dynamic width and height for each screen size
  const imageDimensions = {
    desktop: { width: 517, height: 512 },
    tablet: { width: 687, height: 320 },
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
        <div className={styles.textContent}>
          <h1>About Our Company</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our clients'
            audiences.
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

export default CompanyHero;
