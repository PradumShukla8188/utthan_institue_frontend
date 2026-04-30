import React, { useState, useEffect } from "react";
import { 
    FaEnvelope, FaPhoneVolume, FaBars, FaTimes, 
    FaHome, FaInfoCircle, FaHandsHelping, FaImages, FaBlog, FaPhoneAlt 
} from "react-icons/fa";
import logo from "../../../assets/images/logo.jpg";
import './header.css';
import SocialLinks from "../common/socialMediaLink";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: 'Home', icon: <FaHome /> },
        { path: '/about-us', label: 'About', icon: <FaInfoCircle /> },
        { path: '/services', label: 'Services', icon: <FaHandsHelping /> },
        { path: '/gallery', label: 'Gallery', icon: <FaImages /> },
        { path: '/blog', label: 'Blog', icon: <FaBlog /> },
        { path: '/contact-us', label: 'Contact', icon: <FaPhoneAlt /> },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Main Navigation Header */}
            <div className="header-bottom">
                <div className="container">
                    <div className="nav-container">
                        {/* Logo */}
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Utthan Logo" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={`nav-col ${isMenuOpen ? 'open' : ''}`}>
                            <ul className="navbad">
                                {navItems.map((item, index) => (
                                    <li 
                                        key={index} 
                                        className={location.pathname === item.path ? 'active' : ''}
                                    >
                                        <Link to={item.path}>
                                            <span className="icon">{item.icon}</span>
                                            <span className="text">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTA Buttons & Mobile Toggle */}
                        <div className="cta-area">
                            <Link to="/donate" className="btn-donate d-none d-lg-inline-block">
                                Donate Now
                            </Link>
                            <div className="mobile-toggle d-lg-none" onClick={toggleMenu}>
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
