import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="section-title text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Olá, eu sou Leonardo Moura
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Desenvolvedor Full Stack
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Desenvolvendo soluções escaláveis e inovadoras com tecnologias modernas
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar em Contato
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 