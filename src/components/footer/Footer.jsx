import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer bg-dark">
            <div className="container footer-grid">

                <div className="footer-block footer-contact-info">
                    <h3 className="footer-title">Contacto</h3>
                    <p className="call">(593) 995644186</p>
                    <p className="write">GasConnect@gmail.com</p>
                </div>

                <div className="footer-block footer-links">
                    <h3 className="footer-title">Enlaces de interés</h3>
                    <a href="#">Soporte técnico</a>
                    <a href="#">Blog de noticias</a>
                    <a href="#">Preguntas frecuentes (FAQ)</a>
                </div>

                <div className="footer-block footer-social">
                    <h3 className="footer-title">Síguenos</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://x.com/" target="_blank" aria-label="x-icon"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

            </div>

            <div className="footer-copy">
                <hr/>
                <p>© 2024 GasConnect. Derechos Reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;