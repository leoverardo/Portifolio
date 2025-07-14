export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack",
      company: "Soft4y",
      period: "02/2025 - Presente",
      description: "Desenvolvimento de sistema completo de gestão utilizando C# com ASP.NET MVC, MySQL e Bootstrap. Implementação de funcionalidades de controle de produção, relatórios e dashboard interativo."
    },
    {
      id: 2,
      title: "Desenvolvedor Full Stack",
      company: "Orion Cloud",
      period: "08/2024 - 01/2025",
      description: "Desenvolvimento de um ERP para advocacias, integrado com APIs , CRM e direcionamento de chamados. Utilização de PHP JavaScript, Mysql e APIs REST."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="animate-slideUp">
          <h2 className="section-title">Experiência Profissional</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map(experience => (
              <div key={experience.id} className="project-card group">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-secondary font-medium px-4 py-2 bg-white bg-opacity-5 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-secondary leading-relaxed text-lg">
                    {experience.description}
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