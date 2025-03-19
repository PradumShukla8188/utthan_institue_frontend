import React from 'react';
import './pageCss/notFound.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <div className="not-found">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Oops! Page Not Found</p>
                <button className="go-home-button">
                    <Link to="/">Go Back Home</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;
