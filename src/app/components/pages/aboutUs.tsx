import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaHistory, FaCheckCircle, FaUserShield, FaBalanceScale, FaHandHoldingHeart } from 'react-icons/fa';
import missi from '../../../assets/images/misin.jpg';
import vision from '../../../assets/images/vision.jpg';
import './pageCss/aboutUs.css';

const AboutUs: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coreValues = [
        { icon: <FaHeart />, title: "Compassion", desc: "Serving suffering humanity with empathy and unconditional support since 1991." },
        { icon: <FaHandsHelping />, title: "Empowerment", desc: "Providing tools and resources for women and children to build self-reliant futures." },
        { icon: <FaBalanceScale />, title: "Justice", desc: "Advocating for gender justice, human rights, and equality in every community." },
    ];

    const services = [
        "24/7 Child Protection Helpline (1098)",
        "Emergency Women's Crisis Support",
        "Family & Relationship Counselling",
        "Legal Aid for Vulnerable Groups",
        "Disability Care & Rehabilitation",
        "Community Health & Education",
        "Day Care & Support for the Aged",
        "NGO Capacity Building & Research"
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <span className="badge">Established 1991</span>
                        <h1>Our Story & Mission</h1>
                        <p>Dedicated to the promotion of well-being of suffering humanity for over three decades.</p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="core-values py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="value-card"
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content: Story & Mission */}
            <section className="about-story py-20 bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-10 lg:mb-0">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="story-image-wrapper"
                            >
                                <img src={missi} alt="Our Mission" className="main-story-img" />
                                <div className="experience-tag">
                                    <strong>32+</strong>
                                    <span>Years of Service</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6 ps-lg-10">
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="story-text"
                            >
                                <h2 className="section-title">The Utthan Journey</h2>
                                <p className="lead">Utthan Institute of Development & Studies (UIDS) is a beacon of hope in Yamunanagar, dedicated to creating an inclusive society.</p>
                                <p>We believe in the capacity of people to change and develop together. Our holistic approach addresses the root causes of suffering, focusing on protection, advocacy, and rehabilitation.</p>
                                
                                <div className="milestones grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    <div className="milestone-item">
                                        <FaHistory className="text-green-500" />
                                        <span>Founded in 1991</span>
                                    </div>
                                    <div className="milestone-item">
                                        <FaUserShield className="text-green-500" />
                                        <span>24/7 Helpline Support</span>
                                    </div>
                                    <div className="milestone-item">
                                        <FaHandHoldingHeart className="text-green-500" />
                                        <span>10K+ Women Reached</span>
                                    </div>
                                    <div className="milestone-item">
                                        <FaCheckCircle className="text-green-500" />
                                        <span>Registered NGO</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section py-20">
                <div className="container">
                    <div className="vision-card glass-card">
                        <div className="row align-items-center">
                            <div className="col-lg-7 order-2 lg:order-1">
                                <h2>Our Vision for the Future</h2>
                                <p>To create a society where equality of status and opportunities, and justice prevails for everyone, regardless of their background or ability.</p>
                                <ul className="vision-list">
                                    <li>Eradicating gender-based violence and inequality.</li>
                                    <li>Ensuring every child has access to safe protection.</li>
                                    <li>Building sustainable community health infrastructure.</li>
                                    <li>Empowering the differently-abled through specialized care.</li>
                                </ul>
                            </div>
                            <div className="col-lg-5 order-1 lg:order-2 mb-10 lg:mb-0">
                                <img src={vision} alt="Our Vision" className="vision-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services-overview">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2>What We Do</h2>
                        <p className="text-slate-400">Providing a host of services for good living under one roof, from emergency care to specialized rehabilitation.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="service-pill"
                            >
                                <FaCheckCircle className="text-green-500" />
                                <span>{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
