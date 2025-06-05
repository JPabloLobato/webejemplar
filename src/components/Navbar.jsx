import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
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
                        <li><a href="">Servicios</a></li>
                        <li><a href="./Contactos.jsx">Contacto</a></li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;