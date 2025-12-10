import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import Footer from './Footer';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
  const { themeStyles } = useTheme();
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !i18n.isInitialized) {
    return <div style={{ minHeight: '100vh', backgroundColor: '#F6EEDD' }}></div>; // Optional: A simple loading spinner or blank div matching bg color
  }

  return (
    <div className={`w-full ${themeStyles.background}`}>
      <Header />
      <main className={`${themeStyles.text} ${themeStyles.background}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
