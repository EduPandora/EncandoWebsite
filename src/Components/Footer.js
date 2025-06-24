import React from 'react';
import { useNavigateAndScroll } from '../utils/navigation';

const Footer = () => {
    const navigateAndScrollToSection = useNavigateAndScroll();
    return (
        // <footer className="app-footer" id="footer">
        //     <div className="footer-content">
        //         <div className="footer-contact-info">
        //             <div className="footer-email">
        //                 <svg className="email-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        //                     <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        //                 </svg>
        //                 <a href="mailto:info@encando.ai" className="footer-email-link">
        //                     info@encando.ai
        //                 </a>
        //             </div>
        //             <div className="footer-address">
        //                 <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        //                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        //                 </svg>
        //                 <span>511 University Dr. E, College Station, TX 77840</span>
        //             </div>
        //         </div>
        //         <p className="footer-copyright">© 2025 Encando AI | All rights reserved.</p>
        //     </div>
        // </footer>
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Product</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); navigateAndScrollToSection('features')}}>Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); navigateAndScrollToSection('cta')}}>Request a Demo</a></li>
                            <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); navigateAndScrollToSection('pricing', '/product')}}>Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); navigateAndScrollToSection('product', '/product')}}>Try Now!</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); navigateAndScrollToSection('team', '/team')}}>About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => {e.preventDefault(); navigateAndScrollToSection('investors', '/investors')}}>Investors</a></li>
                        </ul>
                    </div>
                    <div id="contact">
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="mailto:info@encando.ai" className="hover:text-white transition-colors">info@encando.ai</a></li>
                            <li><p className="text-gray-400">511 University Dr. E, <br /> College Station, TX 77840</p></li>
                        </ul>
                    </div>
                    {/* <div><h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3><ul className="mt-4 space-y-4"><li><a href="#" className="hover:text-white transition-colors">Blog</a></li><li><a href="#" className="hover:text-white transition-colors">Community Hub</a></li></ul></div> */}
                    <div className="flex  items-start  space-x-2">
                        {/* <Logo className="h-8 w-auto flex-shrink-0" /><span className="text-2xl font-bold text-white">Encando</span> */}
                        <div className="flex items-center space-x-2 text-left">
                            <img src={`${process.env.PUBLIC_URL}/assets/icons/icon-color.png`} alt="Encando.AI Logo" className="h-10 w-auto flex-shrink-0" />
                            <span className="text-xl font-bold text-white">Encando.AI</span>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-base text-gray-500">&copy; 2025 Encando.AI, Inc. All rights reserved.</p>
                    {/* <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacy</a>
                        <a href="#" className="hover:text-gray-300">Terms</a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;