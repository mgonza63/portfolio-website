import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import utilStyles from "../../styles/utils.module.css";

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
    <section className={styles.projectSection}>
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
    </section>
  );
}
