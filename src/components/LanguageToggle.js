import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { USFlag } from '../icons/USFlag';
import { ESFlag } from '../icons/ESFlag';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { themeStyles } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`px-4 font-bold uppercase transition-colors duration-200 ${themeStyles.headerText} hover:${themeStyles.headerHoverText}`}
      title="Switch Language"
    >
      {i18n.language === 'en' ? <USFlag /> : <ESFlag />}
    </button>
  );
};

export default LanguageToggle;
