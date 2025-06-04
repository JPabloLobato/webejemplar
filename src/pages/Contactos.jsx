import React from 'react';
import './Contactos.css';

function Contactos() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contáctanos</h1>
            <p className="contact-desc">
                ¿Tienes preguntas o quieres colaborar? ¡Escríbenos!
            </p>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo electrónico" required />
                <textarea rows="4" placeholder="Mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div className="contact-socials">
                <a href="#" className="social neon-glow">Twitter</a>
                <a href="#" className="social neon-glow">LinkedIn</a>
                <a href="#" className="social neon-glow">GitHub</a>
            </div>
        </div>
    );
}

export default Contactos;