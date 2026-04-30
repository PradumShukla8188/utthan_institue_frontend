import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./ourPrograms.css";

const programmes = [
  {
    id: "women-empowerment",
    title: "Mahila Suraksha and Vikas Manch",
    description: `Over 127 units of grass root women's groups taking care of their safety and development.`,
    icon: "👩‍👩‍👧‍👦",
  },
  {
    id: "health-programme",
    title: "NIRAMAYA Community Health Programme",
    description: `Provides doorstep health care through medical camps and health education.`,
    icon: "🏥",
  },
  {
    id: "social-defense",
    title: "Social Defense and Security Division",
    description: `Day care & nutritional support, medical help, legal aid, counselling, police protection.`,
    icon: "🛡️",
  },
  {
    id: "disability-management",
    title: "KOSHISH – Institute of Disability Management",
    description: `Provides specialized care to differently-abled persons (MR, Autism, CP, etc.).`,
    icon: "♿",
  },
  {
    id: "human-rights",
    title: "Issue Based Action Programme",
    description: `Focus on human rights, RTI, consumer education, environment protection.`,
    icon: "⚖️",
  },
  {
    id: "resource-centre",
    title: "Development Resource Centre",
    description: `Engaged in training, research, documentation & consultancy.`,
    icon: "📚",
  },
  {
    id: "cultural-wing",
    title: "Tarang - Cultural and Art Wing",
    description: `Supports programmes through art & culture, using audio-visuals and street plays.`,
    icon: "🎭",
  },
];

const Programmes: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (id: string) => {
    navigate(`/programme/${id}`);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Empowering Humanity
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Impactful</span> Programmes
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we're transforming lives through targeted community-driven initiatives.
          </motion.p>
        </div>
        
        <div className="programmes-grid">
          {programmes.map((prog, index) => (
            <motion.div
              key={prog.id}
              className="uiverse-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleLearnMore(prog.id)}
            >
              <div className="card-content">
                <div className="card-icon">{prog.icon}</div>
                
                <h3 className="card-title">
                  {prog.title}
                </h3>
                
                <p className="card-description">
                  {prog.description}
                </p>
                
                <div className="card-action">
                  <span>Explore Initiative</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programmes;