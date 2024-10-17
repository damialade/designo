import React from "react";
import styles from "./getintouch.module.scss";

const GetInTouch = () => {
  return (
    <section className={styles.getInTouch}>
      <div className={styles.content}>
        <h1>Let&apos;s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button>Get in Touch</button>
      </div>
    </section>
  );
};

export default GetInTouch;
