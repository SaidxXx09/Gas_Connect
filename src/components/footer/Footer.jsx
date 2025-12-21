import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer bg-dark">
            <div className="container footer-grid">

                {/* Bloque 1: Contacto */}
                <div className="footer-block footer-contact-info" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="footer-title">Contacto</h3>
                    <p className="call">(593) 995644186</p>
                    <p className="write">GasConnect@gmail.com</p>
                </div>

                {/* Bloque 2: Enlaces - Aparece un poco después */}
                <div className="footer-block footer-links" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="footer-title">Enlaces de interés</h3>
                    <a href="#">Soporte técnico</a>
                    <a href="#">Blog de noticias</a>
                    <a href="#">Preguntas frecuentes (FAQ)</a>
                </div>

                {/* Bloque 3: Redes Sociales - Aparece al último */}
                <div className="footer-block footer-social" data-aos="fade-up" data-aos-delay="500">
                    <h3 className="footer-title">Síguenos</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://x.com/" target="_blank" aria-label="x-icon"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

            </div>

            {/* El copyright aparece fijo al final */}
            <div className="footer-copy" data-aos="fade-in" data-aos-anchor-placement="bottom-bottom">
                <hr/>
                <p>© 2024 GasConnect. Derechos Reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
