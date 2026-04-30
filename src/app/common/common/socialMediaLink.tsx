import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './socialMediaLink.css';

const SocialLinks: React.FC = () => {
    const socialData = [
        { name: 'facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/p/Utthan-Institute-of-Development-Studies-Yamunanagar-100054320958652/', color: '#1877F2' },
        { name: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com', color: '#1DA1F2' },
        { name: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com', color: '#E4405F' },
        { name: 'linkedin', icon: <FaLinkedinIn />, url: 'https://linkedin.com', color: '#0A66C2' },
        { name: 'youtube', icon: <FaYoutube />, url: 'https://youtube.com', color: '#FF0000' },
    ];

    return (
        <div className="social-links-wrapper">
            {socialData.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-btn ${item.name}`}
                    style={{ '--brand-color': item.color } as React.CSSProperties}
                    title={`Follow us on ${item.name}`}
                >
                    <span className="icon-container">
                        {item.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
