import React from 'react';
import RoutesApp from './routes/RoutesApp'; // Importar componente de rutas
import { ThemeProvider } from './themes/ThemeContext'; // Importar proveedor de tema
import './App.css'; // Importar estilos CSS de la aplicación

// Definir componente principal de la aplicación
const App = () => {
  return (
    // Envolver la aplicación con el proveedor de tema para proporcionar el contexto del tema a los componentes hijos
    <ThemeProvider>
      {/* Contenedor principal de la aplicación */}
      <div className="App">
        {/* Componente de rutas que gestiona las distintas vistas de la aplicación */}
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};

export default App; // Exportar el componente principal de la aplicación
