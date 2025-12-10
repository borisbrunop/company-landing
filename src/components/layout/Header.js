import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoLight from '../../images/logo-light.png';
import LogoDark from '../../images/logo-dark.png';
import Button from '../Button';
import { useTheme } from '../../hooks/useTheme';
import DarkModeToggle from '../DarkModeToggle';
import { Link } from 'gatsby';
import LanguageToggle from '../LanguageToggle';
import { useTranslation } from 'react-i18next';

const pathnamesWithoutHeader = ['/auth-docs/', '/admin/'];

const Header = () => {
  const { themeStyles, theme } = useTheme();
  const { t } = useTranslation();
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
        <div className="flex items-center text-2xl sm:mb-0 mb-2">
          <div className="w-12 mr-3">
            <Link to="/">
              <img src={theme === 'dark' ? LogoLight : LogoDark} alt="IPGC Logo" />
            </Link>
          </div>
        </div>
        <div className="flex items-center w-full overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          <div className="w-fit flex items-center whitespace-nowrap min-w-min ml-auto">
            {!isPathnameWithoutHeader && (
              <>
                <AnchorLink
                  offset={100}
                  className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                  href="#features"
                >
                  {t('header.policies')}
                </AnchorLink>
                <AnchorLink
                  offset={100}
                  className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                  href="#services"
                >
                  {t('header.services')}
                </AnchorLink>
                <AnchorLink
                  offset={200}
                  className={`px-4 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
                  href="#contact"
                >
                  {t('header.contact')}
                </AnchorLink>
              </>
            )}
            <div className="">
              <DarkModeToggle />
            </div>
            <div className=" flex items-center">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
