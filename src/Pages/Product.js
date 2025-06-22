import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/Product.css'; // Import Product.css
import TryMe from '../Components/Elements/TryMe';

function Product() {
    return (
        <>
            <Header />
            <main className="product-main-content">
                <section className="product-hero-section">
                    <div className="product-hero-container">
                        <div className="product-text-content">
                            <h1 className="product-title">                            
                                Enjoy the Journey of Learning with <span style={{ fontFamily: "Dancing Script", fontSize: "1.2em", color: "#3B82F6" }}>Encando</span>
                            </h1>
                            <p className="product-description">
                                Encando is a platform for students to learn and grow. Help students and faculty interact efficiently and effectively. <br /> Try it!
                            </p>
                            <TryMe style={{ marginTop: '20px' }}/>
                        </div>
                        <div className="product-image-content">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner-img.png`} alt="ChaTA Learning Journey" className="product-hero-image" />
                        </div>
                    </div>
                </section>

                <section className="product-introduction-section">
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

                <section className="product-pricing-section">
                    <div className="product-pricing-container">
                        <h2 className="product-pricing-title">Pricing</h2>
                        <div className="pricing-cards flex flex-row gap-4">
                            <div className="pricing-card h-auto">
                                <h3 className="pricing-card-title">For Students</h3>
                                <div className="pricing-amount">
                                    <span className="text-5xl font-bold text-[var(--color-secondary-light)]">FREE</span>
                                </div>
                                <p className="pricing-description">
                                    Complete access to all learning features
                                </p>
                            </div>
                            
                            <div className="pricing-card">
                                <h3 className="pricing-card-title">For Instructors</h3>
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