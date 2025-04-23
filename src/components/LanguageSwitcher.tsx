import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border border-gray-200 rounded hover:border-black transition-colors"
    >
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;