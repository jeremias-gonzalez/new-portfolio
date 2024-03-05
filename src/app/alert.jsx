'use client';

import { Alert } from 'flowbite-react';

function alert() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

// Si el tema es oscuro, oculta el código
if (isDarkMode) {
  document.getElementById('alert-container').style.display = 'none';
}
console.log('alert')
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export default alert;