import React from 'react';
import './About.css';
import TruckImage2 from '../../assets/Camion.png';

const About = () => {
    return (
        <section className="about-us" id="nosotros">
            <div className="container about-grid">
                
                {/* 1. El bloque de texto entra desde la izquierda */}
                <div className="about-content" data-aos="fade-right">
                    <h2 className="section-title">Sobre Nosotros</h2>
                    <p>
                        En GasConnect, nos dedicamos a llevar gas de manera rápida, segura y eficiente hasta donde estés.
                    </p>
                    <p>
                        A través de nuestra plataforma web puedes programar tus entregas, verificar disponibilidad y recibir tu pedido sin complicaciones.
                    </p>
                    <p>
                        Nuestra meta es simplificar el acceso al gas doméstico y comercial, brindando un servicio confiable en cualquier momento y lugar.
                    </p>
                </div>

                {/* 2. La imagen entra desde la derecha con un ligero zoom */}
                <div className="about-image" data-aos="fade-left" data-aos-delay="200">
                    <img src={TruckImage2} alt="Camión de GasConnect en la ciudad" loading="lazy"/>
                </div>
                
            </div>
        </section>
    );
};

export default About;
