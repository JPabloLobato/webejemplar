import React from 'react';
import { useState } from 'react';
import './Home.css';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="header">
                <h1>Auditoria de Seguridad</h1>
                <p>Esta herramienta permite auditar la seguridad de un sitio web.</p>
                <button className="arrowdown-toggle">
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

            <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}>
                <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i> {/* Icono cambia según el estado del menú */}
            </button>

            {menuOpen && (
                <div className="dropdown-menu-container">
                    <button className="close-menu" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="./Home.jsx">Inicio</a></li>
                        <li><a href="./Resultados.jsx">Resultado</a></li>
                        <li><a href="/services.html">Servicios</a></li>
                        <li><a href="./Contactos.jsx">Contacto</a></li>
                    </ul>
                </div>
            )}

            <div className="content1">
                <h2>Bienvenido a la Auditoría de Seguridad</h2>
                <p>Utiliza el menú para navegar por las diferentes secciones.</p>
            </div>

            <div className="analytic">
                <h2>Analiza tu web</h2>
                <p>asdfasdf</p>
                <input type="url" name="urlAnalytic" placeholder="Inserta la URL" />
            </div>
            <footer>
                <p>© 2023 Auditoría de Seguridad. Todos los derechos reservados.</p>
                <p>Desarrollado por <a href=""></a> </p>
            </footer>
        </>
    );
}
export default Home;