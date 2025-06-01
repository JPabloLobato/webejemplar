import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="header">
        <h1>Auditoria de Seguridad</h1>
        <p>Esta herramienta permite auditar la seguridad de un sitio web.</p>
        <button className="arrowdown-toggle">
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>

      <button
        className="menu-toggle"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {menuOpen && (
        <div className="overlay">
          <div className="overlay-blur" onClick={() => setMenuOpen(false)} />
          <nav className="overlay-menu">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              &times;
            </button>
            <ul>
              <li><a href="/auditar">Auditar</a></li>
              <li><a href="/resultados">Resultados</a></li>
              <li><a href="/configuracion">Configuración</a></li>
            </ul>
          </nav>
        </div>
      )}

      <div className="content">
        <h2>Bienvenido a la Auditoría de Seguridad</h2>
        <p>Utiliza el menú para navegar por las diferentes secciones.</p>
      </div>

      <div className="analytic">
        <h2>Analiza tu web</h2>
        <p>asdfasdf</p>
        <input type="url" name="urlAnalytic" placeholder="Inserta la URL" />
      </div>
    </>
  )
}

export default App