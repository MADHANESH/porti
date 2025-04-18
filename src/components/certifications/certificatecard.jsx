import React from "react";
import styles from "./certificateCard.module.css";

export const CertificateCard = ({
  certification: { title, issuer, date, link, imageSrc },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Certificate for ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.issuer}>{issuer}</p>
    
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View Certificate
      </a>
    </div>
  );
};
