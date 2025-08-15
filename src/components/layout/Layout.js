import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const { themeStyles } = useTheme();

  return (
    <div className={`w-full ${themeStyles.background}`}>
      <Header />
      <main className={`${themeStyles.text} ${themeStyles.background}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
