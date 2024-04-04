import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import './App.css'; // Asegúrate de importar el archivo de estilos aquí

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
