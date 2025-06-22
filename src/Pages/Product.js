import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/Product.css'; // Import Product.css
import TryMe from '../Components/Elements/TryMe';

function Product() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Header />
            <main className="product-main-content">
                <section className="product-hero-section" id="product">
                    <div className="product-hero-container">
                        <div className="product-text-content">
                            <h1 className="product-title">                            
                                Enjoy the Journey of Learning with <span style={{ fontFamily: "Dancing Script", fontSize: "1.2em", color: "#3B82F6" }}>Encando</span>
                            </h1>
                            <p className="product-description">
                                Encando is a platform for students to learn and grow. Help students and faculty interact efficiently and effectively. <br />
                            </p>
                            <TryMe style={{ marginTop: '20px' }}/>
                        </div>
                        <div className="product-image-content">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner-img.png`} alt="ChaTA Learning Journey" className="product-hero-image" />
                        </div>
                    </div>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="w-full pt-12 justify-center flex text-[var(--color-primary)] hover:translate-y-1 text-md sm:text-xl transition-all duration-300 transform font-semibold">
                        See Pricing &darr;
                    </a>
                </section>

                <section className="product-introduction-section" id="demo">
                    <div className="product-introduction-container">
                        <h2 className="product-introduction-title">Introduction</h2>
                        <div className="video-frame-container">
                            <div className="video-aspect-ratio-keeper">
                                <iframe
                                    src="https://www.youtube.com/embed/tZBreC_2SfM" // Placeholder YouTube Video ID
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-pricing-section" id="pricing">
                    <div className="product-pricing-container">
                        <h2 className="product-pricing-title">Pricing</h2>
                        <div className="pricing-cards flex flex-row gap-4">
                            <div className="pricing-card h-auto">
                                <h3 className="text-sm mb-4 font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">For Students</h3>
                                <div className="pricing-amount">
                                    <span className="text-5xl font-bold text-[var(--color-secondary-light)]">FREE</span>
                                </div>
                                <p className="pricing-description">
                                    Complete access to all learning features
                                </p>
                            </div>
                            
                            <div className="pricing-card">
                                {/* <h3 className="pricing-card-title">For Instructors</h3> */}
                                <h3 className="text-sm mb-4 font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">For Instructors</h3>
                                <div className="pricing-amount">
                                    <span className="text-5xl font-bold text-[var(--color-text-primary)]">$100</span>
                                    <span className="price-period">one-time</span>
                                </div>
                                <div className="limited-offer">
                                    <span className="offer-badge">Limited Time Offer!</span>
                                    <p className="offer-text">
                                        <>Get <span className="text-3xl font-bold">$95</span> back</> when you submit your feedback
                                    </p>
                                </div>
                                <p className="pricing-description">
                                    Full access to instructor tools and analytics
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Product; 