import React, { createContext, useState, useEffect, useContext } from 'react';

const lightTheme = {
  text: 'text-primary',
  textSecondary: 'text-secondary',
  background: 'bg-background-lighter',
  headerBg: 'bg-background-lighter',
  cardBg: 'bg-primary',
  cardText: 'text-background',
  buttonBg: 'bg-secondary',
  buttonHoverBg: 'bg-secondary-darker',
  buttonHoverText: 'text-background-lighter',
  buttonText: 'text-background-lighter',
  contactBg: 'bg-primary',
  contactText: 'text-background-lighter',
  border: 'border-background'
};

const darkTheme = {
  text: 'text-background',
  textSecondary: 'text-bgSecondary',
  background: 'bg-primary-darker',
  headerBg: 'bg-primary-darker',
  cardBg: 'bg-secondary',
  cardText: 'text-background',
  buttonBg: 'bg-bgSecondary',
  buttonHoverBg: 'bg-background-darker',
  buttonHoverText: 'text-primary-darker',
  buttonText: 'text-primary-darker',
  contactBg: 'bg-background-darker',
  contactText: 'text-primary-darker',
  border: 'border-primary-darker'
};

const ThemeContext = createContext({
    theme: 'light',
    themeStyles: lightTheme,
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [themeStyles, setThemeStyles] = useState(lightTheme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      setThemeStyles(localTheme === 'dark' ? darkTheme : lightTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      setThemeStyles(initialTheme === 'dark' ? darkTheme : lightTheme);
      window.localStorage.setItem('theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setThemeStyles(newTheme === 'dark' ? darkTheme : lightTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
