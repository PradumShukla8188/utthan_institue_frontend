import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const SocialLinks = () => {
    return (
        <div className="col-lg-3 col-md-6 folouws">
            <ul className="ulright">
                <li><small>Follow Us</small>:</li>
                <li>
                    <button title='go to facebbok' className='btn-socail-link' onClick={() => openExternalLink('https://www.facebook.com/yourpage')}>
                        <FaFacebookSquare />
                    </button>
                </li>
                <li>
                    <button title='go to twitter' className='btn-socail-link' onClick={() => openExternalLink('https://twitter.com/yourprofile')}>
                        <FaTwitterSquare />
                    </button>
                </li>
                <li>
                    <button title='go to instagram' className='btn-socail-link' onClick={() => openExternalLink('https://www.instagram.com/yourprofile')}>
                        <FaInstagram />
                    </button>
                </li>
                <li>
                    <button title='go to linkdin' className='btn-socail-link' onClick={() => openExternalLink('https://www.linkedin.com/in/yourprofile')}>
                        <FaLinkedin />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;
