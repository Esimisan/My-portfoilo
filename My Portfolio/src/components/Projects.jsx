import "../styles/Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">Selected work</p>
        <h2 className="projects__heading">Projects</h2>
      </div>

      <ol className="projects__list">
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <span className="project-item__number">
              {String(project.id).padStart(2, "0")}
            </span>

            <div className="project-item__heading">
              <p className="project-item__category">{project.category}</p>
              <h3 className="project-item__title">{project.title}</h3>
            </div>

            <div className="project-item__body">
              <p className="project-item__description">{project.description}</p>

              <ul className="project-item__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <a
              className="project-item__link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Projects;
