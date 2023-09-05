import React from "react";
import styles from "./Projects.module.css";

function Projects({ projects }) {
  return (
    <div>
      <div className={styles.projects}>
        <span>Projects built on Zano</span>
        <div className={styles.projects__images}>
          {projects.map((project) => (
            <img
              src={project.img}
              alt={project.name}
              width="280px"
              height="115px"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
