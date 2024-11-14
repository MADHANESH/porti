import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm MADHANESHWARAN M S</h1>
        <p className={styles.description}>
        Hi, I'm MADHANESHWARAN, a B.E. graduate in Computer Science and Engineering from Adhiyamaan College of Engineering. I am seeking job opportunities where I can contribute my expertise and grow professionally in a dynamic environment. In this Portfolio page, I have provided all of my academic details. If you are looking to hire a dedicated and skilled developer, please feel free to contact me.</p>
        <a href="https://drive.google.com/file/d/19IPlxXMC2yPK6hGnQmxxAtZZ4k7XrPGa/view" className={styles.contactBtn}>
         View Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
