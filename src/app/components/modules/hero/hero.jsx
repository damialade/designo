"use client";
import React from "react";
import styles from "./hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link href="/company">
          <button className={styles.heroButton}>LEARN MORE</button>
        </Link>
      </div>
    </section>
  );
};

export { Hero };
