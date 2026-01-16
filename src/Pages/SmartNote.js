import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Simple icon components to replace lucide-react
const CheckIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ArrowRightIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const UploadIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

const WandIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
        <path d="m14 7 3 3" />
        <path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" />
    </svg>
);

const PenSquareIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
    </svg>
);

const AwardIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

const ShieldCheckIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const UsersIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const TypeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
);

const TableIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18" /><rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" /><path d="M3 15h18" />
    </svg>
);

const ImageIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
);

const PaletteIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
);

const LinkIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
);

const ZapIcon = ({ className, fill }) => (
    <svg className={className} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const RulerIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
        <path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" />
    </svg>
);

const RadicalIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h2l4 8 6-16h6" />
    </svg>
);

const PersonStandingIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="1" />
        <path d="m9 20 3-6 3 6" /><path d="m6 8 6 2 6-2" /><path d="M12 10v4" />
    </svg>
);

function SmartNote() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500 opacity-5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md mb-6">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/icons/shield-icon.png`}
                                    alt="Shield"
                                    className="h-4 w-4 mr-2"
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                                <span className="text-sm text-gray-500">
                                    Trusted by Leading Faculty at{" "}
                                    <span className="font-semibold text-gray-900">
                                        Texas A&M University
                                    </span>
                                </span>
                            </div>
                            {/* Main Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                From Handwritten Notes to
                                <span className="text-blue-600"> Digitally Accessible</span> <br />
                                Documents
                            </h1>
                            {/* Subheadline */}
                            <p className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed">
                                AI-powered conversion that makes your PDFs fully accessible and ADA
                                & WCAG 2.1 compliant in minutes. Edit text, tables, and equations
                                with our advanced editor.
                            </p>
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                                <a
                                    href="https://ada.encando.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all"
                                >
                                    Start for Free
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </a>
                                <button
                                    onClick={() => scrollToSection("how-it-works")}
                                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                                >
                                    See How It Works
                                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                </button>
                            </div>
                            {/* Microcopy */}
                            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap text-sm text-gray-500">
                                <span className="flex items-center">
                                    <CheckIcon className="text-green-500 mr-2 h-4 w-4" />
                                    20 Free Credits
                                </span>
                                <span className="flex items-center">
                                    <CheckIcon className="text-green-500 mr-2 h-4 w-4" />
                                    No Credit Card Required
                                </span>
                                <span className="flex items-center">
                                    <CheckIcon className="text-green-500 mr-2 h-4 w-4" />
                                    1 Credit = 1 Page ($0.15)
                                </span>
                            </div>
                        </div>
                        {/* Right Visual */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <img
                                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/21673b76-2b34-4a27-162f-ac4ee65d4700/publicContain"
                                    alt="AI technology automates document verification for accuracy and compliance."
                                    className="w-full h-auto"
                                />
                                {/* Floating Badge */}
                                <div className="absolute top-6 right-6 bg-white rounded-lg px-4 py-2 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <ZapIcon className="text-yellow-500 h-5 w-5" fill="yellow" />
                                        <span className="font-semibold text-gray-900">
                                            AI-Powered
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Transform your handwritten notes into accessible digital documents in
                            three simple steps
                        </p>
                    </div>
                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-white">1</span>
                                </div>
                                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
                                    <UploadIcon className="h-10 w-10 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    Upload Your PDF
                                </h3>
                                <p className="text-gray-500 text-center leading-relaxed">
                                    Simply drag and drop your handwritten notes or scanned documents
                                    in PDF format
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                                <ArrowRightIcon className="h-8 w-8 text-blue-600" />
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-white">2</span>
                                </div>
                                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
                                    <WandIcon className="h-10 w-10 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    AI Converts Instantly
                                </h3>
                                <p className="text-gray-500 text-center leading-relaxed">
                                    Our AI processes your document, ensuring full ADA & WCAG 2.1
                                    compliance automatically
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                                <ArrowRightIcon className="h-8 w-8 text-blue-600" />
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-white">3</span>
                                </div>
                                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
                                    <PenSquareIcon className="h-10 w-10 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    Edit & Download
                                </h3>
                                <p className="text-gray-500 text-center leading-relaxed">
                                    Edit text, tables, and equations using our powerful editor
                                    and get your accessible document.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accessibility Section */}
            <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Visual */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                                    <img
                                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5e06e1b0-ab8c-4951-295e-4b5da44f4500/publicContain"
                                        alt="Abstract digital folder icon on circuit board."
                                        className="w-full h-auto"
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl px-6 py-4 shadow-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 p-1 bg-green-500 rounded-full flex items-center justify-center">
                                            <CheckIcon className="text-white h-4 w-4" />
                                        </div>
                                        <span className="text-lg font-bold text-gray-900">
                                            ADA Compliant
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">WCAG 2.1 Level AA</p>
                                </div>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md mb-6">
                                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                                    <PersonStandingIcon className="text-white h-3 w-3" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900">#1 Feature</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Unlock Universal
                                <span className="text-blue-600"> Accessibility</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                Smart Note ensures every document meets the highest accessibility
                                standards, making your content accessible to everyone, everywhere.
                            </p>
                            {/* Compliance Features */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <AwardIcon className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">
                                            ADA & WCAG 2.1 Compliant
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Full compliance with accessibility regulations and standards
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <ShieldCheckIcon className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">
                                            Verified by Trusted Checkers
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Passes axes4, PAC Report, and other leading accessibility audits
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <UsersIcon className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">
                                            Inclusive for All Users
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Screen readers, assistive technology, and visual accommodations supported
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editor Features Section */}
            <section id="editor-features" className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md mb-6">
                                <RulerIcon className="text-blue-600 mr-2 h-4 w-4" />
                                <span className="text-sm font-semibold text-gray-900">Powerful Editor</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Full Control with
                                <span className="text-blue-600"> Advanced Editor</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                Don't just convert - customize. Our intuitive editor gives you
                                complete control over your documents with professional-grade tools.
                            </p>
                            {/* Editor Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                                    <TypeIcon className="text-blue-600 h-6 w-6" />
                                    <span className="font-semibold text-gray-900">Rich Text Editing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                                    <TableIcon className="text-blue-600 h-6 w-6" />
                                    <span className="font-semibold text-gray-900">Table Management</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                                    <RadicalIcon className="text-blue-600 h-6 w-6" />
                                    <span className="font-semibold text-gray-900">MathType Support</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                                    <ImageIcon className="text-blue-600 h-6 w-6" />
                                    <span className="font-semibold text-gray-900">Image Integration</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                                    <PaletteIcon className="text-blue-600 h-6 w-6" />
                                    <span className="font-semibold text-gray-900">Formatting Tools</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                                    <LinkIcon className="text-blue-600 h-6 w-6" />
                                    <span className="font-semibold text-gray-900">Hyperlinks & TOC</span>
                                </div>
                            </div>
                        </div>
                        {/* Right Visual */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <img
                                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/747ec462-b4eb-4250-1069-71e93ecc7b00/public"
                                    alt="UI/UX design interface with data visualization."
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Floating Feature Badge */}
                            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl px-6 py-4 shadow-xl transform rotate-3">
                                <p className="text-white font-bold text-lg">Professional Grade</p>
                                <p className="text-white text-sm opacity-90">Industry-Standard Tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Simple, Risk-Free Pricing
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Start free with 20 credits. Only pay for what you use with our
                            transparent pay-per-page model.
                        </p>
                    </div>
                    {/* Pricing Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Pay As You Go Card */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-center">
                                <span className="font-bold text-white text-sm uppercase tracking-wider">
                                    Most Popular Plan
                                </span>
                            </div>
                            <div className="p-8 sm:p-12">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay As You Go</h3>
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="text-5xl font-bold text-blue-600">$0</span>
                                        <span className="text-xl text-gray-500">to start</span>
                                    </div>
                                    <p className="text-gray-500">1 Credit = 1 Page Converted</p>
                                    <p className="text-lg font-semibold text-gray-900 mt-2">
                                        Only $0.15 per credit
                                    </p>
                                </div>
                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {[
                                        { title: "20 Free Credits to Start", desc: "Convert 20 pages completely free - no credit card required" },
                                        { title: "Full ADA & WCAG 2.1 Compliance", desc: "Every conversion meets accessibility standards" },
                                        { title: "Advanced Editor Access", desc: "Edit text, tables, equations with MathType support" },
                                        { title: "Fast AI Processing", desc: "Documents ready in minutes, not hours" },
                                        { title: "No Subscriptions or Hidden Fees", desc: "Buy credits only when you need them" },
                                        { title: "Priority Support", desc: "Get help when you need it from our team" },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckIcon className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-900">{feature.title}</p>
                                                <p className="text-sm text-gray-500">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* CTA Button */}
                                <a
                                    href="https://ada.encando.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl text-lg py-4 rounded-lg font-semibold flex items-center justify-center transition-all"
                                >
                                    Start for Free
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </a>
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    No credit card required • Credits never expire
                                </p>
                            </div>
                        </div>

                        {/* For Institutions Card */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-green-500 py-3 text-center">
                                <span className="font-bold text-white text-sm uppercase tracking-wider">
                                    For Institutions
                                </span>
                            </div>
                            <div className="p-8 sm:p-12 flex flex-col h-full">
                                <div className="mb-6">
                                    <h4 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                                        Ready to Make{" "}
                                        <span className="text-green-500">Your Documents Accessible?</span>
                                    </h4>
                                    <p className="text-base sm:text-lg text-gray-900 font-medium">
                                        Join leading institutions and professionals who trust Smart
                                        Note to convert handwritten notes into fully accessible
                                        digital documents.
                                    </p>
                                </div>

                                <div className="space-y-4 mb-11">
                                    {[
                                        { title: "20 Free Credits for every member", desc: "Convert 20 pages completely free - no credit card required" },
                                        { title: "Full ADA & WCAG 2.1 Compliance", desc: "Every conversion meets accessibility standards" },
                                        { title: "Advanced Editor Access", desc: "Edit text, tables, equations with MathType support" },
                                        { title: "Fast AI Processing", desc: "Documents ready in minutes, not hours" },
                                        { title: "Buy credits for your entire institution", desc: null },
                                        { title: "Priority Support", desc: "Get help when you need it from our team" },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckIcon className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-900">{feature.title}</p>
                                                {feature.desc && <p className="text-sm text-gray-500">{feature.desc}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* CTA Button */}
                                <a
                                    href="https://calendly.com/rujun-encando/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 text-white hover:bg-green-600 shadow-xl hover:shadow-2xl text-lg py-4 rounded-lg font-semibold flex items-center justify-center transition-all"
                                >
                                    Contact Us
                                </a>
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Contact us for a quote
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Trusted by Leading Institutions
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Join thousands of professionals and institutions who trust Smart Note
                            for their accessibility needs.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default SmartNote;