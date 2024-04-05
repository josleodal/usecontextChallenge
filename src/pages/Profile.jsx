import React from 'react';
import Button from '../components/Button'; // Importar el componente Button

// Definir componente para la página Profile
const Profile = () => {
  return (
    <div className="page-content"> {/* Contenedor de la página */}
      <h1>Esta es la página Profile</h1> {/* Encabezado de la página */}
      <Button /> {/* Renderizar el componente Button para cambiar el tema */}
    </div>
  );
};

export default Profile; // Exportar el componente Profile
