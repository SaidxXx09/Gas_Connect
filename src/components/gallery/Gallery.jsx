import React from 'react';
import './Gallery.css';
import GalleryLogo from '../../assets/galeria.png';

const Gallery = () => {
    return (
        <section className="gallery bg-dark" id="galeria">
            <div className="container">
                <h2 className="section-title text-center text-light">Galería de Entregas</h2>
                <p className="gallery-description text-center">Explora nuestra galería para ver a nuestro equipo en acción.</p>
                <img className="gallery-image" src={GalleryLogo} alt="logotipo de galeria"/>
            </div>
        </section>
    );
};

export default Gallery;