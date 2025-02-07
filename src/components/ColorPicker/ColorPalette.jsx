import React, { useState, useEffect } from 'react';
import ColorInput from './ColorInput';
import ShadeDisplay from './ShadeDisplay';
import { hexToHSL, generateShades } from '../../utils/colorUtils';

const ColorPalette = ({ onChange }) => {
  const [colors, setColors] = useState({
    primary: '#3e98f2',
    secondary: '#6366f1',
    tertiary: '#ec4899'
  });

  const [shades, setShades] = useState({
    primary: [],
    secondary: [],
    tertiary: []
  });

  useEffect(() => {
    const newShades = {
      primary: generateShades(hexToHSL(colors.primary)),
      secondary: generateShades(hexToHSL(colors.secondary)),
      tertiary: generateShades(hexToHSL(colors.tertiary))
    };
    
    setShades(newShades);
    onChange?.(newShades);
  }, [colors, onChange]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Color System</h2>
      
      <div className="space-y-8">
        <div>
          <ColorInput
            label="Primary Color"
            hexColor={colors.primary}
            onChange={(value) => setColors(prev => ({ ...prev, primary: value }))}
          />
          <ShadeDisplay 
            shades={shades.primary} 
            originalColor={colors.primary}
          />
        </div>

        <div>
          <ColorInput
            label="Secondary Color"
            hexColor={colors.secondary}
            onChange={(value) => setColors(prev => ({ ...prev, secondary: value }))}
          />
          <ShadeDisplay 
            shades={shades.secondary}
            originalColor={colors.secondary}
          />
        </div>

        <div>
          <ColorInput
            label="Tertiary Color"
            hexColor={colors.tertiary}
            onChange={(value) => setColors(prev => ({ ...prev, tertiary: value }))}
          />
          <ShadeDisplay 
            shades={shades.tertiary}
            originalColor={colors.tertiary}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;