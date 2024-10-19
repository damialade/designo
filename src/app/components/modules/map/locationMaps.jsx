"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./locationMaps.module.scss";

// Location data for different devices
const locations = [
  {
    title: "Canada",
    address: "123 Maple St, Toronto, Ontario",
    contact: "Phone: +1 123 456 7890",
    mapDesktop: "/images/canadadesktop.png",
    mapTablet: "/images/canadatablet.png",
    mapMobile: "/images/canadamobile.png",
    bgDesktop: "/images/locationbgdesktop.png",
    bgMobile: "/images/locationbgmobile.png",
  },
  {
    title: "Australia",
    address: "456 Sydney St, Sydney, NSW",
    contact: "Phone: +61 987 654 321",
    mapDesktop: "/images/ausdesktop.png",
    mapTablet: "/images/austablet.png",
    mapMobile: "/images/ausmobile.png",
    bgDesktop: "/images/locationbgdesktop.png",
    bgMobile: "/images/locationbgmobile.png",
  },
  {
    title: "London",
    address: "789 London Rd, London, UK",
    contact: "Phone: +44 1234 567890",
    mapDesktop: "/images/londondesktop.png",
    mapTablet: "/images/londontablet.png",
    mapMobile: "/images/londonmobile.png",
    bgDesktop: "/images/locationbgdesktop.png",
    bgMobile: "/images/locationbgmobile.png",
  },
];

const LocationMaps = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize("desktop");
      } else if (width >= 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    // Check screen size on initial load
    handleResize();

    // addeventlistener for window resizing
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.locationSection}>
      {locations.map((location, index) => {
        // Choose the correct map image based on screen size
        const mapSrc =
          screenSize === "desktop"
            ? location.mapDesktop
            : screenSize === "tablet"
            ? location.mapTablet
            : location.mapMobile;

        const backgroundImage =
          screenSize === "desktop" ? location.bgDesktop : location.bgMobile;

        // Dynamic width and height for the Image component
        const imageSize =
          screenSize === "desktop"
            ? { width: 350, height: 326 }
            : screenSize === "tablet"
            ? { width: 689, height: 326 }
            : { width: 375, height: 320 };

        return (
          <div className={styles.locationCard} key={index}>
            <div className={styles.mapContainer}>
              <Image
                src={mapSrc}
                alt={`${location.title} Map`}
                width={imageSize.width}
                height={imageSize.height}
                className={styles.mapImage}
              />
            </div>

            {/* Location Details */}
            <div
              className={styles.detailsContainer}
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              <h2>{location.title}</h2>
              <div className={styles.infoWrapper}>
                <div>{location.address}</div>
                <div>{location.contact}</div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LocationMaps;
