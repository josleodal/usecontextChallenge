import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de tema
export const ThemeContext = createContext();

// Crear el proveedor de tema
export const ThemeProvider = ({ children }) => {
  // Estado para almacenar el tema actual
  const [theme, setTheme] = useState('light');

  // Función para cambiar el tema
  const toggleTheme = () => {
    // Cambiar el tema entre 'light' y 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
    // Aplicar la clase 'dark' al body cuando cambie el tema para cambiar los estilos
    document.body.classList.toggle('dark', theme === 'dark');
  };

  // Proveer el contexto del tema y la función para cambiarlo a los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema
export const useTheme = () => {
  return useContext(ThemeContext);
};
