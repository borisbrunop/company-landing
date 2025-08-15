import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Footer = () => {
  const { themeStyles } = useTheme();

  return (
    <footer className={`container mx-auto py-16 px-3 mt-10 md:mt-48 mb-8 ${themeStyles.background} ${themeStyles.text}`}>
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
          <p className={`text-center ${themeStyles.textSecondary}`}>
            Panama City, Panama
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
