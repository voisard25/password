import React, { useState } from 'react';

const Password2 = ({ onGeneratePassword }) => {
  // Estados para las opciones de generación
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [options, setOptions] = useState({
    length: 12,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecial: false
  });

  // Función para generar contraseña personalizada
  const generateCustomPassword = () => {
    let chars = '';
    if (options.includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (options.includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.includeNumbers) chars += '0123456789';
    if (options.includeSpecial) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (chars === '') {
      alert('Por favor seleccione al menos un tipo de carácter');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < options.length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    onGeneratePassword(newPassword);
  };

  // Manejador para cambios en las opciones
  const handleOptionChange = (option, value) => {
    setOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };

  return (
    <div className="advanced-options">
      <button onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? 'Ocultar Opciones Avanzadas' : 'Mostrar Opciones Avanzadas'}
      </button>

      {showAdvanced && (
        <div className="options-panel">
          <div className="option-item">
            <label>Longitud de la contraseña:</label>
            <input
              type="number"
              min="8"
              max="32"
              value={options.length}
              onChange={(e) => handleOptionChange('length', parseInt(e.target.value))}
            />
          </div>

          <div className="option-item">
            <label>
              <input
                type="checkbox"
                checked={options.includeLowercase}
                onChange={(e) => handleOptionChange('includeLowercase', e.target.checked)}
              />
              Incluir minúsculas
            </label>
          </div>

          <div className="option-item">
            <label>
              <input
                type="checkbox"
                checked={options.includeUppercase}
                onChange={(e) => handleOptionChange('includeUppercase', e.target.checked)}
              />
              Incluir mayúsculas
            </label>
          </div>

          <div className="option-item">
            <label>
              <input
                type="checkbox"
                checked={options.includeNumbers}
                onChange={(e) => handleOptionChange('includeNumbers', e.target.checked)}
              />
              Incluir números
            </label>
          </div>

          <div className="option-item">
            <label>
              <input
                type="checkbox"
                checked={options.includeSpecial}
                onChange={(e) => handleOptionChange('includeSpecial', e.target.checked)}
              />
              Incluir caracteres especiales
            </label>
          </div>

          <button onClick={generateCustomPassword}>
            Generar Contraseña Personalizada
          </button>
        </div>
      )}
    </div>
  );
};

export default Password2;