import { motion } from 'framer-motion';

export default function Skills() {
  const languages = ['C#', 'Java', 'PHP', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'];
  const frameworks = ['ASP.NET MVC', '.NET Core', 'Spring Boot', 'React.js', 'Bootstrap'];
  const databases = ['MySQL', 'Entity Framework'];
  const tools = ['Git', 'GitHub', 'REST APIs', 'Chatbots', 'Scrum', 'Kanban'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Habilidades & Tecnologias</h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="space-y-4" variants={categoryVariants}>
              <h3 className="text-2xl font-bold text-accent text-center">Linguagens</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {languages.map(skill => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="space-y-4" variants={categoryVariants}>
              <h3 className="text-2xl font-bold text-accent text-center">Frameworks</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {frameworks.map(skill => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="space-y-4" variants={categoryVariants}>
              <h3 className="text-2xl font-bold text-accent text-center">Bancos de Dados</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {databases.map(skill => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="space-y-4" variants={categoryVariants}>
              <h3 className="text-2xl font-bold text-accent text-center">Ferramentas & Metodologias</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map(skill => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 