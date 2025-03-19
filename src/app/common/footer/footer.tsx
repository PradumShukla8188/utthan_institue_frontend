import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaGithub, FaGooglePlusG, FaPinterestP, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        {/* About Us Section */}
                        <div className="col-md-4 col-sm-12">
                            <h2>About Us</h2>
                            <p>
                                Smart Eye is a leading provider of information technology, consulting, and business process services. Our dedicated employees offer strategic insights, technological expertise, and industry experience.
                            </p>
                            <p>
                                We focus on technologies that promise to reduce costs, streamline processes, and speed time-to-market, backed by our strong quality processes and rich experience managing global...
                            </p>
                        </div>

                        {/* Useful Links Section */}
                        <div className="col-md-4 col-sm-12">
                            <h2>Useful Links</h2>
                            <ul className="list-unstyled link-list">
                                <li><Link to="/about">About us</Link><FaAngleRight /></li>
                                <li><Link to="/portfolio">Portfolio</Link><FaAngleRight /></li>
                                <li><Link to="/jobs">Latest jobs</Link><FaAngleRight /></li>
                                <li><Link to="/gallery">Gallery</Link><FaAngleRight /></li>
                                <li><Link to="/contact">Contact us</Link><FaAngleRight /></li>
                            </ul>
                        </div>

                        {/* Contact Us Section */}
                        <div className="col-md-4 col-sm-12 map-img">
                            <h2>Contact Us</h2>
                            <address className="md-margin-bottom-40">
                                Uttan Institue of Development & Techonlogy <br />
                                YNR (Yamunanager District) <br />
                                Haryana, IND <br />
                                Phone: +91 8188898587 <br />
                                Email: <a href="mailto:info@utthan.com">info@utthan.com</a><br />
                                Web: <a href="https://www.utthan.in">www.utthan.in</a>
                            </address>
                        </div>
                    </div>

                    {/* Footer Navigation */}
                    <div className="nav-box row clearfix">
                        <div style={{ top: "10px" }} className="inner col-md-9 clearfix">
                            <ul className="footer-nav clearfix">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div style={{ top: "10px" }} className="donate-link col-md-3">
                            <Link to="/donate" className="btn btn-primary">
                                <span className="btn-title">Donate Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <div className="copy">
                <div className="container">
                    <a style={{ textDecoration: "none" }} href="https://www.pradumshukla.com/"> {new Date().getFullYear()} &copy; All Rights Reserved | Designed and Developed by Pradum Shukla</a>

                    <span>
                        <a href="https://github.com"><FaGithub /></a>
                        <a href="https://plus.google.com"><FaGooglePlusG /></a>
                        <a href="https://pinterest.com"><FaPinterestP /></a>
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://facebook.com"><FaFacebookF /></a>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Footer;
