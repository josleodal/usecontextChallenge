import React from 'react';
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
  // Usamos nuestro hook personalizado para acceder al contexto del tema
  const { toggleTheme } = useTheme();

  // Manejador de clic del botón
  const handleClick = () => {
    // Llamamos a la función para cambiar el tema cuando se hace clic en el botón
    toggleTheme();
  };

  return (
    <button className="toggle-btn" onClick={handleClick}>
      Toggle Theme
    </button>
  );
};

export default Button;
