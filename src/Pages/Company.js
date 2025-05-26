import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ArrowCard from '../Components/Elements/ArrowCard';
import '../Styles/Company.css';

const chaTAFeatures = [
    {
        id: 1,
        title: "24/7 Help Desk"
    },
    {
        id: 2,
        title: "Interactive Channel"
    },
    {
        id: 3,
        title: "Analytics, ABET Report"
    },
    {
        id: 4,
        title: "Grading Feedback"
    },
    {
        id: 5,
        title: "Personalized Assessment"
    },
    {
        id: 6,
        title: "Privacy"
    }
];

const providesFeatureCards = [
    { title: 'An Integrated Platform: For Students & Teachers', image: `${process.env.PUBLIC_URL}/assets/images/current-features/Feature1.png` },
    { title: 'AI-assisted exam generation, auto-grading, and Q&A for video recordings', image: `${process.env.PUBLIC_URL}/assets/images/current-features/Feature2.png` },
    { title: "Performance analysis to understand student's progress", image: `${process.env.PUBLIC_URL}/assets/images/current-features/Feature3.png` },
    { title: '24/7 custom TA Social platform for students', image: `${process.env.PUBLIC_URL}/assets/images/current-features/Feature4.png` },
];

const futureFeatureCards = [
    { title: 'Subject Specific Pretrained Models', image: `${process.env.PUBLIC_URL}/assets/images/future-features/Feature1.png` },
    { title: 'Career coaching and job finding', image: `${process.env.PUBLIC_URL}/assets/images/future-features/Feature2.png` },
    { title: 'Provide professional exam training, monitoring and certification', image: `${process.env.PUBLIC_URL}/assets/images/future-features/Feature3.png` },
    { title: 'Continuing Education, upskilling and corporate training', image: `${process.env.PUBLIC_URL}/assets/images/future-features/Feature4.png` },
];

const backedByLogos = [
    { src: `${process.env.PUBLIC_URL}/assets/logos/TAMU.png`, alt: 'Logo 1' },
    { src: `${process.env.PUBLIC_URL}/assets/logos/TAMU-Innovation.avif`, alt: 'Logo 2' },
    { src: `${process.env.PUBLIC_URL}/assets/logos/NSF.png`, alt: 'Logo 3' },
    { src: `${process.env.PUBLIC_URL}/assets/logos/NSF-I-Corps.jpg`, alt: 'Logo 4' },
];

// Create a new component for the main page content
function Company() {
    // Create individual refs
    const cardRef0 = useRef();
    const cardRef1 = useRef();
    const cardRef2 = useRef();
    const cardRef3 = useRef();
    
    const futureCardRef0 = useRef();
    const futureCardRef1 = useRef();
    const futureCardRef2 = useRef();
    const futureCardRef3 = useRef();
    
    const arrowCardRef0 = useRef();
    const arrowCardRef1 = useRef();
    const arrowCardRef2 = useRef();
    const arrowCardRef3 = useRef();
    const arrowCardRef4 = useRef();
    const arrowCardRef5 = useRef();
    
    // Create arrays using useMemo
    const cardRefs = useMemo(() => [cardRef0, cardRef1, cardRef2, cardRef3], []);
    const [cardVisible, setCardVisible] = useState([false, false, false, false]);
    const futureCardRefs = useMemo(() => [futureCardRef0, futureCardRef1, futureCardRef2, futureCardRef3], []);
    const [futureCardVisible, setFutureCardVisible] = useState([false, false, false, false]);
    
    // Add refs and state for arrow cards
    const arrowCardRefs = useMemo(() => [arrowCardRef0, arrowCardRef1, arrowCardRef2, arrowCardRef3, arrowCardRef4, arrowCardRef5], []);
    const [arrowCardVisible, setArrowCardVisible] = useState([false, false, false, false, false, false]);
    
    // Define different colors for each arrow card
    const arrowCardColors = [
        "#6225E6", // Purple
        "#E02227", // Red
        "#1a73e8", // Blue
        "#FBC638", // Yellow
        "#28a745", // Green
        "#dc3545"  // Dark Red
    ];

    useEffect(() => {
        const observers = cardRefs.map((ref, idx) => {
            if (!ref.current) return null;
            return new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setCardVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                    } else {
                        setCardVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = false;
                            return updated;
                        });
                    }
                },
                { threshold: 0.3 }
            );
        });
        cardRefs.forEach((ref, idx) => {
            if (ref.current && observers[idx]) observers[idx].observe(ref.current);
        });
        return () => {
            observers.forEach((observer, idx) => {
                if (observer && cardRefs[idx].current) observer.unobserve(cardRefs[idx].current);
            });
        };
    }, [cardRefs]);

    useEffect(() => {
        const observers = futureCardRefs.map((ref, idx) => {
            if (!ref.current) return null;
            return new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setFutureCardVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                    } else {
                        setFutureCardVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = false;
                            return updated;
                        });
                    }
                },
                { threshold: 0.3 }
            );
        });
        futureCardRefs.forEach((ref, idx) => {
            if (ref.current && observers[idx]) observers[idx].observe(ref.current);
        });
        return () => {
            observers.forEach((observer, idx) => {
                if (observer && futureCardRefs[idx].current) observer.unobserve(futureCardRefs[idx].current);
            });
        };
    }, [futureCardRefs]);

    // Add useEffect for arrow card animations
    useEffect(() => {
        const observers = arrowCardRefs.map((ref, idx) => {
            if (!ref.current) return null;
            return new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setArrowCardVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                    } else {
                        setArrowCardVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = false;
                            return updated;
                        });
                    }
                },
                { threshold: 0.3 }
            );
        });
        arrowCardRefs.forEach((ref, idx) => {
            if (ref.current && observers[idx]) observers[idx].observe(ref.current);
        });
        return () => {
            observers.forEach((observer, idx) => {
                if (observer && arrowCardRefs[idx].current) observer.unobserve(arrowCardRefs[idx].current);
            });
        };
    }, [arrowCardRefs]);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <video autoPlay loop muted playsInline className="hero-video-background">
                    <source src={`${process.env.PUBLIC_URL}/assets/homepage/CityView.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content-overlay">
                    <div className="hero-text-container">
                        <h2 className="hero-title-video">Integrated AI-powered platform that supports personalized education at scale.</h2>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="quote-section">
                <h3 className="quote-title">Empowering every learner's journey with an AI-driven platform that personalizes education at scale, unlocking limitless potential</h3>
            </section>

            {/* What we offer Section */}
            <section className="what-we-offer-section">
                <h2 className="section-heading">What we offer</h2>
                <div className="offer-content-container">
                    <div className="offer-text-content">
                        <h3 className="offer-subheading chata-heading">ChaTA<br />Features</h3>
                        <p className="offer-description">
                            Discover a comprehensive suite of tools designed to enhance learning, streamline education, and empower both students and educators.
                        </p>
                    </div>
                    <div className="offer-slider-container">
                        <div className="arrow-cards-grid">
                            {chaTAFeatures.map((feature, idx) => (
                                <div 
                                    key={feature.id} 
                                    ref={arrowCardRefs[idx]}
                                    className={`arrow-card-item ${arrowCardVisible[idx] ? 'visible' : ''}`}
                                >
                                    <ArrowCard 
                                        text={feature.title} 
                                        backgroundColor={arrowCardColors[idx]}
                                        href="#"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Provides Section */}
            <section className="provides-section">
                <div className="offer-content-container">
                    <div className="offer-text-content">
                        <h3 className="offer-subheading" style={{ color: '#000' }}>Encando AI<br />Provides</h3>
                    </div>
                    <div className="provides-features-hub">
                        {providesFeatureCards.map((card, idx) => (
                            <div key={card.title} className={`hub-card-container hub-card-${idx}`}>
                                <div
                                    ref={cardRefs[idx]}
                                    className={`provides-feature-card ${idx < 2 ? 'from-left' : 'from-right'}${cardVisible[idx] ? ' visible' : ''}`}
                                >
                                    <img src={card.image} alt={card.title} className="feature-card-image" />
                                    <h4 className="feature-card-title">{card.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Section */}
            <section className="future-section">
                <div className="offer-content-container">
                    <div className="offer-text-content">
                        <h3 className="offer-subheading">Future<br />Features</h3>
                    </div>
                    <div className="provides-features-hub">
                        {futureFeatureCards.map((card, idx) => (
                            <div key={card.title} className={`hub-card-container hub-card-${idx}`}>
                                <div
                                    ref={futureCardRefs[idx]}
                                    className={`provides-feature-card ${idx < 2 ? 'from-left' : 'from-right'}${futureCardVisible[idx] ? ' visible' : ''}`}
                                >
                                    <img src={card.image} alt={card.title} className="feature-card-image" />
                                    <h4 className="feature-card-title" style={{ color: '#222' }}>{card.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="backedby-section">
                <h2 className="section-heading" style={{ color: '#1c1c1e' }}>Backed By</h2>
                <div className="backedby-logos-row">
                    {backedByLogos.map((logo, idx) => (
                        <div className="backedby-logo-col" key={idx}>
                            <img src={logo.src} alt={logo.alt} className="backedby-logo-img" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Encando AI Dots Section */}
            <section className="encandoai-section">
                <img src={require('../icons/company-name.svg').default} alt="Encando AI" className="encandoai-heading" />
            </section>

            <Footer />
        </>
    );
}

export default Company;