import React, { useState } from 'react';
import Password1 from './Password1';
import Password2 from './Password2';

const Password3 = () => {
  // Estado para almacenar la contraseña actual
  const [currentPassword, setCurrentPassword] = useState('');

  // Manejador para actualizar la contraseña
  const handlePasswordChange = (password) => {
    setCurrentPassword(password);
  };

  // Manejador para la generación de contraseña desde las opciones avanzadas
  const handleGeneratePassword = (password) => {
    setCurrentPassword(password);
  };

  return (
    <div className="password-manager">
      <h1>Generador y Validador de Contraseñas</h1>
      
      {/* Componente principal de contraseña */}
      <Password1
        onPasswordChange={handlePasswordChange}
      />

      {/* Componente de opciones avanzadas */}
      <Password2
        onGeneratePassword={handleGeneratePassword}
      />
    </div>
  );
};

export default Password3;