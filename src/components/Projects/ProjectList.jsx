import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
export default function ProjectList() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projetos Destacados</h2>
        <p>Alguns dos projetos que desenvolvi recentemente</p>
        <div className="projects-grid">
          {projects.map((project, i) => <ProjectCard key={i} {...project} />)}
        </div>
      </div>
    </section>
  );
} 