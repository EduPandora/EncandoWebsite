import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ADA_APP_ORIGIN = process.env.REACT_APP_ADA_API_URL || 'https://ada.encando.com';
const DEADLINE = new Date('2026-04-24T23:59:59');

const publicUrl = process.env.PUBLIC_URL || '';
const landingAsset = (filename) => `${publicUrl}/assets/landing-page/${filename}`;

const IMG = {
    mainLayout: landingAsset('main-layout.png'),
    documentsView: landingAsset('documents-view.png'),
    barGraph: landingAsset('bar-graph.png'),
    editorOptions: landingAsset('editor-options.png'),
};

const TESTIMONIALS = [
    {
        name: 'Dr. Alan Palazzolo',
        role: 'Professor of Mechanical Engineering',
        university: 'Texas A&M University',
        initials: 'AP',
        color: '#500000',
        stars: 5,
        quote:
            'All files tested thus far are near 100% Ally ADA compliant and the voice track descriptions of the figures are quite accurate.',
    },
    {
        name: 'Shadi Balawi',
        role: 'Faculty, Mechanical Engineering',
        university: 'Texas A&M University',
        initials: 'SB',
        color: '#500000',
        stars: 5,
        quote: 'I managed to scan and flip ~60 pages in one go. So for now, I still have credits and I did not do anything beyond signing up.',
    },
];

function pad(n) {
    return String(n).padStart(2, '0');
}

function getTimeLeft(targetDate) {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

async function submitLandingContact(data) {
    const res = await fetch(`${ADA_APP_ORIGIN}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Request failed');
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

function CheckCircle2({ className }) {
    return (
        <Icon className={className}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </Icon>
    );
}

function ClockIcon({ className }) {
    return (
        <Icon className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </Icon>
    );
}

function ShieldIcon({ className }) {
    return (
        <Icon className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </Icon>
    );
}

function ZapIcon({ className }) {
    return (
        <Icon className={className}>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </Icon>
    );
}

function FileTextIcon({ className }) {
    return (
        <Icon className={className}>
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <line x1="10" y1="9" x2="14" y2="9" />
            <line x1="10" y1="13" x2="16" y2="13" />
            <line x1="10" y1="17" x2="16" y2="17" />
        </Icon>
    );
}

function AwardIcon({ className }) {
    return (
        <Icon className={className}>
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </Icon>
    );
}

function TrendingUpIcon({ className }) {
    return (
        <Icon className={className}>
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </Icon>
    );
}

function CalendarIcon({ className }) {
    return (
        <Icon className={className}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </Icon>
    );
}

function XIcon({ className }) {
    return (
        <Icon className={className}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </Icon>
    );
}

function ChevronLeftIcon({ className }) {
    return (
        <Icon className={className}>
            <polyline points="15 18 9 12 15 6" />
        </Icon>
    );
}

function QuoteIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 7.035-8.778.5-.234 1.023.078 1.137.64l.06.32c.098.513-.305.983-.837 1.12C7.881 7.546 6.1 9.86 5.65 12.2c.456-.228.985-.276 1.496-.158 1.042.238 1.794 1.127 1.978 2.17.24 1.395-.526 2.723-1.715 3.33-1.42.734-2.964.55-4.326-.421zm11.001 0C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.636 7.035-8.778.501-.234 1.023.078 1.137.64l.059.319c.099.514-.304.984-.837 1.119-4.404 1.375-6.186 3.69-6.635 6.031.456-.228.985-.276 1.496-.159 1.042.239 1.794 1.128 1.978 2.171.241 1.395-.526 2.723-1.715 3.33-1.42.733-2.963.55-4.326-.421z" />
        </svg>
    );
}

function AlertTriangleIcon({ className }) {
    return (
        <Icon className={className}>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </Icon>
    );
}

function ExternalLinkIcon({ className }) {
    return (
        <Icon className={className}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </Icon>
    );
}

function Building2Icon({ className }) {
    return (
        <Icon className={className}>
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
            <path d="M10 18h4" />
        </Icon>
    );
}

function UsersIcon({ className }) {
    return (
        <Icon className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </Icon>
    );
}

function BookOpenIcon({ className }) {
    return (
        <Icon className={className}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </Icon>
    );
}

/** White-outlined Digital PDF document icon */
function DigitalDocIcon() {
    return (
        <svg width="80" height="112" viewBox="0 0 80 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="2" y="2" width="76" height="108" rx="6" stroke="white" strokeWidth="2.5" />
            <path d="M52 2 L78 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M52 2 L52 28 L78 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="16" y1="46" x2="64" y2="46" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="58" x2="64" y2="58" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="70" x2="48" y2="70" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="82" x2="56" y2="82" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="94" x2="40" y2="94" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="16" y="20" width="28" height="14" rx="3" stroke="white" strokeWidth="2" />
            <text x="30" y="31" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" fontFamily="sans-serif">
                PDF
            </text>
        </svg>
    );
}

/** White-outlined Handwritten document icon */
function HandwrittenDocIcon() {
    return (
        <svg width="80" height="112" viewBox="0 0 80 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="2" y="2" width="76" height="108" rx="6" stroke="white" strokeWidth="2.5" />
            <path d="M52 2 L78 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M52 2 L52 28 L78 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path
                d="M16 46 Q22 43 28 46 Q34 49 40 46 Q46 43 52 46 Q58 49 64 46"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M16 58 Q21 55 27 58 Q33 61 39 58 Q45 55 51 58 Q57 61 63 58"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M16 70 Q22 67 28 70 Q34 73 40 70 Q46 67 52 70"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M16 82 Q21 79 27 82 Q33 85 39 82 Q45 79 51 82 Q57 85 63 82"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />
            <path d="M16 94 Q22 91 28 94 Q34 97 40 94" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M18 30 L28 20 L34 26 L24 36 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            <line x1="28" y1="20" x2="34" y2="26" stroke="white" strokeWidth="1.8" />
            <path d="M18 30 L16 36 L22 34 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        </svg>
    );
}

function useCountUp(target, active, duration = 1800) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return undefined;
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(start);
            if (start >= target) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration]);
    return count;
}

function StatCard({ target, suffix, label, IconCmp, active }) {
    const count = useCountUp(target, active, 1600);
    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                <IconCmp className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="text-3xl md:text-4xl font-black text-white tabular-nums">
                {count.toLocaleString()}
                {suffix}
            </div>
            <p className="text-sm text-slate-400 font-medium">{label}</p>
        </div>
    );
}

function ScoreRing({ score, label, sublabel, color }) {
    const animated = useCountUp(score, true, 1400);
    const r = 40;
    const circ = 2 * Math.PI * r;
    const dash = (animated / 100) * circ;
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative">
                <svg width="100" height="100" viewBox="0 0 100 100" className="-rotate-90">
                    <circle cx="50" cy="50" r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
                    <circle
                        cx="50"
                        cy="50"
                        r={r}
                        fill="none"
                        stroke={color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${dash} ${circ}`}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black text-slate-900">{animated}+</span>
                    <span className="text-[10px] font-bold text-slate-500">/100</span>
                </div>
            </div>
            <div className="text-center">
                <p className="font-bold text-sm text-slate-900">{label}</p>
                <p className="text-xs text-slate-500">{sublabel}</p>
            </div>
        </div>
    );
}

function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const total = TESTIMONIALS.length;

    useEffect(() => {
        const timer = setInterval(() => setActive((p) => (p + 1) % total), 5000);
        return () => clearInterval(timer);
    }, [total]);

    const visible3 = [0, 1, 2].map((offset) => TESTIMONIALS[(active + offset) % total]);
    const prev = () => setActive((p) => (p - 1 + total) % total);
    const next = () => setActive((p) => (p + 1) % total);

    return (
        <section id="social-proof" className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Trusted by educators across the U.S.</p>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Real People. Real Results.</h2>
                    <p className="text-slate-600">
                        Professors, compliance officers, and instructional designers achieving ADA compliance before the deadline.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                    {[
                        { value: '8,000+', label: 'Docs Converted' },
                        { value: '$15K', label: 'Institutional Contract' },
                        { value: '95+', label: 'Avg. Score / 100' },
                    ].map((s) => (
                        <div key={s.label} className="text-center bg-indigo-500/5 rounded-2xl py-4 px-3 border border-indigo-500/10">
                            <p className="text-2xl font-black text-indigo-600">{s.value}</p>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <div className="hidden md:grid grid-cols-3 gap-5">
                        {visible3.map((t, i) => (
                            <TestimonialCard key={`${t.name}-${i}`} t={t} featured={i === 1} />
                        ))}
                    </div>
                    <div className="md:hidden">
                        <TestimonialCard t={TESTIMONIALS[active]} featured />
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            type="button"
                            onClick={prev}
                            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition-all flex items-center justify-center shadow-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeftIcon className="w-4 h-4 text-slate-500" />
                        </button>
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setActive(i)}
                                    className={`transition-all duration-300 rounded-full ${
                                        i === active ? 'w-6 h-2 bg-indigo-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to review ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={next}
                            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition-all flex items-center justify-center shadow-sm"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-4 h-4 text-slate-500" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ t, featured }) {
    return (
        <div
            className={`relative bg-white rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 ${
                featured ? 'border-indigo-300/50 shadow-lg shadow-indigo-500/10 scale-[1.02]' : 'border-slate-200 shadow-sm hover:shadow-md'
            }`}
        >
            <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full" style={{ background: t.color }} />
            <QuoteIcon className="w-6 h-6 text-indigo-500/20 flex-shrink-0" />
            <p className="text-sm text-slate-600 leading-relaxed flex-1">&quot;{t.quote}&quot;</p>
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-black"
                    style={{ background: t.color }}
                >
                    {t.initials}
                </div>
                <div className="min-w-0">
                    <p className="font-bold text-sm text-slate-900 truncate">{t.name}</p>
                    <p className="text-xs text-slate-500 truncate">{t.role}</p>
                    <p className="text-xs font-medium truncate" style={{ color: t.color }}>
                        {t.university}
                    </p>
                </div>
            </div>
        </div>
    );
}

function SmartNote() {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(DEADLINE));
    const [bannerDismissed, setBannerDismissed] = useState(false);
    const [demoForm, setDemoForm] = useState({ name: '', email: '', university: '', numDocs: '', message: '' });
    const [demoSubmitting, setDemoSubmitting] = useState(false);
    const [demoSuccess, setDemoSuccess] = useState(false);
    const [demoError, setDemoError] = useState(null);
    const statsRef = useRef(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft(DEADLINE)), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const el = statsRef.current;
        if (!el) return undefined;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const scrollToSection = useCallback((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const handleDemoSubmit = async (e) => {
        e.preventDefault();
        setDemoError(null);
        setDemoSubmitting(true);
        try {
            const lines = ['Request type: Book a 15-minute demo call'];
            if (demoForm.numDocs.trim()) lines.push(`Estimated number of documents: ${demoForm.numDocs.trim()}`);
            if (demoForm.message.trim()) lines.push(`Notes:\n${demoForm.message.trim()}`);
            const composedMessage = lines.join('\n\n');
            await submitLandingContact({
                name: demoForm.name.trim(),
                email: demoForm.email.trim(),
                organization: demoForm.university.trim() || undefined,
                message: composedMessage,
                inquiry_kind: 'demo_call',
            });
            setDemoSuccess(true);
            setDemoForm({ name: '', email: '', university: '', numDocs: '', message: '' });
        } catch (err) {
            setDemoError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setDemoSubmitting(false);
        }
    };

    const inputClass =
        'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500';

    return (
        <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
            <Header />

            {!bannerDismissed && (
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-2.5 px-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 flex-wrap justify-center">
                            <div className="flex items-center gap-2 font-bold text-sm md:text-base">
                                <ClockIcon className="w-4 h-4 flex-shrink-0 animate-pulse" />
                                <span>ADA Title II Deadline:</span>
                                <span className="font-black text-white/90">April 24, 2026</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-mono font-black bg-white/20 rounded-lg px-3 py-0.5">
                                <span>{pad(timeLeft.days)}d</span>
                                <span className="opacity-60">:</span>
                                <span>{pad(timeLeft.hours)}h</span>
                                <span className="opacity-60">:</span>
                                <span>{pad(timeLeft.minutes)}m</span>
                                <span className="opacity-60">:</span>
                                <span className="tabular-nums w-6">{pad(timeLeft.seconds)}s</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => scrollToSection('lead-form')}
                                className="hidden sm:inline-flex items-center gap-1 bg-white text-orange-600 font-bold text-xs px-3 py-1.5 rounded-full hover:bg-orange-50 transition-colors"
                            >
                                Start Free Now
                                <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setBannerDismissed(true)}
                            className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Dismiss banner"
                        >
                            <XIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            <div className="overflow-x-hidden">
                <section
                    id="hero"
                    className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden"
                >
                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgb(99,102,241) 1px, transparent 1px), linear-gradient(90deg, rgb(99,102,241) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/15 rounded-full blur-[100px] pointer-events-none" />

                    <div className="absolute top-12 left-32 opacity-20 -rotate-12 pointer-events-none hidden lg:block">
                        <DigitalDocIcon />
                    </div>
                    <div className="absolute bottom-16 right-10 opacity-20 rotate-6 pointer-events-none hidden lg:block">
                        <DigitalDocIcon />
                    </div>
                    <div className="absolute top-16 right-14 opacity-20 rotate-[14deg] pointer-events-none hidden lg:block">
                        <HandwrittenDocIcon />
                    </div>
                    <div className="absolute bottom-20 left-16 opacity-20 -rotate-[8deg] pointer-events-none hidden lg:block">
                        <HandwrittenDocIcon />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
                                </span>
                                Now Processing Digital &amp; Handwritten Documents
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.08]">
                                Make Your PDF Documents{' '}
                                <span className="relative inline sm:block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400">
                                        ADA-Compliant
                                    </span>
                                </span>{' '}
                                in Minutes - <span className="text-slate-300">Not Weeks.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
                                Trusted by <span className="text-white font-semibold">Texas A&amp;M University</span>. Over{' '}
                                <span className="text-white font-semibold">8,000+ documents</span> converted with{' '}
                                <span className="text-white font-semibold">95+ accessibility scores</span>. Beat the April 24, 2026 deadline
                                before your institution faces legal risk.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                                <a
                                    href="https://ada.encando.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_30px_rgba(99,102,241,0.4)] text-base px-8 py-5 font-bold group transition-colors"
                                >
                                    Try 20 Pages Free
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => scrollToSection('lead-form')}
                                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 text-base px-8 py-5 font-bold backdrop-blur-sm transition-colors"
                                >
                                    Book a 15-Min Demo
                                    <CalendarIcon className="ml-2 h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-slate-400">
                                {[
                                    { Icon: Check, text: '20 Free Credits - No CC Required' },
                                    { Icon: ShieldIcon, text: 'WCAG 2.1 + ADA Compliant' },
                                    { Icon: ZapIcon, text: '1 Credit = 1 Page ($0.15)' },
                                ].map((item) => (
                                    <span key={item.text} className="flex items-center gap-1.5">
                                        <item.Icon className="w-4 h-4 text-green-400" />
                                        {item.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div
                            ref={statsRef}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
                        >
                            <StatCard target={8000} suffix="+" label="Documents Converted" IconCmp={FileTextIcon} active={statsVisible} />
                            <StatCard target={95} suffix="+" label="Avg. Accessibility Score" IconCmp={AwardIcon} active={statsVisible} />
                            <StatCard target={15} suffix="K+" label="Contract Value" IconCmp={TrendingUpIcon} active={statsVisible} />
                            <StatCard target={2} suffix=" min" label="Avg. Conversion Time" IconCmp={ZapIcon} active={statsVisible} />
                        </div>
                    </div>
                </section>

                <TestimonialsSection />

                <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200 py-14">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-10">
                            Verified by leading accessibility tools
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-12">
                            <ScoreRing score={95} label="axes4" sublabel="Accessibility Audit" color="#6366f1" />
                            <ScoreRing score={98} label="Ally" sublabel="LMS Accessibility" color="#22c55e" />
                            <ScoreRing score={96} label="YuJa Panorama" sublabel="Accessibility Index" color="#f59e0b" />
                        </div>
                        <p className="text-center text-xs text-slate-500 mt-8 italic">
                            All converted documents score 95+ out of 100 across independent third-party accessibility tools
                        </p>
                    </div>
                </div>

                <section id="law-explainer" className="py-16 bg-white border-b border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <AlertTriangleIcon className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Legal Requirement - DOJ Rule</p>
                                    <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                                        What is the ADA Title II Web Accessibility Rule?
                                    </h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        The <strong className="text-slate-900">U.S. Department of Justice</strong> issued a final rule under{' '}
                                        <strong className="text-slate-900">Title II of the Americans with Disabilities Act (ADA)</strong>{' '}
                                        requiring all state and local governments - including universities, hospitals, courts, libraries,
                                        transit agencies, and parks - to ensure their web content and documents meet{' '}
                                        <strong className="text-slate-900">WCAG 2.1 Level AA</strong> accessibility standards.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        All publicly posted PDFs, forms, presentations, and digital documents must be accessible to people with
                                        visual, auditory, and cognitive disabilities - including proper alt text for images, semantic structure,
                                        and readable document formatting.
                                    </p>
                                    <div className="bg-white/80 rounded-2xl border border-amber-200 overflow-hidden">
                                        <div className="bg-amber-100 px-4 py-2 border-b border-amber-200">
                                            <p className="text-xs font-black uppercase tracking-wider text-amber-700">Compliance Deadlines</p>
                                        </div>
                                        <div className="divide-y divide-amber-100">
                                            <div className="flex items-center justify-between px-4 py-3">
                                                <p className="text-sm text-slate-900 font-medium">Population 50,000 or more</p>
                                                <span className="text-sm font-black text-red-600 whitespace-nowrap">Apr 24, 2026</span>
                                            </div>
                                            <div className="flex items-center justify-between px-4 py-3">
                                                <p className="text-sm text-slate-900 font-medium">Population under 50,000</p>
                                                <span className="text-sm font-black text-amber-700 whitespace-nowrap">Apr 26, 2027</span>
                                            </div>
                                            <div className="flex items-center justify-between px-4 py-3">
                                                <p className="text-sm text-slate-900 font-medium">Special district governments</p>
                                                <span className="text-sm font-black text-amber-700 whitespace-nowrap">Apr 26, 2027</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        {
                                            Icon: FileTextIcon,
                                            text: 'All publicly posted PDFs and documents must have machine-readable text structure',
                                        },
                                        { Icon: ShieldIcon, text: 'Images require descriptive alt text for screen readers' },
                                        {
                                            Icon: UsersIcon,
                                            text: 'Applies to universities, hospitals, courts, libraries, transit agencies, and all state and local government bodies',
                                        },
                                        { Icon: BookOpenIcon, text: 'Web pages, mobile apps, forms, and downloadable documents are all covered' },
                                        {
                                            Icon: AlertTriangleIcon,
                                            text: 'Non-compliance may result in federal enforcement action and loss of funding',
                                        },
                                    ].map((item) => (
                                        <div key={item.text} className="flex items-start gap-3 bg-white/70 rounded-xl p-3 border border-amber-100">
                                            <item.Icon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-slate-900">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <a
                                    href="https://www.ada.gov/resources/2024-03-08-web-rule/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-amber-700 font-semibold hover:underline"
                                >
                                    <ExternalLinkIcon className="w-4 h-4" />
                                    Read the official DOJ ruling on ADA.gov
                                </a>
                                <button
                                    type="button"
                                    onClick={() => scrollToSection('lead-form')}
                                    className="inline-flex items-center rounded-lg bg-amber-500 text-white hover:bg-amber-600 font-bold shadow-md px-4 py-2.5 text-sm"
                                >
                                    Start Converting Now
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                                How It Works
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Three Steps to Compliance</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Transform any PDF into a fully ADA-compliant document - no technical expertise required.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent" />
                            {[
                                {
                                    icon: Upload,
                                    title: 'Upload Your PDF',
                                    desc: 'Drag and drop handwritten notes or digital documents in PDF format. Supports scanned pages and typed text.',
                                },
                                {
                                    icon: Wand2,
                                    title: 'AI Converts Instantly',
                                    desc: 'Our AI processes your document - rebuilding semantic structure, extracting math, and generating image descriptions.',
                                },
                                {
                                    icon: PenSquare,
                                    title: 'Edit & Download',
                                    desc: 'Review in our accessible editor, fine-tune alt text, tables, and document structure - then export a fully compliant PDF.',
                                },
                            ].map((step, i) => (
                                <div key={step.title} className="relative flex flex-col items-center text-center group">
                                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-indigo-500 shadow-lg shadow-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                        <step.icon className="w-8 h-8 text-indigo-600" />
                                        <div className="absolute -top-3 -right-3 w-7 h-7 bg-indigo-600 text-white rounded-full text-xs font-black flex items-center justify-center shadow-md">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="w-full bg-slate-50 py-16 px-6 border-y border-slate-200">
                    <div className="max-w-4xl mx-auto text-center mb-12">
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

                <section id="features" className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-14">
                            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                                Features
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Built for What Others Miss.</h2>
                            <p className="text-slate-600 text-lg max-w-2xl">
                                We go beyond simple OCR. Smart Note rebuilds the semantic structure of your documents for true accessibility.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                            <div className="md:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow md:min-h-0">
                                <div className="shrink-0">
                                    <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                                        <Building2Icon className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Centralized Document Library</h3>
                                    <p className="text-slate-600 text-sm">
                                        Manage your entire accessibility workflow. Track conversion history, organize by department or project,
                                        and bulk-export compliant PDFs.
                                    </p>
                                </div>
                                <div className="w-full min-h-[220px] rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden p-3 sm:p-4 md:flex-1 md:min-h-0">
                                    <img
                                        src={IMG.documentsView}
                                        alt="Documents dashboard view"
                                        className="max-h-full max-w-full w-auto h-auto object-contain"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-4 bg-indigo-600 rounded-3xl p-8 text-white shadow-lg flex flex-col hover:shadow-xl transition-shadow">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Smart Alt-Text</h3>
                                <p className="text-white/80 text-sm mb-6 flex-1">
                                    AI generates both short alt-text and comprehensive long descriptions for complex diagrams, charts, and
                                    scientific figures.
                                </p>
                                <div className="mb-4 rounded-xl overflow-hidden border border-white/20 bg-white/5 flex justify-center p-4">
                                    <img src={IMG.barGraph} alt="Bar chart" className="w-48 h-auto max-w-full object-contain" />
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">Live long-description</p>
                                    <p className="text-xs italic text-white/90">
                                        &quot;Bar chart illustrating a 24% year-over-year increase in document processing efficiency...&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 font-bold text-indigo-600 text-xl font-serif">
                                    ∑
                                </div>
                                <h3 className="text-xl font-bold mb-3">Human-Readable Math</h3>
                                <p className="text-slate-600 text-sm mb-6">
                                    Converts LaTeX and MathML into natural language descriptions that screen readers communicate perfectly to all
                                    users.
                                </p>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                                    <p className="font-serif text-lg mb-3 text-slate-900">x = (−b ± √(b²−4ac)) / 2a</p>
                                    <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">
                                        Read as: &quot;x equals negative b plus or minus the square root of b squared minus 4ac, divided by
                                        2a&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="md:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow">
                                <div>
                                    <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                                        <PenSquare className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Advanced Editor</h3>
                                    <p className="text-slate-600 text-sm">
                                        Take full control. Edit converted text, adjust table cell properties, update alt text, and verify
                                        accessibility tags in a professional-grade interface.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 h-44 overflow-hidden">
                                    <img src={IMG.editorOptions} alt="Editor toolbar" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="lead-form" className="py-20 bg-white border-t border-slate-200">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                                Get Started Today
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Let&apos;s Talk Compliance</h2>
                            <p className="text-slate-600">
                                Book a free 15-minute demo. We respond within 24 hours - no commitment required.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden p-8">
                            {demoSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Request Received!</h3>
                                    <p className="text-slate-600 text-sm mb-6">We&apos;ll reach out within 24 hours to schedule your demo.</p>
                                    <a
                                        href="https://ada.encando.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 font-bold text-sm"
                                    >
                                        Try 20 Pages Free Now
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={handleDemoSubmit} className="space-y-4">
                                    {demoError && (
                                        <p className="text-sm text-red-600" role="alert">
                                            {demoError}
                                        </p>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="demo-name" className="block text-xs font-bold text-slate-900 mb-1.5">
                                                Full Name *
                                            </label>
                                            <input
                                                id="demo-name"
                                                required
                                                placeholder="Dr. Jane Smith"
                                                className={inputClass}
                                                value={demoForm.name}
                                                onChange={(e) => setDemoForm((p) => ({ ...p, name: e.target.value }))}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="demo-email" className="block text-xs font-bold text-slate-900 mb-1.5">
                                                Work Email *
                                            </label>
                                            <input
                                                id="demo-email"
                                                type="email"
                                                required
                                                placeholder="jane@university.edu"
                                                className={inputClass}
                                                value={demoForm.email}
                                                onChange={(e) => setDemoForm((p) => ({ ...p, email: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="demo-uni" className="block text-xs font-bold text-slate-900 mb-1.5">
                                            Organization / Agency *
                                        </label>
                                        <input
                                            id="demo-uni"
                                            required
                                            placeholder="e.g. University of Texas, UT Health"
                                            className={inputClass}
                                            value={demoForm.university}
                                            onChange={(e) => setDemoForm((p) => ({ ...p, university: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="demo-docs" className="block text-xs font-bold text-slate-900 mb-1.5">
                                            Estimated Number of Documents
                                        </label>
                                        <input
                                            id="demo-docs"
                                            type="number"
                                            min="1"
                                            placeholder="e.g. 500"
                                            className={inputClass}
                                            value={demoForm.numDocs}
                                            onChange={(e) => setDemoForm((p) => ({ ...p, numDocs: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="demo-msg" className="block text-xs font-bold text-slate-900 mb-1.5">
                                            Anything else we should know?
                                        </label>
                                        <textarea
                                            id="demo-msg"
                                            rows={3}
                                            placeholder="e.g. deadline urgency, document types, current tools..."
                                            className={inputClass}
                                            value={demoForm.message}
                                            onChange={(e) => setDemoForm((p) => ({ ...p, message: e.target.value }))}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={demoSubmitting}
                                        className="w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60 py-4 font-bold text-base inline-flex items-center justify-center transition-colors"
                                    >
                                        {demoSubmitting ? 'Scheduling...' : 'Schedule 15-Min Demo'}
                                        {!demoSubmitting && <CalendarIcon className="ml-2 w-4 h-4" />}
                                    </button>
                                    <p className="text-center text-xs text-slate-500">We respond within 24 hours. No commitment required.</p>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                <section id="pricing" className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                                Pricing
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Simple, Risk-Free Pricing</h2>
                            <p className="text-slate-600 text-lg">Start free with 20 credits. Only pay for what you use - transparent pay-per-page.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 md:items-stretch">
                            <div className="rounded-3xl overflow-hidden border-2 border-indigo-600 shadow-xl shadow-indigo-500/10 flex flex-col h-full min-h-0">
                                <div className="bg-indigo-600 py-3 text-center shrink-0">
                                    <span className="text-white text-sm font-bold uppercase tracking-wider">Most Popular</span>
                                </div>
                                <div className="p-8 bg-white flex flex-col flex-1 min-h-0">
                                    <h3 className="text-2xl font-bold mb-2">Pay As You Go</h3>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-5xl font-black text-indigo-600">$0</span>
                                        <span className="text-slate-500">to start</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-8">Then $0.15 per page - no subscriptions, no surprises.</p>
                                    <div className="space-y-3">
                                        {[
                                            '20 Free Credits to start (no CC required)',
                                            'Full ADA & WCAG 2.1 compliance guaranteed',
                                            'Smart Alt-Text + MathML generation',
                                            'Advanced editor with table & equation tools',
                                            'Documents ready in minutes, not days',
                                            'Credits never expire',
                                            'Priority support',
                                        ].map((f) => (
                                            <div key={f} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm text-slate-900">{f}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-auto pt-8">
                                        <a
                                            href="https://ada.encando.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 py-4 font-bold text-base group transition-colors"
                                        >
                                            Start for Free
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden border-2 border-green-500 shadow-xl shadow-green-500/10 flex flex-col h-full min-h-0">
                                <div className="bg-green-500 py-3 text-center shrink-0">
                                    <span className="text-white text-sm font-bold uppercase tracking-wider">For Institutions</span>
                                </div>
                                <div className="p-8 bg-white flex flex-col flex-1 min-h-0">
                                    <h3 className="text-2xl font-bold mb-2 text-green-600">Volume Pricing</h3>
                                    <p className="text-slate-600 text-sm mb-8">
                                        Contact us for custom pricing tailored to your institution&apos;s volume and compliance timeline.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Includes all features of the Pay As You Go plan',
                                            '20 Free Credits for every team member',
                                            'Bulk purchase credits for your department',
                                            'Dedicated account manager',
                                            'Priority processing queue',
                                        ].map((f) => (
                                            <div key={f} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm text-slate-900">{f}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-auto pt-8 flex flex-col gap-3">
                                        <button
                                            type="button"
                                            onClick={() => scrollToSection('lead-form')}
                                            className="w-full inline-flex items-center justify-center rounded-xl bg-green-500 text-white hover:bg-green-600 py-4 font-bold text-base shadow-sm transition-colors"
                                        >
                                            Book a Demo
                                            <CalendarIcon className="ml-2 w-4 h-4" />
                                        </button>
                                        <p className="text-center text-xs text-slate-500">Contact us for a custom quote</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99,102,241) 1px, transparent 0)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <ClockIcon className="w-3 h-3" />
                            {timeLeft.days} days left until the April 24, 2026 deadline
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Don&apos;t Let a Deadline Define Your Institution&apos;s Accessibility Story.
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Start with 20 free pages today. No credit card, no commitment - just compliant documents.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://ada.encando.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_30px_rgba(99,102,241,0.4)] font-bold px-8 py-5 group transition-colors"
                            >
                                Try 20 Pages Free - No CC Required
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                type="button"
                                onClick={() => scrollToSection('lead-form')}
                                className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white bg-white/10 hover:bg-white/20 font-bold px-8 py-5 transition-colors"
                            >
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

export default SmartNote;
