"use client";
import React from "react";
import styles from "./grid.module.scss";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../../icons/ArrowRight";

const GridComponent = () => {
  const grids = [
    {
      title: "WEB DESIGN",
      link: "/website",
      imageUrl: "/images/web.png",
      className: "grid1",
    },
    {
      title: "APP DESIGN",
      link: "/application",
      imageUrl: "/images/app.png",
      className: "grid2",
    },
    {
      title: "GRAPHIC DESIGN",
      link: "/graphic",
      imageUrl: "/images/graphic.png",
      className: "grid3",
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {grids.map((grid, index) => (
        <div
          key={index}
          className={`${styles.gridItem} ${styles[grid.className]}`}
        >
          <Image
            src={grid.imageUrl}
            alt={grid.title}
            layout="responsive"
            width={500}
            height={300}
            className={styles.gridImage}
          />
          <div className={styles.overlay}>
            <h3>{grid.title}</h3>
            <Link href={grid.link} className={styles.link}>
              VIEW PROJECTS <ArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
