import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Product.css"; // Import Product.css
import TryMe from "../Components/Elements/TryMe";

function Product() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                Enjoy the Journey of Learning with{" "}
                <span
                  style={{
                    fontFamily: "Dancing Script",
                    fontSize: "1.2em",
                    color: "#3B82F6",
                  }}
                >
                  Encando
                </span>
              </h1>
              <p className="product-description">
                Encando is a platform for students to learn and grow. Help
                students and faculty interact efficiently and effectively.{" "}
                <br />
              </p>
              <TryMe style={{ marginTop: "20px" }} />
            </div>
            <div className="product-image-content">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/banner-img.png`}
                alt="ChaTA Learning Journey"
                className="product-hero-image"
              />
            </div>
          </div>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricing");
            }}
            className="w-full pt-12 justify-center flex text-[var(--color-primary)] hover:translate-y-1 text-md sm:text-xl transition-all duration-300 transform font-semibold"
          >
            See Pricing &darr;
          </a>
        </section>

        <section className="product-introduction-section" id="demo">
          <div className="product-introduction-container">
            <h2 className="product-introduction-title">Introduction</h2>
            <div className="video-frame-container">
              <div className="video-aspect-ratio-keeper">
                <iframe
                  src="https://www.youtube.com/embed/dSER1UTy074" // Placeholder YouTube Video ID
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
            <h2 className="product-pricing-title">
              Simple, Transparent Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch justify-self-center">
              {/* Student Card */}
              <div className="pricing-card student-card">
                <h3 className="pricing-card-title">For Students</h3>
                <div className="pricing-amount">
                  <span className="price">FREE</span>
                </div>
                <p className="pricing-description mb-6">
                  Access all our learning tools without any cost. Seriously.
                </p>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Full access to all learning tools
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    No hidden fees or credit card required
                  </li>
                </ul>
              </div>

              {/* Instructor Card */}
              <div className="pricing-card">
                <h3 className="pricing-card-title">For Instructors</h3>
                
                <div className="pricing-details">
                  <div className="pricing-list">
                    {/* Free Trial */}
                    <div className="pricing-list-item">
                      <div className="plan-info">
                        <span className="plan-name">Free Trial</span>
                        {/* <span className="plan-description">
                          14 days full access
                        </span> */}
                      </div>
                      <div className="plan-price">14 days Full Access</div>
                    </div>
                    
                    {/* Instructor Pro */}
                    <div className="pricing-list-item">
                      <div className="plan-info">
                        <span className="plan-name">Instructor Pro</span>
                        <span className="plan-description">
                          Introductory rate
                        </span>
                      </div>
                      <div className="plan-price">$99/month</div>
                    </div>
                  </div>
                </div>

                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlimited courses
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Automated grading & personalized feedback
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    AI-powered quiz & exam generation
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Real-time learning analytics
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    24/7 student support
                  </li>
                </ul>
              </div>

              {/* Departments Card */}
              <div className="pricing-card">
                <h3 className="pricing-card-title">For Departments</h3>
                
                <div className="pricing-details">
                  <div className="pricing-list">
                    <div className="pricing-list-item">
                      <div className="plan-info">
                        <span className="plan-name">Pilot Package</span>
                        <span className="plan-description">
                          Per-semester basis
                        </span>
                      </div>
                      <div className="plan-price">Contact us</div>
                    </div>
                  </div>
                </div>

                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlimited instructors & students
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Department-wide analytics dashboard
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Canvas, Blackboard & other LMS integrations
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dedicated onboarding, faculty training, and support
                  </li>
                </ul>
              </div>

              {/* Institutions Card */}
              <div className="pricing-card">
                <h3 className="pricing-card-title">For Institutions</h3>
                
                <div className="pricing-details">
                  <div className="pricing-list">
                    <div className="pricing-list-item">
                      <div className="plan-info">
                        <span className="plan-name">Enterprise License</span>
                        <span className="plan-description">
                          Pricing tailored to student enrollment
                        </span>
                      </div>
                      <div className="plan-price">Contact us</div>
                    </div>
                  </div>
                </div>

                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Campus-wide access for all faculty & students
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Advanced analytics for Deans/Administrators
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Compliance (ADA, TX-RAMP, VPAT, FERPA, GDPR)
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enterprise-grade data security and privacy protections
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dedicated customer success manager
                  </li>
                </ul>
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
