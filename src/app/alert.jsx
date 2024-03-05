'use client';

import { Alert } from 'flowbite-react';
import { useEffect, useState } from 'react';

function AlertComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica si el tema oscuro está activado en el lado del cliente
    const isDarkModeClient = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDarkModeClient);
  }, []);

  // Renderiza el componente solo si no estás en modo oscuro
  if (isDarkMode) {
    return null;
  }

  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export default AlertComponent;
