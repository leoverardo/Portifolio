import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container-custom">
        <div className="flex justify-center items-center py-6">
          <div className="flex gap-8 md:gap-12">
            <a href="#home" className="nav-link text-lg font-medium">
              Início
            </a>
            <a href="#about" className="nav-link text-lg font-medium">
              Sobre
            </a>
            <a href="#skills" className="nav-link text-lg font-medium">
              Habilidades
            </a>
            <a href="#projects" className="nav-link text-lg font-medium">
              Projetos
            </a>
            <a href="#experience" className="nav-link text-lg font-medium">
              Experiência
            </a>
            <a href="#contact" className="nav-link text-lg font-medium">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 