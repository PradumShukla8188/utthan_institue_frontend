import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaGithub, FaGooglePlusG, FaPinterestP, FaTwitter, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";
import './footer.css';
import SocialLinks from "../common/socialMediaLink";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        {/* Company Info */}
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <h2>About Utthan</h2>
                            <p>
                                Dedicated to the promotion of well-being of suffering humanity since 1991. We believe in the capacity of people to change and develop together.
                            </p>
                            <p>
                                Join us in our mission to create a society where equality of status and opportunities, and justice prevails for everyone.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 ps-lg-5">
                            <h2>Quick Links</h2>
                            <ul className="link-list">
                                <li><Link to="/about-us"><FaAngleRight /> About us</Link></li>
                                <li><Link to="/services"><FaAngleRight /> Services</Link></li>
                                <li><Link to="/gallery"><FaAngleRight /> Gallery</Link></li>
                                <li><Link to="/blog"><FaAngleRight /> Blog</Link></li>
                                <li><Link to="/contact-us"><FaAngleRight /> Contact us</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-5 col-md-12">
                            <h2>Get In Touch</h2>
                            <ul className="contact-info-footer">
                                <li>
                                    <div className="icon-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="details">
                                        <h5>Our Office</h5>
                                        <p>Uttan Institue of Development & Technology, YNR, Haryana, IND</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="details">
                                        <h5>Phone Number</h5>
                                        <p>+91 81888 98587</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <FaEnvelopeOpenText />
                                    </div>
                                    <div className="details">
                                        <h5>Email Address</h5>
                                        <p>info@utthan.in / utthaninstitue@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <div className="copy">
                <div className="container">
                    <p style={{ textAlign: "left" }}>
                        <a href="https://portfolio-praddumn-kumar.vercel.app/">
                            &copy; {new Date().getFullYear()} Utthan Institute. Designed by Pradum Shukla.
                        </a>
                    </p>

                    <div className="social-bar">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
