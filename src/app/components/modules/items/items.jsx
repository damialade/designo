"use client";
import React from "react";
import styles from "./items.module.scss";
import Image from "next/image";

const ItemsComponent = () => {
  const items = [
    {
      id: 1,
      title: "PASSIONATE",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      imageUrl: "/images/passionate.png",
    },
    {
      id: 2,
      title: "RESOURCEFUL",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
      imageUrl: "/images/resource.png",
    },
    {
      id: 3,
      title: "FRIENDLY",
      description:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      imageUrl: "/images/friendly.png",
    },
  ];

  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={202}
              height={202}
              className={styles.itemImage}
            />
          </div>
          <div className={styles.itemContent}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ItemsComponent };
