/* eslint-disable @next/next/no-img-element */
import styles from "./ProjectCard.module.css";
import ProjectData from "./ProjectData";



export default function ProjectCard(props) {
  console.log(props.pills)

  return (
    <div className={styles.ProjectCard}>
      <div className={styles.projectCopy}>
        <ul className={styles.pillList}>
          {props.pills.map((pill, index) => {
            return (
              <li key={index} className={styles.pill}>{pill}</li>
            )
          })}
        </ul>
        <h2 className={styles.projectHeading}>{props.title}</h2>
      </div>
      <div className={styles.projectImageContainer}>
        <img
          src={props.image}
          alt={`A screenshot featuring ${props.title} website made by me`}
        />
      </div>
    </div>
  );
}
