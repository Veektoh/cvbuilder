import React from "react";

function Projects({ cvData }) {
  return (
    <section className="cv-project">
      <h2>Projects</h2>
      {cvData.projects &&
        cvData.projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies &&
                project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
}

export default Projects;
