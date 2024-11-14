import React from "react";
import styles from "./Education.module.css"; // Update the styles file if necessary

import educationData from "../../data/education.json"; // Assuming the data is in this format
import { EducationCard } from "./EducationCard"; // Import the new EducationCard component

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.education}>
        {educationData.map((education, id) => {
          return <EducationCard key={id} education={education} />;
        })}
      </div>
    </section>
  );
};
