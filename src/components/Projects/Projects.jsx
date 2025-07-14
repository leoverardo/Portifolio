import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chatbot para WhatsApp com OpenAI",
      company: "Projeto Pessoal",
      description:
        "Chatbot inteligente com integração da API OpenAI e automação de mensagens no WhatsApp. Focado em atendimento automatizado e integração de APIs.",
      technologies: ["Node.js", "OpenAI API", "JavaScript", "REST", "WhatsApp API"],
    },
    {
      id: 2,
      title: "ERP para Escritórios de Advocacia",
      company: "Projeto Pessoal (em desenvolvimento)",
      description:
        "Sistema ERP modular com backend em Java Spring Boot e frontend em React.js. Projeto escalável com foco em boas práticas de arquitetura.",
      technologies: ["Spring Boot", "React.js", "Java", "MySQL", "Modular Architecture"],
    },
    {
      id: 3,
      title: "Sistema de Gestão de Veículos",
      company: "Projeto Freelancer",
      description:
        "Site profissional para revenda de veículos desenvolvido em PHP, com gerenciamento de carros, exibição dinâmica, painel administrativo e design responsivo.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    },
    {
      id: 4,
      title: "Sistema de Gestão(Em Desenvolvimento)",
      company: "Soft4y",
      description:
        "Sistema completo de gestão com ASP.NET MVC, controle, dashboard, segurança e integração com banco de dados MySQL.",
      technologies: ["C#", "ASP.NET MVC", "MySQL", "Bootstrap", "Entity Framework"],
    },
    {
      id: 5,
      title: "Sistema Web Corporativo",
      company: "Grupo Orion Cloud",
      description:
        "Aplicações web corporativas desenvolvidas com PHP, HTML, CSS e JavaScript. Modelagem de banco de dados, otimização de performance e uso de Git.",
      technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "Git", "MySQL"],
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projetos</h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map(project => (
              <motion.div 
                key={project.id} 
                className="project-card group"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary font-medium mb-3">
                      {project.company}
                    </p>
                    <p className="text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 