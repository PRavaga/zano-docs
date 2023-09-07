import React from "react";
import styles from "./Projects.module.css";

function Projects({ projects }) {
  const colorMode = "light";
  return (
    <div className={styles.container}>
      <h2>Projects built on Zano:</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <a href={project.link} key={project.name}>
            <img src={project.logo} alt={project.name} width="280px" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
