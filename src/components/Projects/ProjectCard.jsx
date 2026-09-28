import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`project-card${project.featured ? " project-card-featured" : ""}${isExpanded ? " expanded" : ""}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={project.featured ? { y: -8 } : { scale: 1.04, y: -6 }}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: "pointer" }}
    >

      <div className={`project-image${project.image ? " project-image-asset" : ""}`}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} project dashboard`} />
        ) : (
          <>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
          </>
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.features && project.outcomes && (
                <div className="project-details">
                  <div>
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Outcomes</h4>
                    <ul>
                      {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {(project.github || project.demo) && (
                <div className="project-buttons">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                      <FaExternalLinkAlt />
                      Download Now
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  );
}

export default ProjectCard;
