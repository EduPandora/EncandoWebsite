import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="app-container">
            <Header />
            <main className="not-found-main-content">
                <div className="not-found-container">
                    <h1 className="not-found-title">404</h1>
                    <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
                    <p className="not-found-suggestion">
                        You can <a href="/">return to the homepage</a> or try searching.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default NotFoundPage; 