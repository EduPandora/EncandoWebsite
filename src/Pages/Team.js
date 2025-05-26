import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/Team.css'; // We'll create this file next

// Placeholder team data
const teamMembers = [
    {
        id: 1,
        name: 'Dr. Rujun Gao',
        position: 'Co-Founder & CEO',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/RujunGao.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/rujun-gao-00740a221/',
    },
    {
        id: 2,
        name: 'Dr. Arun Srinivasa',
        position: 'Co-Founder',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/ArunSrinivasa.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/arun-srinivasa-452768295/',
    },
    {
        id: 3,
        name: 'Dr. Krishna Narayanan',
        position: 'Co-Founder',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/KrishnaNarayanan.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/krishna-narayanan-3237749/',
    },
    {
        id: 4,
        name: 'Dev Garg',
        position: 'Senior Founding Software Developer',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/DevGarg.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/devgargd7/',
    },
    {
        id: 5,
        name: 'Jawahar Sai Nathani',
        position: 'Senior Founding Software Developer',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/JawaharSaiNathani.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/jawahar-nathani/',
    },
    {
        id: 6,
        name: 'Pranav Srinivasan',
        position: 'Full Stack Software Developer',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/PranavSrinivasan.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/pranav-srinivasan-736170189/',
    },
    {
        id: 7,
        name: 'Jonathan Herrera',
        position: 'Full Stack Software Developer',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/JonathanHerrera.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/jonathanaherrera/',
    },
    {
        id: 8,
        name: 'Yafei Li',
        position: 'Software Developer',
        photoUrl: `${process.env.PUBLIC_URL}/assets/team-photos/YafeiLi.jpg`, // Placeholder image
        linkedinUrl: 'https://www.linkedin.com/in/yafei-li-felix/',
    },
];

function Team() {
    return (
        <div className="app-container">
            <Header />
            <main className="team-main-content">
                <section className="team-hero-section">
                    <h1 className="team-main-heading">Meet Our Team</h1>
                    <p className="team-subheading">
                        <span>Passionate<span className="blue-period">.</span></span>
                        <span> Expert<span className="blue-period">.</span></span>
                        <span> Proactive<span className="blue-period">.</span></span>
                    </p>
                </section>

                <section className="team-grid-section">
                    <div className="team-grid">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="team-member-card">
                                <div className="team-member-photo-container">
                                    <img src={member.photoUrl} alt={member.name} className="team-member-photo" />
                                </div>
                                <h3 className="team-member-name">{member.name}</h3>
                                <p className="team-member-position">{member.position}</p>
                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="team-member-linkedin">
                                    LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Team;
