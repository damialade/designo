import React from "react";
import styles from "./cardGrid.module.scss"; // Use the same SCSS for styling
import Image from "next/image";

const CardGrid = ({ cards }) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={card.image}
            alt={card.title}
            className={styles.cardImage}
            width={350}
            height={320}
            priority
          />
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
