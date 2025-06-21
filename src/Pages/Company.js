import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ArrowCard from '../Components/Elements/ArrowCard';
import DemoRequestForm from '../Components/Elements/DemoRequestForm';
import '../Styles/Company.css';

const BookIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);
const GraduationCapIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
);
const LightbulbIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S10 4.8 10 7c0 2 .3 3.2 1.5 4.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);
const BrainIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h-3A2.5 2.5 0 0 1 4 4.5v0A2.5 2.5 0 0 1 6.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v0A2.5 2.5 0 0 0 14.5 7h3a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 17.5 2Z"/><path d="M12 13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5h0A2.5 2.5 0 0 1 19.5 7.5v3A2.5 2.5 0 0 1 17 13Z"/><path d="M12 13a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h0A2.5 2.5 0 0 0 4.5 7.5v3A2.5 2.5 0 0 0 7 13Z"/><path d="M12 13a2.5 2.5 0 0 0 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 9.5 13Z"/></svg>
);


const UniversityIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10v12H6"/>
        <path d="M18 2h-1.5a2.5 2.5 0 0 0-2.5 2.5V22"/>
        <path d="M14 14V2"/>
    </svg>
);

const StudentsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 22v-4a2 2 0 1 0-4 0v4"/>
        <path d="M18 10a2 2 0 1 0-4 0"/>
        <path d="M6 10a2 2 0 1 0-4 0"/>
        <path d="M18 10h1a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1"/>
        <path d="M5 10H4a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1"/>
        <path d="m12 12-1-1-1 1"/>
        <path d="M12 6a2 2 0 1 0-4 0"/>
        <path d="M12 6h1a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1"/>
    </svg>
);

const TeacherIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/>
        <path d="M18 10a2 2 0 1 0-4 0"/>
        <path d="M6 10a2 2 0 1 0-4 0"/>
        <path d="M18 10h2c.6 0 1 .4 1 1v1a2 2 0 0 1-2 2h-1"/>
        <path d="M4 10h2c.6 0 1 .4 1 1v1a2 2 0 0 1-2 2H4"/>
        <path d="M12 10a2 2 0 1 0-4 0"/>
        <path d="M12 10h2c.6 0 1 .4 1 1v1a2 2 0 0 1-2 2h-1"/>
        <path d="M6 6.5V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v.5"/>
    </svg>
);

// HERO SECTION COMPONENT
const HeroSection = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="bg-[#f9fafb] text-black py-40 md:py-40">
            <div className="absolute inset-0 z-0 opacity-10 hidden md:block">
                <BookIcon className="animate-float absolute top-[20%] left-[5%] h-16 w-16 text-[var(--color-primary)]"/>
                <GraduationCapIcon className="animate-float absolute top-[15%] right-[10%] h-20 w-20 text-[var(--color-primary)]" />
                <LightbulbIcon className="animate-float absolute bottom-[10%] left-[15%] h-12 w-12 text-[var(--color-primary)]" />
                <BrainIcon className="animate-float absolute bottom-[20%] right-[20%] h-16 w-16 text-[var(--color-primary)]" />
                <UniversityIcon className="animate-float absolute top-[60%] left-[25%] h-14 w-14 text-[var(--color-primary)]" />
                <StudentsIcon className="animate-float absolute top-[55%] right-[5%] h-12 w-12 text-[var(--color-primary)]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    <span className="block">AI-Powered </span>
                    <span className="block text-red-900">Higher Education Platform</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-900">
                    {/* Encando's AI platform, ChaTA, empowers educators and engages students with deeply personalized learning experiences—delivered anytime, anywhere. Free your faculty from repetitive tasks and give every student the support they need to succeed. */}
                    At Encando, we harness advanced AI to transform higher education through deeply personalized learning experiences—delivered at scale, anytime, anywhere.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="w-full sm:w-auto inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Request a Demo
                    </a>
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="w-full sm:w-auto text-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors duration-200 font-semibold">
                        See How It Works &darr;
                    </a>
                </div>
            </div>
        </section>
    );
};

// PROBLEM SECTION COMPONENT
const ProblemCard = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center justify-center h-64 w-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
        <p className="text-gray-900">{children}</p>
    </div>
);

const ProblemSection = () => (
    <section id="problem" className="bg-[var(--color-bg)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black">The Old Way Isn't Working.</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-primary)]">
                    We understand the challenges facing modern education.
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
                <ProblemCard icon={<img src="/assets/images/problem/instructor.png" alt="Tired Instructor" className="w-full " />} title="For Instructors">
                    {/* Faculty are burning out. They're buried under a mountain of repetitive student questions, manual grading, and administrative tasks, leaving little time for the high-impact teaching and mentorship that truly matter. */}
                    <p>Faculty burnout is real:</p>
                    <p>Routine student questions</p>
                    <p>Manual grading & regrading</p>
                    <p>LMS and email overload</p>
                    <p>Little time left for mentorship, course innovation, or research</p>
                </ProblemCard>
                <ProblemCard icon={<img src="/assets/images/problem/student.png" alt="Tired Student" className="w-full" />} title="For Students">
                    {/* Learners feel anonymous. In large classes, personalized attention is rare. They struggle to get timely help, leading to disengagement, frustration, and a greater risk of falling behind. */}
                    <p>Students feel unseen:</p>
                    {/* <p>In large classes, they often:</p> */}
                    <p>Waiting too long for answers</p>
                    <p>Not getting personalized feedback</p>
                    <p>Disengagement, losing motivation and confidence</p>
                </ProblemCard>
                <ProblemCard icon={<img src="/assets/images/problem/university.png" alt="Tired Institution" className="w-full" />} title="For Institutions">
                    {/* Scaling quality education is a constant challenge. Universities are grappling with how to improve student retention, ensure academic integrity, and deliver a world-class experience without exponentially increasing costs. */}
                    <p>Scaling quality education is hard:</p>
                    <p>Maintain academic standards and integrity</p>
                    <p>Improve retention and engagement</p>
                    <p>Control costs without adding staff</p>
                </ProblemCard>
            </div>
            <div className="mt-16">
                <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
                    <div className="grid gap-2 md:grid-cols-[25%_75%] lg:gap-16 items-center">
                        {/* NSF Logo Column */}
                        <div className="flex justify-center">
                            <img 
                                src="/assets/logos/NSF.png" 
                                alt="NSF Logo" 
                                className="h-24 w-auto"
                            />
                        </div>
                        
                        {/* Text Content Column */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Validated by NSF-Funded Research
                            </h3>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-primary)]">
                                We conducted extensive interviews with educators, TAs, and students across institutions as part of our NSF Corps grant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// SOLUTION SECTION COMPONENT
const SolutionSection = () => (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">
                        Meet <span className="text-[var(--color-primary)] text-6xl font-bold" style={{ fontFamily: 'dancing script'  }}>Encando</span>
                        <span className="text-[var(--color-text-primary)]">.&nbsp;Your AI Teaching Partner.</span> 
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
                        Encando is an integrated AI platform designed to augment—not replace—the human element of teaching. It learns from your unique course materials to become a specialized expert for your class.
                    </p>
                    <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
                        Encando handles the logistics, provides instant academic support, and unlocks deep performance insights. It's the partner you need to scale exceptional education.
                    </p>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img className="rounded-2xl shadow-2xl" src="https://placehold.co/600x400/1F2937/4A5568?text=ChaTA+Dashboard+UI" alt="ChaTA Platform Dashboard" />
                </div>
            </div>
        </div>
    </section>
);


// FEATURES SECTION COMPONENT
const FeatureDetail = ({ title, children }) => (
    <div className="mt-8">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="mt-2 text-gray-400">{children}</p>
    </div>
);

const FeaturesSection = () => (
    <section id="features" className="bg-[var(--color-bg)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Part A: For Professors & Institutions */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">Reclaim Your Time. Elevate Your Teaching.</h3>
                    <p className="mt-4 text-lg text-[var(--color-text-secondary)]">Empower your faculty with tools that automate the mundane and amplify their impact.</p>
                    <div className="mt-8 space-y-6">
                        <FeatureDetail title="On-Demand, Course-Specific Answers">
                            Eliminate repetitive queries. Our AI instantly resolves up to 80% of common student questions, trained exclusively on your syllabi, lecture notes, and textbooks. Give your faculty back their most valuable resource: time.
                        </FeatureDetail>
                        <FeatureDetail title="Actionable Insights into Student Progress">
                            Move from guesswork to guidance. Get a real-time dashboard of student engagement and comprehension. Identify at-risk students before they fall behind and discover class-wide knowledge gaps before the exam.
                        </FeatureDetail>
                        <FeatureDetail title="Streamlined Course Administration">
                            From AI-assisted exam creation to automated grading and one-click accreditation reporting (including ABET), ChaTA handles the administrative overhead so you can focus on impactful teaching and research.
                        </FeatureDetail>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 flex items-center justify-center">
                    <img className="rounded-2xl shadow-2xl" src="https://placehold.co/600x600/1F2937/4A5568?text=Instructor+Analytics" alt="Instructor Analytics Dashboard" />
                </div>
            </div>

            {/* Part B: For Students */}
            <div className="mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="lg:order-2 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">Your Personal Guide to Academic Success.</h3>
                    <p className="mt-4 text-lg text-gray-300">Give every student the personalized support they need to thrive.</p>
                    <div className="mt-8 space-y-6">
                        <FeatureDetail title="Instant, 24/7 Academic Support">
                            Stuck on a concept at 2 AM? Get immediate, multilingual help whenever you need it, on any device. No more waiting for office hours to get unstuck and move forward.
                        </FeatureDetail>
                        <FeatureDetail title="Get Help You Can Actually Trust">
                            Unlike generic AI, ChaTA provides answers that are 100% aligned with your specific course. It learns from your professor's materials, so you get reliable help that's relevant to your next exam.
                        </FeatureDetail>
                        <FeatureDetail title="Visualize Your Path to Mastery">
                            Take control of your education. Understand your unique strengths and weaknesses with a personalized learning dashboard. Track your progress, review key concepts, and walk into every exam with confidence.
                        </FeatureDetail>
                    </div>
                </div>
                <div className="lg:order-1 mt-10 lg:mt-0 flex items-center justify-center">
                    <img className="rounded-2xl shadow-2xl" src="https://placehold.co/600x600/1F2937/4A5568?text=Student+Dashboard" alt="Student Progress Dashboard" />
                </div>
            </div>
        </div>
    </section>
);


// SOCIAL PROOF SECTION COMPONENT
const SocialProofSection = () => (
    <section id="social-proof" className="bg-[var(--color-surface)] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">
            Building the Future of Education with Trusted Partners
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-[var(--color-text-secondary)]">
            We're proud to collaborate with leading academic institutions and forward-thinking organizations to redefine the learning experience.
          </p>
        </div>
  
        <div className="mt-16">
          {/* Trusted By Section */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] tracking-wider uppercase">
              Trusted By
            </h3>
            <div className="mt-6 flex justify-center items-center space-x-8 sm:space-x-12 opacity-80">
              {/* Placeholder Logos for Universities - Replace with actual logos */}
              {/* <span className="text-2xl font-semibold text-[var(--color-text-secondary)]">University One</span>
              <span className="text-2xl font-semibold text-[var(--color-text-secondary)]">University Two</span> */}
              <img src="/assets/logos/TAMU.png" alt="TAMU Logo" className="h-24 w-auto" />
              <img src="https://webassets.unt.edu/assets/branding/unt-stacked-logo.svg" alt="UNT Logo" className="h-24 w-auto" />
            </div>
          </div>
  
          {/* Backed By Section */}
          <div className="mt-16 text-center">
             <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] tracking-wider uppercase">
              Backed By
            </h3>
            <div className="mt-6 flex justify-center items-center flex-wrap gap-x-12 gap-y-6 filter grayscale opacity-60">
               {/* Placeholder Logos for Backers - Replace with actual logos */}
              {/* <span className="text-xl font-semibold text-[var(--color-text-secondary)]">Investor A</span>
              <span className="text-xl font-semibold text-[var(--color-text-secondary)]">Accelerator B</span>
              <span className="text-xl font-semibold text-[var(--color-text-secondary)]">VC Firm C</span>
              <span className="text-xl font-semibold text-[var(--color-text-secondary)]">Foundation D</span> */}
              <img src="/assets/logos/TAMU.png" alt="TAMU Logo" className="h-24 w-auto" />
              <img src="/assets/logos/TAMU-Innovation.avif" alt="TAMU Innovation Logo" className="h-24 w-auto" />
              <img src="/assets/logos/NSF.png" alt="NSF Logo" className="h-24 w-auto" />
              <img src="/assets/logos/NSF-I-Corps.jpg" alt="NSF I-Corps Logo" className="h-24 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

// CALL TO ACTION (CTA) SECTION COMPONENT
const CtaSection = () => {
    return (
        <section id="cta" className="bg-[var(--color-bg)] py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left side - Text content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">
                            Ready to Transform Your Learning Environment?
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-[var(--color-text-secondary)]">
                            See how Encando's AI can empower your institution, engage your students, and unlock limitless potential. Schedule a brief, personalized demo with our team today.
                        </p>
                        <div className="mt-8 lg:hidden">
                            <DemoRequestForm />
                        </div>
                    </div>

                    {/* Right side - Demo form (desktop) */}
                    <div className="hidden lg:block mt-10 lg:mt-0">
                        <DemoRequestForm />
                    </div>
                </div>
            </div>
        </section>
    );
}


const Company = () => {
    return (
        <>
            <Header />

            <main>
                <HeroSection />
                <ProblemSection />
                <SolutionSection />
                <FeaturesSection />
                <SocialProofSection />
                <CtaSection />
            </main>
            <Footer />
        </>
    );
};

export default Company;