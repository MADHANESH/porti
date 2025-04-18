import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, `}</h3>
                <h4>{`${historyItem.organisation},`}</h4>

                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, index) => (
                    <li key={index}>{experience}</li>
                  ))}
                </ul>
                {/* Conditionally render the certificate link */}
                {historyItem.certificateLink && (
  <div className={styles.certificateLink}>
    <button
      onClick={() => window.open(historyItem.certificateLink, "_blank", "noopener,noreferrer")}
      className={styles.certificateButton}
    >
      Click here to view certificate
    </button>
  </div>
)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
