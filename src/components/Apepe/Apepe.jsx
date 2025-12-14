import React from 'react';
import './apepe.css';
import PhoneImage from '../../assets/telefono-Photoroom.png';
import GooglePlay from '../../assets/googleplay.png';
import AppStore from '../../assets/appstore.png';

const apepe = () => {
    return (
        <section className="app-promo container" id="app">
            <div className="app-grid">

                <img src={PhoneImage} width="300" height="500" alt="Teléfono mostrando la aplicación GasConnect" loading="lazy"/>

                <div className="app-content">
                    <h2 className="section-title">Descarga la aplicación</h2>
                    <p className="app-description">Con nuestra app, puedes programar la entrega de gas a domicilio fácilmente. Vive la comodidad de tener el control en tus manos.</p>

                    <a href="https://play.google.com/store/games?device=windows" target="_blank" aria-label="Descargar en Google Play">
                        <img src={GooglePlay} alt="Logo Google Play" loading="lazy"/>
                    </a>

                    <a href="https://www.apple.com/la/app-store/" target="_blank" aria-label="Descargar en App Store">
                        <img src={AppStore} alt="Logo App Store" loading="lazy"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default apepe;