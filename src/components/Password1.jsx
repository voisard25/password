import React, { useState } from 'react';

const Password1 = ({ onPasswordChange }) => {
  // Estados para manejar la contraseña y su visibilidad
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // Función para evaluar la fortaleza de la contraseña
  const evaluatePassword = () => {
    let strength = 0;
    
    // Criterios de evaluación
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Clasificación según puntuación
    if (strength <= 2) return 'Poco segura';
    if (strength <= 4) return 'Segura';
    return 'Muy segura';
  };

  // Función para copiar al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Función para generar contraseña aleatoria básica
  const generateBasicPassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    if (onPasswordChange) onPasswordChange(newPassword);
  };

  return (
    <div className="password-component">
      <div className="password-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (onPasswordChange) onPasswordChange(e.target.value);
          }}
          placeholder="Ingrese su contraseña"
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

      <div className="password-strength">
        Fortaleza: {evaluatePassword()}
      </div>

      <div className="password-actions">
        <button onClick={generateBasicPassword}>
          Generar Contraseña
        </button>
        <button onClick={copyToClipboard}>
          Copiar Contraseña
        </button>
      </div>

      {copied && (
        <div className="copy-notification">
          ¡Contraseña copiada al portapapeles!
        </div>
      )}
    </div>
  );
};

export default Password1;