import React from 'react';
import './Hero.css';
import TruckImage from '../../assets/camion-grande-Photoroom.png';
import Girl from '../headergirl/Girl';

const Hero = () => {
    return (
        <main className="hero" id="inicio">
            <div className="container hero-grid">
                {/* 1. El texto entra desde la izquierda */}
                <div className="hero-text-content" data-aos="fade-right">
                    <h2>Llevamos gas <br /><span className="text-highlight"><Girl/></span></h2>
                    <a href="#servicios" className="btn btn--primary">Pedir Gas Ahora</a>
                </div>

                {/* 2. El camión entra desde la derecha con un ligero zoom */}
                <div className="hero-image" data-aos="fade-left" data-aos-duration="1500">
                    <img src={TruckImage} alt="Logo animado de GasConnect" loading="eager"/>
                </div>

                <div className="hero-features">
                    {/* 3. Las tarjetas aparecen de abajo hacia arriba con retrasos (delay) */}
                    <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                        <i className='bx bx-timer'></i>
                        <p>Rápido</p>
                    </div>
                    <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
                        <i className='bx bx-shield'></i>
                        <p>Confiable</p>
                    </div>
                    <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
                        <i className='bx bx-time-five'></i>
                        <p>24/7</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
