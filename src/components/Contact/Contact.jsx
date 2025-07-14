import ContactForm from './ContactForm';
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="animate-slideUp">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-6">Vamos Conversar</h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou gostaria de discutir possibilidades, não hesite em entrar em contato!
                  </p>
                  <div className="mt-8">
                    <p className="text-base text-secondary mb-3">
                      Se desejar conhecer mais sobre minha trajetória profissional, faça o download do meu currículo atualizado:
                    </p>
                    <a
                      href="/assets/Leonardo Moura Verardo Jordão de Souza (1).pdf"
                      download
                      className="btn-primary inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Baixar Currículo
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="card p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <h4 className="text-accent font-medium">Email</h4>
                        <p className="text-primary">leonardomoura7878@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <h4 className="text-accent font-medium">Telefone</h4>
                        <p className="text-primary">(51) 98919-7396</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">📍</div>
                      <div>
                        <h4 className="text-accent font-medium">Localização</h4>
                        <p className="text-primary">Sapucaia do Sul – RS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-accent font-medium mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-accent font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-accent font-medium mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-accent font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Sua mensagem..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 