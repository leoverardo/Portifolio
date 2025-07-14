export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Ulbra",
      period: "2025 - 2028",
      status: "Andamento",
      description: "Formação em andamento em desenvolvimento de software, incluindo programação orientada a objetos, banco de dados, desenvolvimento web e mobile."
    },
    {
      id: 2,
      degree: "Técnico em Informática",
      institution: "Ulbra",
      period: "02/2024 - 07/2025",
      status: "Concluído",
      description: "Formação técnica em informática com foco em programação, redes e manutenção de computadores."
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <div className="animate-slideUp">
          <h2 className="section-title">Formação Acadêmica</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map(item => (
              <div key={item.id} className="project-card group">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-secondary font-medium">
                        {item.period}
                      </span>
                      <span className="px-4 py-2 bg-accent bg-opacity-20 text-accent rounded-full text-sm font-medium">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 