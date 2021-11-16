import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";

export default function Projects() {
  const project = ProjectData.map((project) => {
    return project;
  });

  const clientWork = ProjectData.filter(
    (clientProject) => clientProject.type === "Client Work"
  );
  const fullstack = ProjectData.filter(
    (fullstack) => fullstack.type === "Fullstack Projects"
  );

  return (
    <motion.section
      className={styles.projectSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "circOut", duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={styles.breadcrumb}>
        <p>Projects</p>
        <div className={styles.breadcrumbSeparator}>
          <p>/</p>
        </div>
        <p>Client Work</p>
      </div>
      {clientWork.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          pills={project.pills}
          thumbnail={project.thumbnail}
          shortCopy={project.shortCopy}
          learn={project.learn}
          site={project.site}
        />
      ))}
      <div className={utilStyles.mbSm}></div>
      <div className={styles.breadcrumb}>
        <p>Projects</p>
        <div className={styles.breadcrumbSeparator}>
          <p>/</p>
        </div>
        <p>Fullstack Projects</p>
      </div>
      {fullstack.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          pills={project.pills}
          thumbnail={project.thumbnail}
          shortCopy={project.shortCopy}
          learn={project.learn}
          site={project.site}
        />
      ))}
      <div className={utilStyles.mb}></div>
    </motion.section>
  );
}
