export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="animate-slideUp">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-secondary leading-relaxed">
                  Sou Leonardo Moura Verardo Jordão de Souza, Desenvolvedor Full Stack com experiência em projetos web e desktop. 
                  Tenho como objetivo aplicar meus conhecimentos em tecnologias modernas, colaborar com times ágeis e desenvolver 
                  soluções escaláveis e inovadoras.
                </p>
                <p className="text-lg text-secondary leading-relaxed">
                  Atualmente, foco em C#, ASP.NET MVC, React.js e tecnologias modernas do ecossistema JavaScript. 
                  Acredito que a tecnologia deve ser acessível, intuitiva e resolver problemas reais.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="card text-center">
                    <h3 className="text-3xl font-bold text-accent mb-2">1+</h3>
                    <p className="text-secondary">Anos de Experiência</p>
                  </div>
                  <div className="card text-center">
                    <h3 className="text-3xl font-bold text-accent mb-2">5+</h3>
                    <p className="text-secondary">Projetos Concluídos</p>
                  </div>
                  <div className="card text-center">
                    <h3 className="text-3xl font-bold text-accent mb-2">2</h3>
                    <p className="text-secondary">Empresas</p>
                  </div>
                </div>
                
                <div className="card p-6">
                  <div className="space-y-3">
                    <p className="text-primary">
                      <span className="text-accent font-medium">📍 Localização:</span> Sapucaia do Sul – RS
                    </p>
                    <p className="text-primary">
                      <span className="text-accent font-medium">📧 Email:</span> leonardomoura7878@gmail.com
                    </p>
                    <p className="text-primary">
                      <span className="text-accent font-medium">📞 Telefone:</span> (51) 98919-7396
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 