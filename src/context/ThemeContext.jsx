import React, { createContext, useContext } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ 
  children, 
  primaryShades = [], 
  secondaryShades = [], 
  tertiaryShades = [] 
}) => {
  const getColorByWeight = (shades, weight) => 
    shades.find(s => s.weight === weight)?.hsl || '';

  const theme = {
    colors: {
      primary: {
        50: getColorByWeight(primaryShades, 50),
        100: getColorByWeight(primaryShades, 100),
        200: getColorByWeight(primaryShades, 200),
        300: getColorByWeight(primaryShades, 300),
        400: getColorByWeight(primaryShades, 400),
        500: getColorByWeight(primaryShades, 500),
        600: getColorByWeight(primaryShades, 600),
        700: getColorByWeight(primaryShades, 700),
        800: getColorByWeight(primaryShades, 800),
        900: getColorByWeight(primaryShades, 900),
      },
      secondary: {
        50: getColorByWeight(secondaryShades, 50),
        100: getColorByWeight(secondaryShades, 100),
        200: getColorByWeight(secondaryShades, 200),
        300: getColorByWeight(secondaryShades, 300),
        400: getColorByWeight(secondaryShades, 400),
        500: getColorByWeight(secondaryShades, 500),
        600: getColorByWeight(secondaryShades, 600),
        700: getColorByWeight(secondaryShades, 700),
        800: getColorByWeight(secondaryShades, 800),
        900: getColorByWeight(secondaryShades, 900),
      },
      tertiary: {
        50: getColorByWeight(tertiaryShades, 50),
        100: getColorByWeight(tertiaryShades, 100),
        200: getColorByWeight(tertiaryShades, 200),
        300: getColorByWeight(tertiaryShades, 300),
        400: getColorByWeight(tertiaryShades, 400),
        500: getColorByWeight(tertiaryShades, 500),
        600: getColorByWeight(tertiaryShades, 600),
        700: getColorByWeight(tertiaryShades, 700),
        800: getColorByWeight(tertiaryShades, 800),
        900: getColorByWeight(tertiaryShades, 900),
      }
    },
    semantic: {
      background: getColorByWeight(primaryShades, 50),
      surface: getColorByWeight(primaryShades, 100),
      border: getColorByWeight(primaryShades, 200),
      text: {
        primary: getColorByWeight(primaryShades, 900),
        secondary: getColorByWeight(primaryShades, 700),
        tertiary: getColorByWeight(primaryShades, 500),
      },
      action: {
        primary: getColorByWeight(primaryShades, 500),
        primaryHover: getColorByWeight(primaryShades, 600),
        secondary: getColorByWeight(secondaryShades, 500),
        secondaryHover: getColorByWeight(secondaryShades, 600),
        tertiary: getColorByWeight(tertiaryShades, 500),
        tertiaryHover: getColorByWeight(tertiaryShades, 600),
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};