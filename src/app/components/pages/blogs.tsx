import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import './pageCss/blog.css';

import img1 from '../../../assets/images/events/image_01.jpg';
import img2 from '../../../assets/images/events/image_02.jpg';
import img3 from '../../../assets/images/events/image_03.jpg';
import img4 from '../../../assets/images/events/image_04.jpg';
import img5 from '../../../assets/images/events/image_05.jpg';
import img6 from '../../../assets/images/events/image_06.jpg';

const blogPosts = [
    {
        id: 1,
        title: "Impact Story: Empowering Women in Yamunanagar",
        image: img1,
        date: "March 15, 2024",
        author: "Admin",
        category: "Empowerment",
        description: "How our vocational training program helped 50 women start their own tailoring businesses this year.",
    },
    {
        id: 2,
        title: "Success: 200+ Lives Impacted in Medical Camp",
        image: img2,
        date: "March 10, 2024",
        author: "Health Team",
        category: "Health",
        description: "A summary of our recent NIRAMAYA community health camp providing free checkups and medicine.",
    },
    {
        id: 3,
        title: "Celebrating National Girl Child Day",
        image: img3,
        date: "January 24, 2024",
        author: "Advocacy",
        category: "Awareness",
        description: "Organizing awareness rallies and street plays to promote education and safety for girls.",
    },
    {
        id: 4,
        title: "Disability Management: Overcoming Challenges",
        image: img4,
        date: "December 03, 2023",
        author: "KOSHISH Team",
        category: "Rehabilitation",
        description: "Success stories of children at KOSHISH Institute integrating into mainstream society.",
    },
    {
        id: 5,
        title: "Legal Aid: Know Your Rights Workshop",
        image: img5,
        date: "November 20, 2023",
        author: "Legal Cell",
        category: "Advocacy",
        description: "A report on our workshop helping vulnerable groups understand RTI and Consumer Rights.",
    },
    {
        id: 6,
        title: "30 Years of Service: Our Annual Report",
        image: img6,
        date: "October 15, 2023",
        author: "Director",
        category: "Organization",
        description: "Looking back at three decades of humanitarian work and our goals for the coming decade.",
    },
];

const Blog: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <span className="badge">Insights & Stories</span>
                        <h1>Our Blog & Updates</h1>
                        <p>Stay updated with our latest initiatives, success stories, and impact reports from the ground.</p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-main-grid py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.div 
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="modern-blog-card"
                            >
                                <div className="blog-img-container">
                                    <img src={post.image} alt={post.title} />
                                    <div className="blog-cat-badge">{post.category}</div>
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span><FaCalendarAlt /> {post.date}</span>
                                        <span><FaUser /> {post.author}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <button className="read-more-link">
                                        Read Story <FaArrowRight />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
