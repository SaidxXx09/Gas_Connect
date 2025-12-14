import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section container" id="contacto">
            <div className="contact-grid">

                <div className="contact-form-container">
                    <h2 className="section-title text-center">¿Tienes preguntas? Escríbenos</h2>
                    <form className="contact-form">
                        <input type="text" name="nombre" placeholder="Nombre" required />
                        <input type="email" name="correo" placeholder="Correo" required />
                        <input type="tel" name="celular" placeholder="Celular" required />
                        <textarea name="observaciones" placeholder="Observaciones" rows="5"></textarea>

                        <label className="checkbox-label">
                            <input type="checkbox" required />
                            Acepto los Términos y condiciones
                        </label>

                        <button type="submit" className="btn btn--primary btn-full-width">Enviar Mensaje</button>
                    </form>
                </div>

                <div className="contact-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d997.4478499867735!2d-78.48872713280483!3d-0.21047573598949548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sepn!5e0!3m2!1ses-419!2sec!4v1764109710956!5m2!1ses-419!2sec" 
                        width="600" height="450" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;