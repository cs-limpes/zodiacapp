import React from 'react';
import '../main.css'; // Assuming you have some CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>© {new Date().getFullYear()} My Company. All rights reserved.</span>
                <div className="social-links">
                    {/* Example placeholders for social media links */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
