import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/Product.css'; // Import Product.css
import TryMe from '../Components/Elements/TryMe';

function Product() {
    return (
        <div className="app-container">
            <Header />
            <main className="product-main-content">
                <section className="product-hero-section">
                    <div className="product-hero-container">
                        <div className="product-text-content">
                            <h1 className="product-title">Enjoy the Journey of Learning with ChaTA</h1>
                            <p className="product-description">
                                ChaTA is a platform for students to learn and grow. Help students and faculty interact efficiently and effectively. <br /> Try it !
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
            </main>
            <Footer />
        </div>
    );
}

export default Product; 