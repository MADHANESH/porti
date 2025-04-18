import React from "react";
import styles from "./certifications.module.css";
import certifications from "../../data/certifications.json"; // Import JSON data
import { CertificateCard } from "./certificatecard"; // Import CertificateCard component

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.cards}>
        {certifications.map((cert, index) => (
          <CertificateCard key={index} certification={cert} />
        ))}
      </div>
    </section>
  );
};