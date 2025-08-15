import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTheme } from '../../hooks/useTheme';
import logoLight from '../../images/logo-light.png';
import logoDark from '../../images/logo-dark.png';
import DarkModeToggle from '../DarkModeToggle';

const Header = () => {
  const { themeStyles, theme } = useTheme();

    useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#2E3B38';
    } else {
      document.body.style.backgroundColor = '#F6EEDD';
    }
  }, [theme]);

  return (
    <header className={`sticky top-0 ${themeStyles.headerBg} shadow`} style={{ boxShadow: '0 10px 28px rgba(0,0,0,.28)' }}>
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <AnchorLink offset={100} className="px-4" href="#home">
            <img className="w-24 h-auto object-cover " src={theme === "dark" ? logoLight : logoDark} alt="logo" />
          </AnchorLink>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink offset={100} className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`} href="#features">
            Policies
          </AnchorLink>
          <AnchorLink offset={100} className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`} href="#services">
            Services
          </AnchorLink>
          <AnchorLink offset={200} className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`} href="#contact">
            Contact
          </AnchorLink>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
