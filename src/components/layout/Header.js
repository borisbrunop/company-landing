import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoLight from '../../images/logo-light.png';
import LogoDark from '../../images/logo-dark.png';
import Button from '../Button';
import { useTheme } from '../../hooks/useTheme';
import DarkModeToggle from '../DarkModeToggle';

const pathnamesWithoutHeader = ['/auth-docs/', '/admin/'];

const Header = () => {
  const { themeStyles, theme } = useTheme();
  // Initialize path safely
  const [path, setPath] = useState('');

  const isPathnameWithoutHeader = pathnamesWithoutHeader.includes(path);

  useEffect(() => {
    // This runs only in the browser, where window is available
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#2E3B38';
    } else {
      document.body.style.backgroundColor = '#F6EEDD';
    }
  }, [theme]);

  return (
    <header
      className={`sticky top-0 ${themeStyles.headerBg} shadow-lg z-50 transition-colors duration-200`}
    >
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl mb-4 sm:mb-0">
          <div className="w-12 mr-3">
            <img src={theme === 'dark' ? LogoLight : LogoDark} alt="IPGC Logo" />
          </div>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          {!isPathnameWithoutHeader && (
            <>
              <AnchorLink
                className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                href="#features"
              >
                Servicios
              </AnchorLink>
              <AnchorLink
                className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                href="#services"
              >
                Nosotros
              </AnchorLink>
              <AnchorLink
                className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                href="#stats"
              >
                Estadísticas
              </AnchorLink>
              <AnchorLink
                className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                href="#testimonials"
              >
                Clientes
              </AnchorLink>
            </>
          )}
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>
          {!isPathnameWithoutHeader && (
            <div className="hidden md:block ml-4">
              <Button className="text-sm">Contactanos</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
