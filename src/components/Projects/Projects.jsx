import "./Projects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-title">
        <h2>Featured Projects</h2>
        <p>A collection of projects showcasing my skills and practical development experience.</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;
