import './src/css/tailwind.css';
import React from 'react';
import { ThemeProvider } from './src/hooks/useTheme';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
