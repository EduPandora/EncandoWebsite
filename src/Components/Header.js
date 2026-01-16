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

    // const handleContactUsClick = (e) => {
    //     e.preventDefault();
    //     closeMobileMenu();
    //     navigateAndScrollToSection('cta');
    // };

    return (
        <>
            <header className="bg-[#f9fafb] backdrop-blur-xl sticky top-0  z-50">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 text-gray-800 text-center py-2 px-4 text-sm border-b border-amber-200 mb-3">
                    <span className="font-medium">🚀 <strong>New Product!</strong>{" "} Smart Note — Convert handwritten & digital PDFs to ADA-compliant accessible documents in minutes. {" "}</span>
                    <a 
                        href="https://ada.encando.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-blue-800 transition-colors"
                    >
                        Check it out here →
                    </a>
                </div>
                <div className="header-content p-4">
                    <Link to="/" className="header-logo-container">
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/icon-color.png`} alt="Encando.AI Logo" className="header-logo-icon" />
                        <span className="font-bold text-xl text-[var(--color-text-primary)]">Encando.AI</span>
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
                            {/* <Link to="/" className="nav-button" onClick={closeMobileMenu}>
                                Company
                            </Link> */}
                            <div className="relative group items-center">
                                <button className="inline-block text-black font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    Product
                                    <svg className="inline-block ml-1 mb-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                                    <div className="pt-2">
                                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                                            <Link 
                                                to="/product/encando-platform" 
                                                className="block px-5 py-3 text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-200"
                                                onClick={closeMobileMenu}
                                            >
                                                Encando Platform
                                            </Link>
                                            <Link 
                                                to="/product/smart-note" 
                                                className="block px-5 py-3 text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-200"
                                                onClick={closeMobileMenu}
                                            >
                                                Smart Note
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/team" className="inline-block text-black font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg" onClick={closeMobileMenu}>
                                Team
                            </Link>
                            <Link to="/investors" className="inline-block text-black font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg" onClick={closeMobileMenu}>
                                For Investors
                            </Link>
                            
                            <a href="https://calendly.com/rujun-encando/30min" className="inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Contact Us
                            </a>
                            
                            {/* LinkedIn Icon */}
                            <a href="https://www.linkedin.com/company/encando-ai/" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 rounded-lg hover:bg-[var(--color-primary)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg" onClick={closeMobileMenu}>
                                <svg className="" width="24" height="24" viewBox="0 0 24 24">
                                    <rect width="24" height="24" rx="2" fill="#0077B5"/>
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;