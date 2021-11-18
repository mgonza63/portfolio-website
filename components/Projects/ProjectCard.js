/* eslint-disable @next/next/no-img-element */
import styles from "./ProjectCard.module.css";
import ProjectData from "./ProjectData";
import { motion } from "framer-motion";

import Link from "next/link";

export default function ProjectCard(props) {
  return (
      <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ ease: "circOut", duration: 0.5 }}

        viewport={{ once: true }}
        className={styles.projectCard}
      >
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
          <p className={styles.shortCopy}>{props.shortCopy}</p>
          <div className={styles.linksContainer}>
            <Link href={`${props.learn}`}>
              <a className={styles.links}>Learn More</a>
            </Link>
            <Link href={`${props.site}`}>
              <a className={styles.links} target="_blank" rel="noopener">
                Link to Site
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <img
            src={props.thumbnail}
            alt={`A screenshot featuring ${props.title} website made by me`}
          />
        </div>
      </motion.div>
  );
}
