import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle, FaHeart, FaShareAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import './programmeDetail.css';

const programDetails: any = {
  "women-empowerment": {
    title: "Mahila Suraksha and Vikas Manch",
    subtitle: "Empowering Women for a Safer and Brighter Future",
    description: `Over 127 units of grass root women's groups taking care of their safety and development. Supported by Family Counselling Centre, Adolescent Education, self-help groups, vocational training & production units. About 10,000 women are associated and over 15,000 family disputes settled peacefully.`,
    longDescription: `This initiative focuses on the holistic development of women in rural and semi-urban areas. By organizing them into self-managed groups, we provide a platform for collective bargaining, safety, and economic independence. Our vocational training units help women acquire market-ready skills in tailoring, handicrafts, and food processing.`,
    impacts: [
      "127+ grass root units established",
      "10,000+ women empowered directly",
      "15,000+ family disputes resolved",
      "Regular self-help group meetings"
    ],
    stats: [
      { label: "Women Reached", value: "10K+", icon: <FaUserFriends /> },
      { label: "Groups Formed", value: "127", icon: <FaCalendarAlt /> },
    ],
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1000",
  },
  "health-programme": {
    title: "NIRAMAYA Community Health Programme",
    subtitle: "Doorstep Health Care for the Underprivileged",
    description: `Provides doorstep health care through medical camps and health education. Supports Reproductive & Child Health, de-addiction counselling, HIV/AIDS and female foeticide awareness.`,
    longDescription: `Health is a basic human right, yet many lack access to it. NIRAMAYA bridge this gap by bringing healthcare directly to slums and labour colonies. We conduct weekly medical camps, provide free medicines, and run extensive awareness campaigns on hygiene and disease prevention.`,
    impacts: [
      "Doorstep healthcare delivery",
      "TB eradication focus",
      "COVID-19 relief distributions",
      "Extensive health education"
    ],
    stats: [
      { label: "Camps Held", value: "500+", icon: <FaCalendarAlt /> },
      { label: "Beneficiaries", value: "25K+", icon: <FaUserFriends /> },
    ],
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000",
  },
  "social-defense": {
    title: "Social Defense and Security Division",
    subtitle: "Caring for the Vulnerable and the Aged",
    description: `Day care & nutritional support, medical help, legal aid, counselling, police protection, social intervention and recreational activities for aged.`,
    longDescription: `Our Social Defense division ensures that no elderly person lives in neglect. We provide a safe haven through 'Bujurg Kuteer', where the aged receive nutritional support, medical care, and most importantly, companionship. We also advocate for the rights of Scheduled Castes and other vulnerable groups.`,
    impacts: [
      "Bujurg Kuteer day care center",
      "Legal aid for the elderly",
      "SC/ST awareness campaigns",
      "Nutritional support programmes"
    ],
    stats: [
      { label: "Seniors Supported", value: "1.2K+", icon: <FaUserFriends /> },
      { label: "Legal Cases", value: "200+", icon: <FaCalendarAlt /> },
    ],
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=1000",
  },
  "disability-management": {
    title: "KOSHISH – Disability Management",
    subtitle: "Specialized Care for Differently-abled Persons",
    description: "KOSHISH provides comprehensive rehabilitation, education, and vocational training for individuals with disabilities including MR, Autism, CP, and more.",
    longDescription: "We believe in an inclusive world where every individual, regardless of their physical or mental challenges, can live with dignity. KOSHISH offers specialized therapy, special education, and skill development to help differently-abled persons become self-reliant.",
    impacts: [
      "Special education facility",
      "Occupational therapy",
      "Vocational training center",
      "Parent counselling sessions"
    ],
    stats: [
      { label: "Students", value: "150+", icon: <FaUserFriends /> },
      { label: "Success Stories", value: "85", icon: <FaHeart /> },
    ],
    image: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&q=80&w=1000",
  },
  "human-rights": {
    title: "Issue Based Action Programme",
    subtitle: "Advocating for Human Rights and Justice",
    description: "Focuses on human rights, RTI, consumer education, environment protection, and social justice through awareness and legal support.",
    longDescription: "Our Issue Based Action division empowers citizens to stand up for their rights. From organizing RTI workshops to leading environmental protection drives, we act as a catalyst for social change and government accountability.",
    impacts: [
      "Human rights awareness",
      "Environment protection drives",
      "Consumer education camps",
      "Legal aid for RTI cases"
    ],
    stats: [
      { label: "Camps", value: "100+", icon: <FaCalendarAlt /> },
      { label: "Legal Aids", value: "450+", icon: <FaUserFriends /> },
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
  },
  "resource-centre": {
    title: "Development Resource Centre",
    subtitle: "Knowledge Sharing and Capacity Building",
    description: "Engaged in training, research, monitoring, and documentation for other NGOs and community groups.",
    longDescription: "The Development Resource Centre acts as a knowledge hub. We provide expert training and research support to smaller grassroots organizations, helping them scale their impact and manage their resources effectively.",
    impacts: [
      "NGO capacity building",
      "Field research studies",
      "Community data monitoring",
      "Impact documentation"
    ],
    stats: [
      { label: "NGOs Trained", value: "50+", icon: <FaUserFriends /> },
      { label: "Research Papers", value: "25", icon: <FaCalendarAlt /> },
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
  },
  "cultural-wing": {
    title: "Tarang - Cultural and Art Wing",
    subtitle: "Art for Social Change",
    description: "Supports programmes through art & culture, using audio-visuals, street plays, and folk media for community mobilization.",
    longDescription: "Art and culture are powerful tools for social mobilization. Our Cultural Wing, 'Tarang', uses creative expression to simplify complex social issues, making them accessible and engaging for the rural population through street plays and folk performances.",
    impacts: [
      "100+ street plays performed",
      "Folk media used for awareness",
      "Community mobilization events",
      "Audio-visual educational tools"
    ],
    stats: [
      { label: "Performances", value: "150+", icon: <FaCalendarAlt /> },
      { label: "Audience", value: "50K+", icon: <FaUserFriends /> },
    ],
    image: "https://images.unsplash.com/photo-1514525253344-f814d074e015?auto=format&fit=crop&q=80&w=1000",
  }
};

const ProgrammeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const program = programDetails[id || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!program) {
    return (
      <div className="not-found-container">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="not-found-content"
        >
          <h1>Programme Not Found</h1>
          <p>We couldn't find the initiative you're looking for.</p>
          <button onClick={() => navigate('/')} className="btn-back-home">
            <FaArrowLeft /> Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="programme-detail-page">
      {/* Hero Section */}
      <section className="programme-hero" style={{ backgroundImage: `url(${program.image})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <button onClick={() => navigate(-1)} className="btn-floating-back">
              <FaArrowLeft />
            </button>
            <span className="badge">Our Initiatives</span>
            <h1>{program.title}</h1>
            <p className="subtitle">{program.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-detail-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Column: Info */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="info-col"
            >
              <div className="glass-card main-text">
                <h3>About the Initiative</h3>
                <p className="primary-text">{program.description}</p>
                <p className="secondary-text">{program.longDescription}</p>
                
                <div className="cta-box">
                  <p>Want to support this cause?</p>
                  <button className="btn-support" onClick={() => navigate('/contact-us')}>
                    <FaHeart /> Get Involved
                  </button>
                </div>
              </div>

              <div className="impact-section">
                <h3>Key Impact Areas</h3>
                <div className="impact-grid">
                  {program.impacts.map((item: string, idx: number) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="impact-item"
                    >
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Stats & Sidebar */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sidebar-col"
            >
              <div className="stats-container">
                {program.stats.map((stat: any, idx: number) => (
                  <div key={idx} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-info">
                      <h4>{stat.value}</h4>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-action-card">
                <FaShareAlt className="share-icon" />
                <h4>Spread the Word</h4>
                <p>Help us reach more people by sharing this initiative with your network.</p>
                <div className="share-buttons">
                    <button className="share-btn">Copy Link</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammeDetail;
