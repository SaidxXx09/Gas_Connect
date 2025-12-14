import React from 'react';
import './Services.css';
import IconFast from '../../assets/rayo-Photoroom.png';
import IconTrack from '../../assets/ubicacion-Photoroom.png';
import IconSecure from '../../assets/candado-Photoroom.png';

const Services = () => {
    return (
        <section className="services-section bg-dark" id="servicios">
            <div className="container">
                <h2 className="section-title text-center text-light">Nuestros Servicios de Entrega</h2>
                <h4 className="services-subtitle text-center">Con GasConnect, olvídate de las esperas largas y aburridas. Te llevamos gas de forma rápida y segura.</h4>

                <div className="services-grid">

                    <article className="service-card">
                        <div className="card-icon">
                            <img src={IconFast} alt="Icono de entrega rápida" loading="lazy"/>
                        </div>
                        <h3 className="card-title">Entrega Rápida a Domicilio</h3>
                        <p className="card-description">Solicita tu cilindro de gas y recíbelo en la puerta de tu casa o negocio en minutos.</p>
                        <a href="#" className="btn btn--secondary">Pedir Gas Ahora</a>
                    </article>

                    <article className="service-card">
                        <div className="card-icon">
                            <img src={IconTrack} alt="Icono de mapa con ubicación" loading="lazy"/>
                        </div>
                        <h3 className="card-title">Seguimiento en Tiempo Real</h3>
                        <p className="card-description">Observa el recorrido de tu pedido y el tiempo estimado de llegada en la aplicación.</p>
                        <a href="#" className="btn btn--secondary">Seguimiento Ahora</a>
                    </article>

                    <article className="service-card">
                        <div className="card-icon">
                            <img src={IconSecure} alt="Icono de pago seguro" loading="lazy"/>
                        </div>
                        <h3 className="card-title">Pagos Seguros y Programados</h3>
                        <p className="card-description">Paga con tarjeta o efectivo. Programa tus entregas para que nunca te quedes sin gas.</p>
                        <a href="#" className="btn btn--secondary">Opciones de Pago</a>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default Services;