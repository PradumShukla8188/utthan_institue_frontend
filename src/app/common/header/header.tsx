import React, { useState } from "react";
import { FaEnvelope, FaPhoneVolume, FaBars } from "react-icons/fa";
import logo from "../../../assets/images/logo.jpg";
import './header.css';
import SocialLinks from "../common/socialMediaLink";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Top Header */}
            <div className="header-top">
                <div className="container">
                    <div className="row col-det">
                        {/* Contact Info */}
                        <div className="col-lg-6 d-none d-lg-block">
                            <ul className="ulleft">
                                <li>
                                    <FaEnvelope /> utthaninstitueofdevelopermentstudies@gmail.com <span>|</span>
                                </li>
                                <li>
                                    <FaPhoneVolume /> +876 987 666 5433
                                </li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <SocialLinks />

                        {/* Buttons */}
                        <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                            <button className="btn btn-sm btn-success">Join Us</button>
                            <button className="btn btn-sm btn-default">
                                <Link to="/donate" >Donate</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Header */}
            <div id="menu-jk" className="header-bottom">
                <div className="container">
                    <div className="row nav-row">
                        {/* Logo Section */}
                        <div className="col-lg-3 col-md-12 logo">
                            <Link to="/">
                                <img src={logo} alt="Logo slider" />
                            </Link>
                            <a data-toggle="collapse" data-target="#menu" href="#menu" onClick={toggleMenu}>
                                <FaBars className="d-block d-lg-none small-menu" />
                            </a>
                        </div>

                        {/* Navigation Menu */}
                        <div id="menu" className={`col-lg-9 col-md-12 nav-col ${isMenuOpen ? 'open' : ''}`}>
                            <ul className="navbad">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
