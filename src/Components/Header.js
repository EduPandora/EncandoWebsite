import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleContactUsClick = () => {
        closeMobileMenu();
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="app-header-main">
            <div className="header-content">
                <Link to="/" className="header-logo-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/icon-color.png`} alt="Encando AI Logo" className="header-logo-icon" />
                    <span className="header-logo-text">Encando AI</span>
                </Link>
                
                {/* Hamburger Icon for Mobile */}
                <button 
                    className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                
                <nav>
                    <div className={`nav-buttons-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <Link to="/" className="nav-button" onClick={closeMobileMenu}>
                            Company
                        </Link>
                        <Link to="/product" className="nav-button" onClick={closeMobileMenu}>
                            Product
                        </Link>
                        <Link to="/team" className="nav-button" onClick={closeMobileMenu}>
                            Team
                        </Link>
                        <a href="https://join.slack.com/t/encando/shared_invite/zt-362lnbhcm-UFwOVxwsDbj27SNOPpUBJg" target="_blank" rel="noopener noreferrer" className="nav-button nav-button-with-icon" onClick={closeMobileMenu}>
                            <svg className="nav-icon slack-icon" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
                                <path d="M6.313 15.165a2.528 2.528 0 0 1 2.521-2.52 2.528 2.528 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
                                <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
                                <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
                                <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D"/>
                                <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
                                <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
                                <path d="M15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
                            </svg>
                            Join Us on Slack
                        </a>
                        <button className="nav-button-primary" onClick={handleContactUsClick}>
                            Contact Us
                        </button>
                        
                        {/* LinkedIn Icon */}
                        <a href="https://www.linkedin.com/company/encando-ai/" target="_blank" rel="noopener noreferrer" className="nav-icon-link" onClick={closeMobileMenu}>
                            <svg className="nav-icon linkedin-icon" width="24" height="24" viewBox="0 0 24 24">
                                <rect width="24" height="24" rx="2" fill="#0077B5"/>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;