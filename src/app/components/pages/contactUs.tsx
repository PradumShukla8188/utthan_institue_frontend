import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from "react-icons/fa";
import MapComponent from "./map";
import './pageCss/contactUs.css';

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validate = (name: string, value: string) => {
        if (!value) return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) return "Invalid email address";
        if (name === 'phone' && !/^\d{10}$/.test(value)) return "Enter a valid 10-digit number";
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        Object.keys(formData).forEach(key => {
            const error = validate(key, formData[key as keyof typeof formData]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTouched({});
            }, 2000);
        } else {
            setErrors(newErrors);
            setTouched({ name: true, email: true, phone: true, message: true });
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content text-center mx-auto"
                    >
                        <span className="badge">Get In Touch</span>
                        <h1>We're Here to Help</h1>
                        <p>Have questions or want to partner with us? Reach out and our team will get back to you shortly.</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-main py-24">
                <div className="container">
                    <div className="row">
                        {/* Contact Info */}
                        <div className="col-lg-4">
                            <div className="contact-info-grid">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="info-card"
                                >
                                    <div className="info-icon"><FaPhoneAlt /></div>
                                    <div className="info-details">
                                        <h4>Call Us</h4>
                                        <p>+91 81888 98587</p>
                                        <p>+91 94160 23379</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="info-card"
                                >
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div className="info-details">
                                        <h4>Email Us</h4>
                                        <p>support@utthan.com</p>
                                        <p>contact@utthan.com</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="info-card"
                                >
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div className="info-details">
                                        <h4>Visit Us</h4>
                                        <p>23/H-2, Building, Lal Dwara Colony</p>
                                        <p>Yamunanagar, Haryana, India</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="info-card"
                                >
                                    <div className="info-icon"><FaClock /></div>
                                    <div className="info-details">
                                        <h4>Helpline 24/7</h4>
                                        <p>Emergency: 1098</p>
                                        <p>Women: 24 hrs Support</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="contact-form-wrapper"
                            >
                                {submitted ? (
                                    <div className="form-success-message text-center py-10">
                                        <div className="success-icon-circle"><FaPaperPlane /></div>
                                        <h2>Message Sent!</h2>
                                        <p>Thank you for reaching out. We will contact you soon.</p>
                                        <button onClick={() => setSubmitted(false)} className="btn-reset">Send Another Message</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="modern-contact-form">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Full Name</label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="John Doe" 
                                                    className={touched.name && errors.name ? 'error' : ''}
                                                />
                                                {touched.name && errors.name && <span className="error-msg">{errors.name}</span>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Email Address</label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="john@example.com" 
                                                    className={touched.email && errors.email ? 'error' : ''}
                                                />
                                                {touched.email && errors.email && <span className="error-msg">{errors.email}</span>}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input 
                                                type="text" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="10-digit number" 
                                                className={touched.phone && errors.phone ? 'error' : ''}
                                            />
                                            {touched.phone && errors.phone && <span className="error-msg">{errors.phone}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label>Your Message</label>
                                            <textarea 
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="How can we help you?"
                                                className={touched.message && errors.message ? 'error' : ''}
                                            ></textarea>
                                            {touched.message && errors.message && <span className="error-msg">{errors.message}</span>}
                                        </div>

                                        <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            {!isSubmitting && <FaPaperPlane />}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <MapComponent />
            </section>
        </div>
    );
};

export default ContactUs;