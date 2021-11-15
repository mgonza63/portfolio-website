import styles from "./Projects.module.css";
import ProjectCard from "./projectCard";
import { ProjectData } from "./ProjectData";
import utilStyles from "../../styles/utils.module.css";

export default function Projects() {
  const project = ProjectData.map((project) => {
    return project;
  });
  return (
    <section className={styles.projectSection}>
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            pills={project.pills}
            thumbnail={project.thumbnail}
            shortCopy={project.shortCopy}
          />
        ))}
    </section>
  );
}
