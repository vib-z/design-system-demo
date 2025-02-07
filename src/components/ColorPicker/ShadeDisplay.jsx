import React from 'react';
import { Star } from 'lucide-react';
import { hexToHSL, findClosestShade } from '../../utils/colorUtils';

const ShadeDisplay = ({ shades, originalColor }) => {
  const originalHsl = hexToHSL(originalColor);
  const originalShade = findClosestShade(originalHsl);
  const [copiedShade, setCopiedShade] = React.useState(null);

  const handleCopy = (hsl) => {
    navigator.clipboard.writeText(hsl);
    setCopiedShade(hsl);
    setTimeout(() => setCopiedShade(null), 2000);
  };

  return (
    <div className="grid grid-cols-10 gap-4 mb-8">
      {shades.map(({ weight, hsl }) => (
        <div key={weight} className="flex flex-col items-center">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-lg shadow-sm cursor-pointer transition-transform hover:scale-105 relative flex items-center justify-center"
              style={{ backgroundColor: hsl }}
              onClick={() => handleCopy(hsl)}
            >
              {weight === originalShade && (
                <Star className="w-6 h-6 text-white/80 absolute fill-current" />
              )}
            </div>
          </div>
          <span className="mt-2 text-xs font-medium text-gray-600">{weight}</span>
          <span className="text-xs text-gray-400 mt-1">
            {Math.round(hsl.match(/\d+/g)[2])}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShadeDisplay;