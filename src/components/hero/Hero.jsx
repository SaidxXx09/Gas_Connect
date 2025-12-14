import React from 'react';
import './Hero.css';
import TruckImage from '../../assets/camion-grande-Photoroom.png';

const Hero = () => {
    return (
        <main className="hero" id="inicio">
            <div className="container hero-grid">
                <div className="hero-text-content">
                    <h2>Llevamos gas <span className="text-highlight">a donde nos sea posible.</span></h2>
                    <a href="#servicios" className="btn btn--primary">Pedir Gas Ahora</a>
                </div>

                <div className="hero-image">
                    <img src={TruckImage} alt="Logo animado de GasConnect" loading="eager"/>
                </div>

                <div className="hero-features">
                    <div className="feature-card">
                        <i className='bx bx-timer'></i>
                        <p>Rápido</p>
                    </div>
                    <div className="feature-card">
                        <i className='bx bx-shield'></i>
                        <p>Confiable</p>
                    </div>
                    <div className="feature-card">
                        <i className='bx bx-time-five'></i>
                        <p>24/7</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;