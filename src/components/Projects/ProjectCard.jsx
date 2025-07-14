export default function ProjectCard({ title, subtitle, description, link, github }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <p>{description}</p>
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Ver Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          GitHub
        </a>
      </div>
    </div>
  );
} 