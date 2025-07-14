export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado!');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Seu nome completo" 
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          placeholder="Seu email" 
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Assunto" 
          required 
        />
      </div>
      <div className="form-group">
        <textarea 
          placeholder="Sua mensagem..." 
          required 
        />
      </div>
      <button type="submit" className="btn-primary">
        Enviar Mensagem
      </button>
    </form>
  );
} 