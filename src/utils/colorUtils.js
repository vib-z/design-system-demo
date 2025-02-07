export const hexToHSL = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

export const generateShades = (hsl) => {
  const shadeValues = [
    { weight: 50, s: 100, l: 97 },
    { weight: 100, s: 94, l: 94 },
    { weight: 200, s: 87, l: 85 },
    { weight: 300, s: 87, l: 75 },
    { weight: 400, s: 87, l: 65 },
    { weight: 500, s: 87, l: 60 },
    { weight: 600, s: 87, l: 50 },
    { weight: 700, s: 87, l: 40 },
    { weight: 800, s: 87, l: 35 },
    { weight: 900, s: 87, l: 25 }
  ];

  return shadeValues.map(shade => ({
    weight: shade.weight,
    hsl: `hsl(${hsl.h}, ${shade.s}%, ${shade.l}%)`
  }));
};

export const findClosestShade = (hsl) => {
  const shadeValues = [97, 94, 85, 75, 65, 60, 50, 40, 35, 25];
  const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  let closestIndex = 0;
  let minDiff = Math.abs(shadeValues[0] - hsl.l);
  
  shadeValues.forEach((shade, index) => {
    const diff = Math.abs(shade - hsl.l);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = index;
    }
  });
  
  return weights[closestIndex];
};