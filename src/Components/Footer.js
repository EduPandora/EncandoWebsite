import React from 'react';

const Footer = () => {
    return (
        <footer className="app-footer" id="footer">
            <div className="footer-content">
                <div className="footer-contact-info">
                    <div className="footer-email">
                        <svg className="email-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <a href="mailto:info@encando.ai" className="footer-email-link">
                            info@encando.ai
                        </a>
                    </div>
                    <div className="footer-address">
                        <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span>511 University Dr. E, College Station, TX 77840</span>
                    </div>
                </div>
                <p className="footer-copyright">© 2025 Encando AI | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;