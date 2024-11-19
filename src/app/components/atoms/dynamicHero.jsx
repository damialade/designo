import React from "react";
import styles from "./dynamicHero.module.scss";

const DynamicHero = ({ backgroundImage, title, text }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "30px",
  };

  return (
    <section className={styles.dynamicSection} style={sectionStyle}>
      <div className={styles.dynamicContent}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

export { DynamicHero };
