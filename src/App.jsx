import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resultados from './pages/Resultados.jsx';
import Contactos from './pages/Contactos.jsx';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resultados" element={<Resultados />} />
                <Route path="/contactos" element={<Contactos />} />
            </Routes>
        </Router>
    );
}

export default App