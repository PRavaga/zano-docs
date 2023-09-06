import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./Projects.module.css";

function Projects({ projects }) {
  const { colorMode } = useColorMode();
  return (
    <div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <a href={project.link} key={project.name}>
            <img
              src={
                colorMode === "light" ? project.logo.light : project.logo.dark
              }
              alt={project.name}
              width="280px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
