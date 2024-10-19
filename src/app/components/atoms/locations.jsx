"use client";
import React from "react";
import styles from "./locations.module.scss";
import Image from "next/image";
import Link from "next/link";

const LocationsComponent = () => {
  const locations = [
    {
      id: 1,
      title: "CANADA",
      imageUrl: "/images/canada.png",
    },
    {
      id: 2,
      title: "AUSTRALIA",
      imageUrl: "/images/australia.png",
    },
    {
      id: 3,
      title: "UNITED KINGDOM",
      imageUrl: "/images/london.png",
    },
  ];

  return (
    <section className={styles.locationSection}>
      <div className={styles.gridContainer}>
        {locations.map((location) => (
          <div className={styles.locationCard} key={location.id}>
            <Image
              src={location.imageUrl}
              alt={location.title}
              width={202}
              height={202}
              className={styles.locationImage}
            />
            <div className={styles.locationContent}>
              <h2>{location.title}</h2>

              <Link href="/locations">
                <button className={styles.exploreButton}>See Location</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsComponent;
