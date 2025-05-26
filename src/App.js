import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import Company from './Pages/Company';
import Team from './Pages/Team';
import NotFoundPage from './Pages/NotFoundPage';
import './Styles/App.css';

function App() {
    return (
        <Router basename="/EncandoWebsite">
            <Routes>
                <Route path="/" element={<Company />} />
                <Route path="/product" element={<Product />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
