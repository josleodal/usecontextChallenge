import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importar componentes de enrutamiento
import Home from '../pages/Home'; // Importar componente de la página Home
import Profile from '../pages/Profile'; // Importar componente de la página Profile
import MyJob from '../pages/MyJob'; // Importar componente de la página MyJob

// Definir componente que contiene las rutas de la aplicación
const RoutesApp = () => {
  return (
    <Router> {/* Envolvemos las rutas con el componente Router */}
      <nav> {/* Barra de navegación */}
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Enlace a la página Home */}
          </li>
          <li>
            <Link to="/profile">Profile</Link> {/* Enlace a la página Profile */}
          </li>
          <li>
            <Link to="/myjob">My Job</Link> {/* Enlace a la página MyJob */}
          </li>
        </ul>
      </nav>
      <Routes> {/* Definición de las rutas */}
        {/* Ruta para la página Home */}
        <Route path="/" element={<Home />} /> {/* Asociamos la ruta '/' con el componente Home */}
        {/* Ruta para la página Profile */}
        <Route path="/profile" element={<Profile />} /> {/* Asociamos la ruta '/profile' con el componente Profile */}
        {/* Ruta para la página MyJob */}
        <Route path="/myjob" element={<MyJob />} /> {/* Asociamos la ruta '/myjob' con el componente MyJob */}
      </Routes>
    </Router>
  );
};

export default RoutesApp; // Exportar el componente RoutesApp
