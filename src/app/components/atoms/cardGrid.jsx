import React from "react";
import styles from "./cardGrid.module.scss";
import Image from "next/image";

const CardGrid = ({ cards }) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <Image
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
              layout="responsive"
              width={1200}
              height={800}
              sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
              priority
              quality={100}
            />
          </div>
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CardGrid };
