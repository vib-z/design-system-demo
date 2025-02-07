import React from 'react';
import { hexToHSL } from '../../utils/colorUtils';

const ColorInput = ({ 
  label, 
  hexColor, 
  onChange 
}) => {
  const hslValue = hexToHSL(hexColor);
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={hexColor}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-20"
        />
        <input
          type="text"
          value={hexColor}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 border rounded-md"
        />
        <div className="text-sm text-gray-600">
          HSL: {hslValue.h}°, {hslValue.s}%, {hslValue.l}%
        </div>
      </div>
    </div>
  );
};

export default ColorInput;