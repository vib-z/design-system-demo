import React, { useState } from 'react';
import ColorPalette from './components/ColorPicker/ColorPalette';

const App = () => {
  const [colorSystem, setColorSystem] = useState({
    primary: [],
    secondary: [],
    tertiary: []
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8 space-y-12">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Design System</h1>
          <p className="mt-2 text-gray-600">
            Create and preview your design system with live component updates
          </p>
        </header>

        <ColorPalette onChange={setColorSystem} />
      </div>
    </div>
  );
};

export default App;