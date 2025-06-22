import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import ProblemCard from '../Components/Elements/ProblemCard';
const PatentIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="8" cy="16" r="2"/><path d="m10 16 2-2 2 2 2-2"/></svg>);
const MarketIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 21.5a2.5 2.5 0 0 1 0-5 .5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-5 0Z"/><path d="M21.5 2.5a2.5 2.5 0 0 1 0 5 .5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5 2.5 2.5 0 0 1 5 0Z"/><path d="M16 8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg>);
const TeamIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const CheckCircleIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);

const InvestorHero = () => (
  <section id="investors" className="bg-[var(--color-bg)] text-[var(--color-text-primary)] pt-32 pb-20 md:pt-40 md:pb-28 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Empowering the Future of Higher Ed with <span className="text-[var(--color-primary-light)]">Patented AI Technology</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-text-primary)]">
        Encando.AI is backed by 4 issued patents. We are currently seeking visionary angel investors to join our mission.
      </p>
    </div>
  </section>
);
const WhyInvest = () => (
  <section className="bg-[var(--color-surface)] py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center"><h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">Why Invest in Encando.AI?</h2></div>
      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <ProblemCard icon={<MarketIcon className="w-7 h-7" />} title="Massive, Growing Market" invertBg={true}>$96B EdTech market, rapid adoption, 17.5% CAGR in AI-driven education.</ProblemCard>
        <ProblemCard icon={<CheckCircleIcon className="w-7 h-7" />} title="Proven Traction" invertBg={true}>Pilots at Texas A&M & UNT; clear expansion roadmap to 100+ institutions.</ProblemCard>
        <ProblemCard icon={<PatentIcon className="w-7 h-7" />} title="Technical Moat" invertBg={true}>4 issued patents on our core AI-powered educational technologies.</ProblemCard>
        <ProblemCard icon={<TeamIcon className="w-7 h-7" />} title="World-Class Team" invertBg={true}>Led by PhDs, ex-FAANG engineers, and seasoned EdTech leaders.</ProblemCard>
      </div>
    </div>
  </section>
);
const patents = [
  { title: "AI-Driven Interactive Q&A System", description: "Protects our core multi-LLM question-answering method with RLHF.", number: "18/961,262" },
  { title: "AI-Driven Knowledge Base Evaluation", description: "Secures our unique method for AI model evaluation and reinforcement learning.", number: "18/961,269" },
  { title: "LLM-Based Exam Generator Platform", description: "Covers our proprietary AI for automated and adaptive exam creation.", number: "63/725,460" },
  { title: "LLM-Based Automatic Grading", description: "Protects our core algorithms for fast, fair, and transparent automated grading.", number: "63/725,459" },
];
const Portfolio = () => (
  <section className="bg-[var(--color-bg)] py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:text-left"><h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">Our IP Portfolio: A Competitive Edge</h2></div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {patents.map(p => (
          <div key={p.number} className="bg-[var(--color-surface)] p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <PatentIcon className="h-8 w-8 text-[var(--color-primary-light)] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Application #: {p.number}</p>
              </div>
            </div>
            <p className="mt-4 text-[var(--color-text-secondary)]">{p.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-lg italic text-[var(--color-text-secondary)]">“Our IP covers core algorithms for adaptive learning, analytics, and secure AI classroom interaction, providing strong barriers to entry.”</p>
    </div>
  </section>
);
const PieChart = ({ data }) => {
  let cumulativePercent = 0;
  return (
    <svg viewBox="0 0 32 32" className="w-full h-auto">
      {data.map(({ percent, color }) => {
        const startX = 16 + 15 * Math.cos(2 * Math.PI * cumulativePercent);
        const startY = 16 + 15 * Math.sin(2 * Math.PI * cumulativePercent);
        cumulativePercent += percent / 100;
        const endX = 16 + 15 * Math.cos(2 * Math.PI * cumulativePercent);
        const endY = 16 + 15 * Math.sin(2 * Math.PI * cumulativePercent);
        const largeArcFlag = percent > 50 ? 1 : 0;
        const pathData = `M 16 16 L ${startX} ${startY} A 15 15 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
        return <path key={color} d={pathData} fill={color} />;
      })}
    </svg>
  );
};
const Opportunity = () => {
  const useOfFunds = [
    { label: 'Sales/Marketing', percent: 50, color: '#3B82F6' },
    { label: 'Product & AI R&D', percent: 20, color: '#10B981' },
    { label: 'Pilots/Customer Success', percent: 20, color: '#F59E0B' },
    { label: 'Operations/Legal', percent: 10, color: '#EF4444' },
  ];
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center"><h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">Investment Opportunity</h2></div>
        <div className="mt-12 bg-[var(--color-surface)] rounded-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Currently Raising: <span className="text-[var(--color-primary)]">$800,000</span></h3>
            <p className="text-lg text-[var(--color-text-secondary)] mt-1">SAFE Round is Open (No Cap, 20% Discount)</p>
            <p className="mt-6 text-[var(--color-text-secondary)]">We offer early-stage equity and an opportunity for active involvement in shaping the future of education technology.</p>
            {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#" className="w-full sm:w-auto inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">Contact Founders</a>
              <a href="#" className="w-full sm:w-auto inline-block bg-[var(--color-surface)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">See Investment Terms</a>
            </div> */}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-4">Use of Funds</h3>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="aspect-square"><PieChart data={useOfFunds} /></div>
              <div className="space-y-3">
                {useOfFunds.map(item => (
                  <div key={item.label} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[var(--color-text-primary)]">{item.label} ({item.percent}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
const InvestorCta = () => (
  <section id="investor-cta" className="bg-[var(--color-bg)]">
    <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)]">Ready to join us at the ground floor?</h2>
      <p className="mt-4 text-lg leading-6 text-[var(--color-text-secondary)]">Request our investor pack, meet our founders, or get a personal demo.</p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a href="mailto:info@encando.ai" className="inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">Request Investor Deck</a>
        {/* <a href="#" className="inline-block bg-[var(--color-primary)]/50 text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--color-primary)]/80 transition-colors">Book a Call</a> */}
      </div>
    </div>
  </section>
);

const InvestorsPage = () => {
  return (
  <>
    <Header />
    <main >
      <InvestorHero />
      <WhyInvest />
      <Portfolio />
      <Opportunity />
      <InvestorCta />
    </main>
    <Footer />
  </>
  );
};

export default InvestorsPage;