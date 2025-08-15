import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Moon from '../icons/Moon.js';
import Sun from '../icons/Sun.js';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className={`px-4 cursor-pointer ${theme === "dark" ? `text-background-lighter` : `text-secondary`}`}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </div>
  );
};

export default DarkModeToggle;
