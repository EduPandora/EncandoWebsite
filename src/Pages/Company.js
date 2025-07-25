import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DemoRequestForm from '../Components/Elements/DemoRequestForm';
import ProblemCard from '../Components/Elements/ProblemCard';
import '../Styles/Company.css';

const BookIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
);
const GraduationCapIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
);
const LightbulbIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S10 4.8 10 7c0 2 .3 3.2 1.5 4.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
);
const BrainIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h-3A2.5 2.5 0 0 1 4 4.5v0A2.5 2.5 0 0 1 6.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v0A2.5 2.5 0 0 0 14.5 7h3a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 17.5 2Z" /><path d="M12 13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5h0A2.5 2.5 0 0 1 19.5 7.5v3A2.5 2.5 0 0 1 17 13Z" /><path d="M12 13a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h0A2.5 2.5 0 0 0 4.5 7.5v3A2.5 2.5 0 0 0 7 13Z" /><path d="M12 13a2.5 2.5 0 0 0 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 9.5 13Z" /></svg>
);


const UniversityIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10v12H6" />
        <path d="M18 2h-1.5a2.5 2.5 0 0 0-2.5 2.5V22" />
        <path d="M14 14V2" />
    </svg>
);

const StudentsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
        <path d="M18 10a2 2 0 1 0-4 0" />
        <path d="M6 10a2 2 0 1 0-4 0" />
        <path d="M18 10h1a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1" />
        <path d="M5 10H4a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1" />
        <path d="m12 12-1-1-1 1" />
        <path d="M12 6a2 2 0 1 0-4 0" />
        <path d="M12 6h1a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1" />
    </svg>
);

// HERO SECTION COMPONENT
const HeroSection = () => {
    // Simple scroll function since we're already on the home page with all sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="bg-[#f9fafb] text-black py-20 md:py-40 lg:py-60">
            <div className="absolute inset-0 z-0 opacity-10 hidden md:block">
                <BookIcon className="animate-float absolute top-[20%] left-[5%] h-16 w-16 text-[var(--color-primary)]" />
                <GraduationCapIcon className="animate-float absolute top-[15%] right-[10%] h-20 w-20 text-[var(--color-primary)]" />
                <LightbulbIcon className="animate-float absolute bottom-[10%] left-[15%] h-12 w-12 text-[var(--color-primary)]" />
                <BrainIcon className="animate-float absolute bottom-[20%] right-[20%] h-16 w-16 text-[var(--color-primary)]" />
                <UniversityIcon className="animate-float absolute top-[60%] left-[25%] h-14 w-14 text-[var(--color-primary)]" />
                <StudentsIcon className="animate-float absolute top-[55%] right-[5%] h-12 w-12 text-[var(--color-primary)]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-1">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    <span className="block">AI-Powered </span>
                    <span className="block text-[var(--color-primary-light)]">Higher Education Platform</span>
                </h1>
                <p className="mt-6 max-w-4xl mx-auto text-lg md:text-2xl text-[var(--color-text-primary)]">
                    {/* Encando's AI platform, ChaTA, empowers educators and engages students with deeply personalized learning experiences—delivered anytime, anywhere. Free your faculty from repetitive tasks and give every student the support they need to succeed. */}
                    At Encando, we harness advanced AI to transform higher education through deeply personalized learning experiences—delivered at scale, anytime, anywhere.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:text-xl">
                    <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="w-full sm:w-auto inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Request a Demo
                    </a>
                    {/* <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="w-full sm:w-auto text-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors duration-200 font-semibold">
                        See How It Works &darr;
                    </a> */}
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="w-full sm:w-auto inline-block text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-all duration-300 transform font-semibold">
                        See How It Works &darr;
                    </a>
                </div>
            </div>
        </section>
    );
};

// PROBLEM SECTION COMPONENT
const ProblemSection = () => (
    <section id="problem" className="bg-[var(--color-surface)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black">The Old Way Isn't Working.</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-primary)]">
                    We understand the challenges facing modern education.
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
                <ProblemCard icon={<img src={`${process.env.PUBLIC_URL}/assets/images/problem/instructor.png`} alt="Tired Instructor" className="w-full " />} title="Instructors">
                    {/* Faculty are burning out. They're buried under a mountain of repetitive student questions, manual grading, and administrative tasks, leaving little time for the high-impact teaching and mentorship that truly matter. */}
                    <p>Faculty burnout is real:</p>
                    <ul className="list-disc list-inside font-semibold">
                        <li>Routine student questions</li>
                        <li>Manual grading & regrading</li>
                        <li>LMS and email overload</li>
                        <li>Little time left for mentorship, course innovation, or research</li>
                    </ul>
                </ProblemCard>
                <ProblemCard icon={<img src={`${process.env.PUBLIC_URL}/assets/images/problem/student.png`} alt="Tired Student" className="w-full" />} title="Students">
                    {/* Learners feel anonymous. In large classes, personalized attention is rare. They struggle to get timely help, leading to disengagement, frustration, and a greater risk of falling behind. */}
                    <p>Students feel unseen:</p>
                    {/* <p>In large classes, they often:</p> */}
                    <ul className="list-disc list-inside font-semibold">
                        <li>Waiting too long for answers</li>
                        <li>Not getting personalized feedback</li>
                        <li>Disengagement, losing motivation and confidence</li>
                    </ul>
                </ProblemCard>
                <ProblemCard icon={<img src={`${process.env.PUBLIC_URL}/assets/images/problem/university.png`} alt="Tired Institution" className="w-full" />} title="Institutions">
                    {/* Scaling quality education is a constant challenge. Universities are grappling with how to improve student retention, ensure academic integrity, and deliver a world-class experience without exponentially increasing costs. */}
                    <p>Scaling quality education is hard:</p>
                    <ul className="list-disc list-inside font-semibold">
                        <li>Maintain academic standards and integrity</li>
                        <li>Improve retention and engagement</li>
                        <li>Control costs without adding staff</li>
                    </ul>
                </ProblemCard>
            </div>
            <div className="mt-16">
                <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
                    <div className="grid gap-2 md:grid-cols-[25%_75%] lg:gap-16 items-center">
                        {/* NSF Logo Column */}
                        <div className="flex justify-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/logos/NSF.png`}
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
                                We conducted extensive interviews with educators, TAs, and students across institutions as part of our NSF Research and I-Corps grant.
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
    <section className="bg-[var(--color-bg)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">
                        Meet <span className="text-[var(--color-primary-light)] text-6xl font-extrabold" style={{ fontFamily: 'dancing script' }}>Encando</span>
                        <p className="text-[var(--color-text-primary)]">Your AI Teaching Partner.</p>
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-primary)]">
                        {/* Encando is an integrated AI platform designed to augment—not replace—the human element of teaching. It learns from your unique course materials to become a specialized expert for your class. */}
                        Encando is an all-in-one integrated AI platform, designed to reduce educators' teaching load and administrative burden, while delivering personalized and engaging learning experiences for students -- all within a manageable budget for institutions.
                    </p>
                    <p className="mt-4 text-lg text-[var(--color-text-primary)]">
                        {/* It handles the logistics, provides instant academic support, and unlocks deep performance insights. It's the partner you need to scale exceptional education. */}
                        Our platform automates routine TA tasks, provides instant academic support, and unlocks deep performance insights. It's the partner you need to scale exceptional education.
                    </p>
                </div>
                <div className="m-10 sm:m-20 lg:m-0 lg:mt-0 text-4xl md:text-[48px]/[56px] font-bold tracking-tight">
                    <p>Powered by AI.</p>
                    <p className="text-[var(--color-primary-light)]">Monitored by Instructors.</p>
                    <p>Favored by Students.</p>
                </div>
            </div>
        </div>
    </section>
);


// FEATURES SECTION COMPONENT
const instructorFeatures = [
    {
        id: 'if1',
        title: 'Easy Course Building',
        description: 'Effortlessly create comprehensive courses in minutes. Simply upload your syllabus, lecture notes, textbooks, and videos—Encando will thoroughly understand your materials.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Course Building.gif`,
    },
    {
        id: 'if2',
        title: 'Assignment Grading',
        description: 'Effortlessly grade student assignments with AI. Upload your assignment, generate outlines and solutions, and let Encando’s AI provide instant, customizable grading and feedback.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Assignment Grading.gif`,
    },
    {
        id: 'if3',
        title: 'Project Grading',
        description: 'Streamline project evaluation with automated rubrics. Upload your grading criteria, extract solutions directly from documents, and easily review or adjust grades before exporting results.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Project Grading.gif`,
    },
    {
        id: 'if4',
        title: '24/7 Teaching Assistant',
        description: 'Provide instant, reliable answers to your students’ questions any time of day. Encando’s AI-powered assistant supports continuous learning beyond the classroom.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/ChaTA.gif`,
    },
    {
        id: 'if5',
        title: 'Automatic Assessment Generation',
        description: 'Quickly generate custom quizzes and exercises tailored to each topic, automatically assessing your students’ understanding with precision and efficiency.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Exercise Generation.gif`,
    },
    {
        id: 'if6',
        title: 'Class-wide Performance Analytics',
        description: 'Get clear, insightful analytics at a glance. Instantly identify class trends or deep-dive into individual student performance, empowering informed teaching decisions.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Class Report.gif`,
    }
];

const studentFeatures = [
    {
        id: 'sf1',
        title: '24/7 Course & Assignment Help',
        description: 'Gain clarity on assignments whenever you need. Encando’s AI chatbot provides guidance and helps you understand problems deeply without simply revealing answers.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Assignment Helper.gif`,
    },
    {
        id: 'sf2',
        title: 'Project Coach & Feedback',
        description: 'Receive real-time coaching and meaningful feedback on your projects, enabling you to improve your skills and achieve higher scores.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Project Coach.gif`,
    },
    {
        id: 'sf3',
        title: 'Self-learning Tools & Social Connections',
        description: 'Take charge of your learning with personalized insights. Identify your strengths, tackle weaknesses effectively, track your academic growth, and connect with peers who share your academic interests.',
        imageUrl: `${process.env.PUBLIC_URL}/assets/images/features/Study Buddy.gif`,
    },
];

const FeatureScroller = ({ title, description, features, _for }) => {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <div className="mt-20">
            <h3 className="my-6 text-2xl md:text-4xl font-bold text-[var(--color-primary-light)] tracking-wider uppercase text-center">
                For {_for}s
            </h3>
            <h3 className="text-xl md:text-3xl font-extrabold text-[var(--color-text-primary)] text-center">{title}</h3>
            <p className="text-lg text-[var(--color-text-primary)] text-center mb-10">
                {description}
            </p>

            {/* Desktop View */}
            <div className="hidden lg:grid lg:grid-cols-10 lg:gap-20 lg:mt-12 items-start">
                <div className="col-span-4 space-y-4 p-3 flex h-[450px] overflow-y-auto flex-col items-start">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            onMouseEnter={e => {
                                setActiveFeature(feature);
                                // Scroll into view if needed
                                if (e.currentTarget && e.currentTarget.scrollIntoView) {
                                    e.currentTarget.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                                }
                            }}
                            className={`shadow-lg p-6 rounded-xl cursor-pointer transition-all duration-600 ${activeFeature.id === feature.id ? 'border-2 border-[var(--color-primary-light)]' : 'bg-[var(--color-surface)] hover:bg-[var(--color-surface)]/50'}`}
                        >
                            <h4 className={`font-bold text-lg ${activeFeature.id === feature.id ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-primary)]'}`}>{feature.title}</h4>
                            <div className={`mt-2 text-[var(--color-text-primary)] text-lg transition-all duration-1000 ease-in-out overflow-hidden ${activeFeature.id === feature.id ? 'max-h-40' : 'max-h-0'}`}>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-6 sticky top-24 h-full">
                    <div className="relative aspect-video bg-[var(--color-surface)] rounded-xl shadow-2xl overflow-hidden">
                        {features.map(feature => (
                            <img
                                key={feature.id}
                                src={activeFeature.id === feature.id ? `${feature.imageUrl}?t=${activeFeature.id}` : feature.imageUrl}
                                alt={feature.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${activeFeature.id === feature.id ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden mt-8 space-y-6">
                {features.map((feature, index) => (
                    <div key={feature.id} className="bg-[var(--color-surface)] rounded-lg shadow-lg overflow-hidden">
                        <img src={feature.imageUrl} alt={feature.title} className="p-6 w-full h-auto object-contain" />
                        <div className="p-6">
                            <h4 className="font-bold text-lg text-[var(--color-text-primary)]">{feature.title}</h4>
                            <p className="mt-2 text-[var(--color-text-primary)]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FeaturesSection = () => (
    <section id="features" className="bg-[var(--color-surface)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-y-20">
            <FeatureScroller title="Reclaim Your Time. Elevate Your Teaching." description="Instructors can now focus on what truly matters: teaching and mentorship." features={instructorFeatures} _for="instructor" />
            <FeatureScroller title="Your Personal Guide to Academic Success." description="Students enjoy a more engaging and personalized learning journey with like-minded peers." features={studentFeatures} _for="student" />
        </div>
    </section>
);


// SOCIAL PROOF SECTION COMPONENT
const SocialProofSection = () => (
    <section id="social-proof" className="bg-[var(--color-bg)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">
                    Building the Future of Education with Trusted Partners
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-[var(--color-text-primary)]">
                    We're proud to collaborate with leading academic institutions and forward-thinking organizations to redefine the learning experience.
                </p>
            </div>

            <div className="mt-16">
                {/* Trusted By Section */}
                <div className="text-center">
                    <h3 className="text-base font-bold text-[var(--color-text-primary)] tracking-wider uppercase">
                        Trusted By
                    </h3>
                    <div className="mt-6 flex justify-center items-center space-x-8 sm:space-x-12 opacity-80">
                        {/* Placeholder Logos for Universities - Replace with actual logos */}
                        {/* <span className="text-2xl font-semibold text-[var(--color-text-primary)]">University One</span>
              <span className="text-2xl font-semibold text-[var(--color-text-primary)]">University Two</span> */}
                        <img src="/assets/logos/TAMU.png" alt="TAMU Logo" className="h-24 w-auto" />
                        <img src="https://webassets.unt.edu/assets/branding/unt-stacked-logo.svg" alt="UNT Logo" className="h-24 w-auto" />
                    </div>
                </div>

                {/* Backed By Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-base font-bold text-[var(--color-text-primary)] tracking-wider uppercase">
                        Backed By
                    </h3>
                    <div className="mt-6 flex justify-center items-center flex-wrap gap-x-12 gap-y-6 filter ">
                        {/* Placeholder Logos for Backers - Replace with actual logos */}
                        {/* <span className="text-xl font-semibold text-[var(--color-text-primary)]">Investor A</span>
              <span className="text-xl font-semibold text-[var(--color-text-primary)]">Accelerator B</span>
              <span className="text-xl font-semibold text-[var(--color-text-primary)]">VC Firm C</span>
              <span className="text-xl font-semibold text-[var(--color-text-primary)]">Foundation D</span> */}
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
        <section id="cta" className="bg-[var(--color-surface)] py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"> */}
                {/* Left side - Text content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">
                        Ready to Transform Your Teaching Environment?
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-[var(--color-text-primary)]">
                        See how Encando's AI can empower your institution, engage your students, and unlock limitless potential. Schedule a brief meeting with our team today.
                    </p>
                    {/* <a href="https://join.slack.com/t/encando/shared_invite/zt-362lnbhcm-UFwOVxwsDbj27SNOPpUBJg" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 nav-button nav-button-with-icon"> */}


                    {/* <div className="mt-8 lg:hidden">
                            <DemoRequestForm />
                        </div> */}
                    <div className="mt-8 flex items-center w-full justify-center gap-4">
                        <div className="flex justify-center items-center ">
                            <a href="https://calendly.com/rujun-encando/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">Request a Demo</a>
                        </div>
                        {/* <h3 className="mx-4 text-base font-bold text-[var(--color-text-primary)] tracking-wider uppercase text-center">
                            Or
                        </h3> */}
                        <div className="flex justify-center items-center gap-2 w-full sm:w-auto">
                            <a href="https://join.slack.com/t/encando/shared_invite/zt-362lnbhcm-UFwOVxwsDbj27SNOPpUBJg" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[var(--color-surface)] items-center gap-2 rounded-lg py-3 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <svg className="nav-icon slack-icon" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A" />
                                    <path d="M6.313 15.165a2.528 2.528 0 0 1 2.521-2.52 2.528 2.528 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
                                    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0" />
                                    <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
                                    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D" />
                                    <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
                                    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E" />
                                    <path d="M15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
                                </svg>
                                Join Us on Slack
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side - Demo form (desktop)
                    <div className="hidden lg:block mt-10 lg:mt-0">
                        <DemoRequestForm />
                    </div> */}
            </div>
            {/* </div> */}
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