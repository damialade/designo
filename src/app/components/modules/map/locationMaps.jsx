"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./locationMaps.module.scss";

// Location data for different devices
const locations = [
  {
    country: "Canada",
    title: "Designo Central Office",
    address: "3886 Wellington Street",
    postcode: "Toronto, Ontario M9C 3J5",
    contact: "P: +1 253-863-8967",
    email: "M: contact@designo.co.ca",
    mapDesktop: "/images/canadadesktop.png",
    mapTablet: "/images/canadatablet.png",
    mapMobile: "/images/canadamobile.png",
    bgDesktop: "/images/locationbgdesktop.png",
    bgMobile: "/images/locationbgmobile.png",
  },
  {
    country: "Australia",
    title: "Designo AU Office",
    address: "19 Balonne Street",
    postcode: "New South Wales 2443",
    contact: "P: (02) 6720 9092",
    email: "M: contact@designo.co.au",
    mapDesktop: "/images/ausdesktop.png",
    mapTablet: "/images/austablet.png",
    mapMobile: "/images/ausmobile.png",
    bgDesktop: "/images/locationbgdesktop.png",
    bgMobile: "/images/locationbgmobile.png",
  },
  {
    country: "United Kingdom",
    title: "Designo UK Office",
    address: "13 Colorado Way",
    postcode: "Central London SA8 9GA",
    contact: "P: 078 3115 1400",
    email: "M: contact@designo.co.uk",
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
    const updateScreenSize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width >= 1025) {
          setScreenSize("desktop");
        } else if (width >= 768 && width < 1025) {
          setScreenSize("tablet");
        } else {
          setScreenSize("mobile");
        }
      }
    };

    updateScreenSize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenSize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateScreenSize);
      }
    };
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
              <h2>{location.country}</h2>
              <div className={styles.infoContainer}>
                <div className={styles.infoWrapper}>
                  <h5 className={styles.title}>{location.title}</h5>
                  <div>{location.address}</div>
                  <div>{location.postcode}</div>
                </div>
                <div className={styles.infoWrapper}>
                  <h5 className={styles.title}>Contact</h5>
                  <div>{location.contact}</div>
                  <div>{location.email}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export { LocationMaps };
