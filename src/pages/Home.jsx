import React from 'react';
import './Home.css';

function Home() {

    return (
        <>
            <div className="header">
                <h1>Auditoria de Seguridad</h1>
                <p>Esta herramienta permite auditar la seguridad de un sitio web.</p>
                <button className="arrowdown-toggle">
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

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