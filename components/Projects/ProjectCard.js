/* eslint-disable @next/next/no-img-element */
import styles from "./ProjectCard.module.css";
import ProjectData from "./ProjectData";
import { motion } from "framer-motion";

import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
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
          {props.github ? (
            <Link href={`${props.learn}`}>
              <a className={styles.links} target="_blank" rel="noopener">
                Github
              </a>
            </Link>
          ) : (
            <Link href={`${props.learn}`}>
              <a className={styles.links} rel="noopener">
                View Case
              </a>
            </Link>
          )}
          <Link href={`${props.site}`}>
            <a className={styles.links} target="_blank" rel="noopener">
              Link to Site
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.projectImageContainer}>
        <picture>
          <source type="image/webp" srcSet={props.webp}/>
          <source type="image/png" srcSet={props.thumbnail}/>
        <img
          src={props.thumbnail}
          alt={`A screenshot featuring ${props.title} website made by me`}
        />
        </picture>
      </div>
    </motion.div>
  );
}
