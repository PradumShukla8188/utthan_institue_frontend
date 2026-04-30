import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './pageCss/services.css';

const services = [
  {
    id: "women-empowerment",
    title: "Mahila Suraksha and Vikas Manch",
    description: `Over 127 units of grass root women's groups taking care of their safety and development.`,
    icon: "👩‍👩‍👧‍👦",
    color: "#3cc88f"
  },
  {
    id: "health-programme",
    title: "NIRAMAYA Community Health Programme",
    description: `Provides doorstep health care through medical camps and health education.`,
    icon: "🏥",
    color: "#1877F2"
  },
  {
    id: "social-defense",
    title: "Social Defense and Security Division",
    description: `Day care & nutritional support, medical help, legal aid, counselling, police protection.`,
    icon: "🛡️",
    color: "#E4405F"
  },
  {
    id: "disability-management",
    title: "KOSHISH – Institute of Disability Management",
    description: `Provides specialized care to differently-abled persons (MR, Autism, CP, etc.).`,
    icon: "♿",
    color: "#0A66C2"
  },
  {
    id: "human-rights",
    title: "Issue Based Action Programme",
    description: `Focus on human rights, RTI, consumer education, environment protection.`,
    icon: "⚖️",
    color: "#FFD700"
  },
  {
    id: "resource-centre",
    title: "Development Resource Centre",
    description: `Engaged in training, research, documentation & consultancy.`,
    icon: "📚",
    color: "#9333ea"
  },
  {
    id: "cultural-wing",
    title: "Tarang - Cultural and Art Wing",
    description: `Supports programmes through art & culture, using audio-visuals and street plays.`,
    icon: "🎭",
    color: "#f97316"
  }
];

const Services: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLearnMore = (id: string) => {
        navigate(`/programme/${id}`);
    };

    return (
        <div className="services-page">
            {/* Animated Background Blobs */}
            <div className="animated-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            {/* Hero Section */}
            <section className="services-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                    >
                        <span className="badge">Service Excellence</span>
                        <h1>Our Real Impact</h1>
                        <p>Bridging the gap between potential and opportunity through structured community development.</p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="text-center mb-20">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-slate-900"
                        >
                            Professional <span className="text-green-500">Programmes</span>
                        </motion.h2>
                    </div>

                    <div className="services-main-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="uiverse-card service-card-premium"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => handleLearnMore(service.id)}
                            >
                                <div className="card-content">
                                    <div className="card-icon">{service.icon}</div>
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-description">{service.description}</p>
                                    <div className="card-action">
                                        <span>Explore Initiative</span>
                                        <span>→</span>
                                    </div>
                                </div>
                                <div className="card-accent" style={{ background: service.color } as React.CSSProperties}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA with Glassmorphism */}
            <section className="bottom-cta-section py-20">
                <div className="container">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="cta-glass-banner"
                    >
                        <div className="cta-content">
                            <h2>Join Our Mission</h2>
                            <p>Be a part of the change. Your support can help us reach more lives.</p>
                            <button className="cta-btn-modern">Donate Now</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
