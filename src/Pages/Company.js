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
                    <div className="mt-6 flex justify-center items-center flex-wrap gap-x-12 gap-y-6 filter">
                        {/* Placeholder Logos for Universities - Replace with actual logos */}
                        {/* <span className="text-2xl font-semibold text-[var(--color-text-primary)]">University One</span>
              <span className="text-2xl font-semibold text-[var(--color-text-primary)]">University Two</span> */}
                        <img src="/assets/logos/TAMU.png" alt="TAMU Logo" className="h-24 w-auto" />
                        <img src="https://webassets.unt.edu/assets/branding/unt-stacked-logo.svg" alt="UNT Logo" className="h-24 w-auto" />
                        <img src="https://www.ttu.edu/brand/images/visual-identity/ttu-wordmark-stack.png" alt="TTU Logo" className="h-24 w-auto" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/University_of_Texas_at_Austin_logo.svg" alt="UTMAC Logo" className="h-16 w-auto" />
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
                        <img src="/assets/logos/NSF-I-Corps.jpg" alt="NSF I-Corps Logo" className="h-16 w-auto" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png" alt="Google Logo" className="h-14 w-auto" />
                    </div>
                </div>

                {/* Compliance Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-base font-bold text-[var(--color-text-primary)] tracking-wider uppercase">
                        Compliance & Security
                    </h3>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-8 md:gap-12">
                        {/* TX-RAMP Level-2 */}
                        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                            <img 
                                src="/assets/logos/TX-Ramp-Certification-Badge.png" 
                                alt="TX-RAMP Level-2 Certified" 
                                className="h-20 md:h-24 w-auto object-contain"
                            />
                        </div>

                        {/* FERPA */}
                        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                            <img 
                                src="/assets/logos/ferpa.png" 
                                alt="FERPA Compliant" 
                                className="h-20 md:h-24 w-auto object-contain"
                            />
                        </div>

                        {/* WCAG AA 2.1 */}
                        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                            <img 
                                src="/assets/logos/WCAG.png" 
                                alt="WCAG AA 2.1 - VPAT Available" 
                                className="h-20 md:h-24 w-auto object-contain"
                            />
                        </div>

                        {/* HECVAT */}
                        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                            <img 
                                src="/assets/logos/HECVAT.png" 
                                alt="HECVAT Assessed" 
                                className="h-20 md:h-24 w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// TESTIMONIALS SECTION COMPONENT
const QuoteIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z" />
    </svg>
);

const testimonials = [
    {
        id: 1,
        quote: <>The AI-assisted grading is reasonably<span className="text-[var(--color-primary)] font-semibold"> accurate</span>, <span className="text-[var(--color-primary)] font-semibold">very consistent</span>, and <span className="text-[var(--color-primary)] font-semibold">informative to students</span>. This significantly improves the <span className="bg-[var(--color-primary)]/10 px-1 rounded font-semibold">efficiency, accuracy, and fairness</span> in grading assignments and exams.</>,
        name: "Bruce L. Tai",
        title: "Associate Professor of Mechanical Engineering",
        institution: "Texas A&M University",
        image: `${process.env.PUBLIC_URL}/assets/images/testimonials/Tai-Bruce.jpg`,
        textSize: "text-base md:text-lg lg:text-xl" // Medium quote - responsive
    },
    {
        id: 2,
        quote: <>Encando's AI-assisted report grading made it possible to maintain <span className="text-[var(--color-primary)] font-semibold">consistent grading across multiple graders</span>. It <span className="bg-[var(--color-primary)]/10 px-1 rounded font-semibold">saved us time</span> and allowed us to focus more on giving <span className="text-[var(--color-primary)] font-semibold">meaningful feedback</span> to students. I really love the <span className="bg-[var(--color-primary)]/10 px-1 rounded font-semibold">Coach Feedback</span> feature. It provided well-structured formative guidance and helped students <span className="text-[var(--color-primary)] font-semibold">improve their work</span> before their final submission.</>,
        name: "Kim Haejune",
        title: "Instructional Associate Professor, Mechanical Engineering",
        institution: "Texas A&M University",
        image: `${process.env.PUBLIC_URL}/assets/images/testimonials/haejune-kim.jpg`,
        textSize: "text-base md:text-base lg:text-lg" // Longest quote - responsive
    },
    {
        id: 3,
        quote: <>Encando helps students <span className="text-[var(--color-primary)] font-semibold">understand a topic through examples</span>; <span className="bg-[var(--color-primary)]/10 px-1 rounded font-semibold">saves time</span> when grading structured homework.</>,
        name: "Wayne Hung",
        title: "Professor, Engineering Technology & Industrial Distribution",
        institution: "Texas A&M University",
        image: `${process.env.PUBLIC_URL}/assets/images/testimonials/hung-wayne.jpg`,
        textSize: "text-lg md:text-xl lg:text-2xl" // Shortest quote - responsive
    }
];

const TestimonialCard = ({ testimonial, index }) => (
    <div 
        className={`group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full ${index === 1 ? 'lg:scale-105 lg:z-10' : ''}`}
        style={{ animationDelay: `${index * 150}ms` }}
    >
        {/* Decorative gradient border on hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
        <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-white -z-10"></div>
        
        {/* Quote icon */}
        <div className="absolute -top-3 sm:-top-4 left-5 sm:left-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full flex items-center justify-center shadow-lg">
                <QuoteIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
        </div>
        
        {/* Quote text with highlighted keywords - text size varies by quote length */}
        <blockquote className={`mt-3 sm:mt-4 text-[var(--color-text-primary)] ${testimonial.textSize || 'text-base md:text-lg'} leading-relaxed flex-grow`}>
            "{testimonial.quote}"
        </blockquote>
        
        {/* Author info - pushed to bottom */}
        <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 sm:gap-4">
                {/* Avatar with fixed dimensions - responsive sizes */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 min-w-[2.75rem] sm:min-w-[3rem] md:min-w-[3.5rem] min-h-[2.75rem] sm:min-h-[3rem] md:min-h-[3.5rem] rounded-full overflow-hidden shadow-md ring-2 ring-[var(--color-primary)]/20 flex-shrink-0">
                    {testimonial.image ? (
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm sm:text-base text-[var(--color-text-primary)]">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 sm:truncate">{testimonial.title}</p>
                    <p className="text-xs sm:text-sm font-medium text-[var(--color-primary)]">{testimonial.institution}</p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => (
    <section id="testimonials" className="relative bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] py-20 sm:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-primary-light)] opacity-5 rounded-full blur-3xl"></div>
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm sm:text-base font-bold rounded-full mb-3 sm:mb-4 tracking-wider uppercase">
                    Testimonials
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] mb-3 sm:mb-4 px-2">
                    Trusted by <span className="text-[var(--color-primary-light)]">Leading Educators</span>
                </h2>
                <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 px-4">
                    Hear from professors who are transforming their teaching experience with Encando.
                </p>
            </div>

            {/* Testimonials grid - responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch pt-4">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                ))}
            </div>

            {/* Stats bar */}
            {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">15+</div>
                    <div className="text-sm text-gray-600 mt-1">Courses Using Encando</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">2000+</div>
                    <div className="text-sm text-gray-600 mt-1">Students Helped</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">50K+</div>
                    <div className="text-sm text-gray-600 mt-1">Assignments Graded</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">90%</div>
                    <div className="text-sm text-gray-600 mt-1">Time Saved on Grading</div>
                </div>
            </div> */}
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
                <TestimonialsSection />
                <CtaSection />
            </main>
            <Footer />
        </>
    );
};

export default Company;