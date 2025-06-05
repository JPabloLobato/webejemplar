import React from 'react';
import "./Contactos.css";

export default function Contactos() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contáctanos</h1>
            <p className="contact-desc">¿Tienes preguntas o quieres colaborar? ¡Escríbenos!</p>
            <form className="contact-form">
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo electrónico" required />
                <textarea rows="4" placeholder="Mensaje" required />
                <button type="submit">Enviar</button>
            </form>
            <div className="contact-socials">
                <a href="https://www.linkedin.com/in/pablo-lobato-536b67221/" className="social neon-glow" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/JPabloLobato" className="social neon-glow" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}