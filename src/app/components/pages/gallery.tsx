import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./pageCss/gallery.css";

import image4 from "../../../assets/images/slider/m1.jpeg";
import image5 from "../../../assets/images/slider/m2.jpeg";
import image6 from "../../../assets/images/slider/m3.jpeg";
import image8 from "../../../assets/images/slider/m5.jpeg";
import image9 from "../../../assets/images/slider/m6.jpeg";
import image10 from "../../../assets/images/slider/m7.jpeg";
import image12 from "../../../assets/images/slider/l1.jpeg";
import image13 from "../../../assets/images/slider/l2.jpeg";
import image14 from "../../../assets/images/slider/l3.jpeg";
import image15 from "../../../assets/images/slider/l4.jpeg";

const categories = [
    { id: "all", name: "All Work" },
    { id: "Mahila Suraksha and Vikas Manch", name: "Women Empowerment" },
    { id: "NIRAMAYA Community Health Programme", name: "Health" },
    { id: "Social Defense and Security Division", name: "Social Defense" },
    { id: "KOSHISH – Institute of Disability Management", name: "Disability" },
    { id: "Issue Based Action Programme", name: "Rights" },
    { id: "Development Resource Centre", name: "Resource" },
    { id: "Tarang - Cultural and Art Wing", name: "Culture" },
];

const galleryImages = [
    { id: 1, category: "Mahila Suraksha and Vikas Manch", src: image4, title: "Women Support Group" },
    { id: 2, category: "Mahila Suraksha and Vikas Manch", src: image5, title: "Vocational Training" },
    { id: 3, category: "NIRAMAYA Community Health Programme", src: image6, title: "Medical Camp" },
    { id: 4, category: "Social Defense and Security Division", src: image8, title: "Elderly Care" },
    { id: 5, category: "KOSHISH – Institute of Disability Management", src: image9, title: "Special Education" },
    { id: 6, category: "Issue Based Action Programme", src: image10, title: "RTI Awareness" },
    { id: 7, category: "Development Resource Centre", src: image12, title: "NGO Training" },
    { id: 8, category: "Tarang - Cultural and Art Wing", src: image13, title: "Street Play" },
    { id: 9, category: "Tarang - Cultural and Art Wing", src: image14, title: "Folk Performance" },
    { id: 10, category: "Development Resource Centre", src: image15, title: "Impact Study" },
];

const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredImages = selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === selectedCategory);

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <span className="badge">Visual Journey</span>
                        <h1>Our Impact in Pictures</h1>
                        <p>Capturing moments of change, empowerment, and community resilience across our diverse programmes.</p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="gallery-main py-20">
                <div className="container">
                    {/* Filter Bar */}
                    <div className="filter-wrapper mb-12">
                        <div className="filter-container">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`filter-btn ${selectedCategory === category.id ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Image Grid */}
                    <motion.div 
                        layout
                        className="gallery-grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    layout
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="gallery-item"
                                >
                                    <div className="image-wrapper">
                                        <img src={image.src} alt={image.title} />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <span>{image.category}</span>
                                                <h3>{image.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    
                    {filteredImages.length === 0 && (
                        <div className="no-images text-center py-20">
                            <p className="text-slate-400 text-lg">No images found in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
