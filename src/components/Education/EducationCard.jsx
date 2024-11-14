import React from "react";
import styles from "./EducationCard.module.css"; // You can rename the styles file if needed

export const EducationCard = ({
  education: { degree, institution, year },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.degree}>{degree}</h3>
      <h4 className={styles.institution}>{institution}</h4>
      <p className={styles.year}>
        {year.join(" - ")} {/* Join multiple years if the array has more than one */}
      </p>
    </div>
  );
};
