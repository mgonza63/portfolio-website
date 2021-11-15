/* eslint-disable @next/next/no-img-element */
import styles from "./ProjectCard.module.css";
import ProjectData from "./ProjectData";

export default function ProjectCard(props) {

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCopy}>
        <h2 className={styles.projectHeading}>{props.title}</h2>
        <ul className={styles.pillList}>
          {props.pills.map((pill, index) => {
            return (
              <li key={index} className={styles.pill}>
                {pill}
              </li>
            );
          })}
        </ul>
        <p>{props.shortCopy}</p>
      </div>
      <div className={styles.projectImageContainer}>
        <img
          src={props.thumbnail}
          alt={`A screenshot featuring ${props.title} website made by me`}
        />
      </div>
    </div>
  );
}
