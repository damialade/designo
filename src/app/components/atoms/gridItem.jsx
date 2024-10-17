import React from "react";
import styles from "./gridItem.module.scss";
import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";

const GridItem = ({ image, title, description, link }) => {
  return (
    <div className={styles.gridItem}>
      <img src={image} alt={title} className={styles.gridImage} />
      <div className={styles.overlay}>
        <h3>{title}</h3>
        <Link href={link} className={styles.link}>
          VIEW PROJECTS
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

const GridContainer = ({ items }) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </div>
  );
};

export default GridContainer;
