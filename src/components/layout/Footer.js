import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const pathnamesWithoutFooter = ['/auth-docs', '/admin'];

const Footer = () => {
  const { themeStyles } = useTheme();
  const [path, setPath] = useState('');

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);

  if (pathnamesWithoutFooter.includes(path)) {
    return null;
  }

  return (
    <footer
      className={`container mx-auto py-16 px-3 mt-10 md:mt-48 mb-8 ${themeStyles.background} ${themeStyles.text}`}
    >
      <div className="flex -mx-3">
        <div className="flex px-3 items-center w-full flex-col">
          <a
            href="mailto:gerencia@interpgc.com"
            type="button"
            style={{ textDecoration: 'none' }}
            className={`mt-5 text-center ${themeStyles.textSecondary} hover:${themeStyles.text}`}
          >
            gerencia@interpgc.com
          </a>
          <p className={`text-center ${themeStyles.textSecondary}`}>Panama City, Panama</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
