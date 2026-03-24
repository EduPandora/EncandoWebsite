import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const WAITLIST_STORAGE_KEY = 'feature_waitlist_joined';
const ADA_APP_ORIGIN = process.env.REACT_APP_ADA_API_URL || 'https://ada.encando.com';

const publicUrl = process.env.PUBLIC_URL || '';
const landingAsset = (filename) => `${publicUrl}/assets/landing-page/${filename}`;

const SMART_NOTE_LOGO = 'https://d1d1is78wh5kw.cloudfront.net/SmartNoteBrandLogo.png';

const IMG = {
    handwritten: landingAsset('handwritten-doc.png'),
    digital: landingAsset('digital-doc.png'),
    mainLayout: landingAsset('main-layout.png'),
    documentsView: landingAsset('documents-view.png'),
    barGraph: landingAsset('bar-graph.png'),
    editorOptions: landingAsset('editor-options.png'),
};

async function joinFeatureWaitlist({ email, features }) {
    const res = await fetch(`${ADA_APP_ORIGIN}/api/waitlist/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, features }),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Waitlist request failed');
    }
    return res.json();
}

function Icon({ children, className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {children}
        </svg>
    );
}

function ArrowRight({ className }) {
    return (
        <Icon className={className}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </Icon>
    );
}

function Play({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    );
}

function Check({ className }) {
    return (
        <Icon className={className}>
            <polyline points="20 6 9 17 4 12" />
        </Icon>
    );
}

function Upload({ className }) {
    return (
        <Icon className={className}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
        </Icon>
    );
}

function Wand2({ className }) {
    return (
        <Icon className={className}>
            <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
            <path d="m14 7 3 3" />
        </Icon>
    );
}

function PenSquare({ className }) {
    return (
        <Icon className={className}>
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
        </Icon>
    );
}

function Gift({ className }) {
    return (
        <Icon className={className}>
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M12 8H7.5a2.5 2.5 0 1 1 0-5C11 3 12 8 12 8s1-5 3.5-5a2.5 2.5 0 0 1 0 5H12z" />
        </Icon>
    );
}

function CheckCircle2({ className }) {
    return (
        <Icon className={className}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </Icon>
    );
}

function SmartNote() {
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(false);
    const [waitlistError, setWaitlistError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem(WAITLIST_STORAGE_KEY) === 'true') {
            setHasJoinedWaitlist(true);
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFeatureToggle = (featureValue) => {
        setSelectedFeatures((prev) =>
            prev.includes(featureValue) ? prev.filter((f) => f !== featureValue) : [...prev, featureValue]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWaitlistError(null);
        if (selectedFeatures.length === 0) return;

        setIsSubmitting(true);
        try {
            await joinFeatureWaitlist({ email, features: selectedFeatures });
            localStorage.setItem(WAITLIST_STORAGE_KEY, 'true');
            setHasJoinedWaitlist(true);
            setSelectedFeatures([]);
            setEmail('');
        } catch (err) {
            console.error('Failed to join waitlist:', err);
            setWaitlistError('Could not submit — try again or start at ada.encando.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section id="hero" className="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                        </span>
                        Now Processing Digital & Handwritten Documents
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Accessible documents <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">for everyone.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Transform handwritten notes and digital PDFs into ADA-compliant documents with semantic math and AI-generated
                        image descriptions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <a
                            href="https://ada.encando.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 shadow-xl hover:shadow-2xl rounded-xl px-8 py-4 font-bold text-lg transition-all"
                        >
                            Start for Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <button
                            type="button"
                            onClick={() => scrollToSection('how-it-works')}
                            className="inline-flex items-center justify-center border-2 border-slate-300 bg-white hover:bg-slate-50 rounded-xl px-8 py-4 font-bold text-lg text-slate-800 transition-all"
                        >
                            See How It Works
                            <Play className="ml-2 h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-slate-600 mb-16">
                        <span className="flex items-center">
                            <Check className="text-green-600 mr-2 h-4 w-4" />
                            20 Free Credits
                        </span>
                        <span className="flex items-center">
                            <Check className="text-green-600 mr-2 h-4 w-4" />
                            No Credit Card Required
                        </span>
                        <span className="flex items-center">
                            <Check className="text-green-600 mr-2 h-4 w-4" />
                            1 Credit = 1 Page ($0.15)
                        </span>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="bg-slate-50 py-16 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Transform any PDF document into accessible digital documents in three simple steps
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="space-y-6 w-1/2">
                            {[
                                {
                                    n: 1,
                                    title: 'Upload Your PDF',
                                    body: 'Simply drag and drop your handwritten notes or digital documents in PDF format',
                                    IconCmp: Upload,
                                },
                                {
                                    n: 2,
                                    title: 'AI Converts Instantly',
                                    body: 'Our AI processes your document, ensuring full ADA & WCAG 2.1 compliance automatically',
                                    IconCmp: Wand2,
                                },
                                {
                                    n: 3,
                                    title: 'Edit & Download',
                                    body: 'Edit text, tables, and equations using our powerful editor and get your accessible document.',
                                    IconCmp: PenSquare,
                                },
                            ].map((step, i) => (
                                <div key={step.n} className="relative flex gap-4 group">
                                    {i < 2 && (
                                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-transparent hidden lg:block" />
                                    )}
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                                        <span className="text-lg font-bold text-white">{step.n}</span>
                                    </div>
                                    <div className="flex-1 shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-xl border border-slate-200">
                                        <div className="p-5">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <step.IconCmp className="text-blue-600 text-xl w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full bg-white py-20 px-10 overflow-hidden border-b border-slate-100">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between relative gap-12 lg:gap-6">
                    <div className="relative w-full max-w-sm h-[30rem] shrink-0">
                        <div className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-sm rotate-3" />
                        <div className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-sm -rotate-2" />
                        <div className="absolute inset-0 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl shadow-lg overflow-hidden">
                            <img src={IMG.handwritten} alt="Handwritten note" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 z-10 lg:mx-4">
                        <div className="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-xl flex flex-col items-center justify-center text-blue-600">
                            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Text</span>
                        </div>
                        <div className="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-xl flex flex-col items-center justify-center text-blue-600">
                            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Image</span>
                        </div>
                        <div className="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-xl flex flex-col items-center justify-center text-blue-600">
                            <span className="text-xl font-serif font-bold mb-1">∑</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Math</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none hidden lg:block">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="xMidYMid meet">
                            <path d="M 333 124 L 398 124" stroke="#e2e8f0" strokeWidth="2" />
                            <path d="M 333 200 L 398 200" stroke="#e2e8f0" strokeWidth="2" />
                            <path d="M 333 276 L 398 276" stroke="#e2e8f0" strokeWidth="2" />
                            <path d="M 454 124 Q 508 162 561 200" stroke="#2563eb" strokeWidth="2.5" />
                            <path d="M 454 200 Q 508 200 561 200" stroke="#2563eb" strokeWidth="2.5" />
                            <path d="M 454 276 Q 508 238 561 200" stroke="#2563eb" strokeWidth="2.5" />
                            <path d="M 561 200 L 668 200" stroke="#2563eb" strokeWidth="3" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                        <div className="w-28 h-28 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-slate-50 overflow-hidden p-2 transition-transform hover:scale-105 duration-300">
                            <img src={SMART_NOTE_LOGO} alt="Smart Note Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <div className="relative w-full max-w-sm h-[30rem] shrink-0">
                        <div className="absolute inset-0 bg-white border-2 border-blue-600 rounded-xl shadow-2xl flex flex-col overflow-hidden">
                            <div className="flex-1 min-h-0 relative">
                                <img src={IMG.digital} alt="Accessible digital PDF" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex gap-2 p-2 flex-shrink-0">
                                <div className="px-2 py-1 bg-green-600 text-white text-[8px] font-bold rounded shadow-sm">ADA COMPLIANT</div>
                                <div className="px-2 py-1 bg-blue-600 text-white text-[8px] font-bold rounded shadow-sm">WCAG 2.1</div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-slate-50 py-24 px-6 border-b border-slate-100">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Powerful Document Editor</h2>
                    <p className="text-lg text-slate-600">
                        Our intelligent editor automatically detects structures, equations, and images, allowing you to focus on content while
                        we handle compliance.
                    </p>
                </div>
                <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                        <img src={IMG.mainLayout} alt="Split screen editor" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <section id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-left max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Built for what others miss.</h2>
                        <p className="text-slate-600 text-lg">
                            We go beyond simple OCR. We rebuild the semantic structure of your documents for true accessibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-8 bg-blue-50/80 rounded-3xl p-8 border border-blue-100 flex flex-col gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900">Centralized Library</h3>
                                <p className="text-slate-600">
                                    Manage your entire accessibility workflow. Track conversion history, organize by project, and bulk-export
                                    compliant PDFs.
                                </p>
                            </div>
                            <div className="w-full rounded-2xl border border-blue-100 bg-white flex-1 overflow-hidden shadow-sm">
                                <img src={IMG.documentsView} alt="Documents dashboard view" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-blue-600 rounded-3xl p-8 text-white shadow-lg shadow-blue-600/20">
                            <div className="flex mb-6 items-center gap-2">
                                <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">Smart Alt-Text</h3>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                Automatically generates both short Alt-text and comprehensive long descriptions for complex diagrams and charts.
                            </p>
                            <div className="mb-4 rounded-xl overflow-hidden border border-white/20 bg-white/5 flex justify-center p-4">
                                <img src={IMG.barGraph} alt="Bar chart" className="w-48 h-auto object-contain" />
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                                <p className="text-[10px] text-white/80 uppercase font-bold mb-2">Live Long-Description:</p>
                                <p className="text-xs italic text-white/90">
                                    &quot;Bar chart illustrating a 24% year-over-year increase in document processing efficiency...&quot;
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-slate-200">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
                                    ∑
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Human-Readable Math</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-6">
                                We convert LaTeX and MathML into natural language descriptions that screen readers can communicate perfectly.
                            </p>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center font-serif text-lg text-slate-800">
                                {'$$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$'}
                                <div className="mt-4 text-[10px] text-blue-600 font-sans font-bold uppercase tracking-tighter">
                                    Read aloud as: &quot;Quadratic formula, negative b plus or minus...&quot;
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-8 bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900">Advanced Editor</h3>
                                <p className="text-slate-600 mb-6">
                                    Take full control. Edit converted text, adjust table cell properties, and verify accessibility tags in a
                                    professional-grade interface.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white h-56 flex flex-col items-center justify-center p-2 text-center shadow-sm overflow-hidden">
                                <img src={IMG.editorOptions} alt="Editor toolbar options" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="bg-slate-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-slate-100">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Simple, Risk-Free Pricing</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Start free with 20 credits. Only pay for what you use with our transparent pay-per-page model.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-center">
                                <span className="font-bold text-white text-sm uppercase tracking-wider">Most Popular Plan</span>
                            </div>
                            <div className="p-8 sm:p-12">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Pay As You Go</h3>
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="text-5xl font-bold text-blue-600">$0</span>
                                        <span className="text-xl text-slate-500">to start</span>
                                    </div>
                                    <p className="text-slate-600">1 Credit = 1 Page Converted</p>
                                    <p className="text-lg font-semibold text-slate-900 mt-2">Only $0.15 per credit</p>
                                </div>
                                <div className="space-y-4 mb-8">
                                    {[
                                        ['20 Free Credits to Start', 'Convert 20 pages completely free - no credit card required'],
                                        ['Full ADA & WCAG 2.1 Compliance', 'Every conversion meets accessibility standards'],
                                        ['Advanced Editor Access', 'Edit text, tables, equations with MathType support'],
                                        ['Fast AI Processing', 'Documents ready in minutes, not hours'],
                                        ['No Subscriptions or Hidden Fees', 'Buy credits only when you need them'],
                                        ['Priority Support', 'Get help when you need it from our team'],
                                    ].map(([title, desc]) => (
                                        <div key={title} className="flex items-start gap-3">
                                            <Check className="text-blue-600 text-xl mt-1 flex-shrink-0 w-5 h-5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">{title}</p>
                                                <p className="text-sm text-slate-600">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://ada.encando.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl text-lg py-3 rounded-lg font-semibold flex items-center justify-center transition-all group"
                                >
                                    Start for Free
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                                <p className="text-center text-sm text-slate-500 mt-4">No credit card required • Credits never expire</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-green-500 py-3 text-center">
                                <span className="font-bold text-white text-sm uppercase tracking-wider">For Institutions</span>
                            </div>
                            <div className="p-8 sm:p-12 flex flex-col h-full">
                                <div className="mb-6">
                                    <h4 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">
                                        Ready to Make <span className="text-green-500">Your Documents Accessible?</span>
                                    </h4>
                                    <p className="text-base sm:text-lg text-slate-900 font-medium">
                                        Join leading institutions and professionals who trust Smart Note to convert handwritten notes into
                                        fully accessible digital documents.
                                    </p>
                                </div>
                                <div className="space-y-4 mb-9">
                                    {[
                                        ['20 Free Credits for every member', 'Convert 20 pages completely free - no credit card required'],
                                        ['Full ADA & WCAG 2.1 Compliance', 'Every conversion meets accessibility standards'],
                                        ['Advanced Editor Access', 'Edit text, tables, equations with MathType support'],
                                        ['Fast AI Processing', 'Documents ready in minutes, not hours'],
                                        ['Buy credits for your entire institution', null],
                                        ['Priority Support', 'Get help when you need it from our team'],
                                    ].map(([title, desc]) => (
                                        <div key={title} className="flex items-start gap-3">
                                            <Check className="text-green-600 text-xl mt-1 flex-shrink-0 w-5 h-5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">{title}</p>
                                                {desc && <p className="text-sm text-slate-600">{desc}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://calendly.com/rujun-encando/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 text-white hover:bg-green-600 shadow-xl hover:shadow-2xl text-lg mt-2 py-3 inline-flex items-center justify-center rounded-lg font-semibold transition-colors"
                                >
                                    Contact Us
                                </a>
                                <p className="text-center text-sm text-slate-500 mt-4">Contact us for a quote</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default SmartNote;
