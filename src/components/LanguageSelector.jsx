// components/LanguageSelector.jsx
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    const currentPath = window.location.pathname;
    
    if (lng === 'es') {
      // Cambiar a español (raíz) - eliminar /en/ si existe
      if (currentPath.startsWith('/en')) {
        const pathWithoutLocale = currentPath.substring(3); // Remueve "/en"
        window.location.href = pathWithoutLocale || '/';
      }
      // Si ya está en español, no hacer nada
    } else if (lng === 'en') {
      // Cambiar a inglés - agregar /en/ si no existe
      if (!currentPath.startsWith('/en')) {
        window.location.href = `/en${currentPath}`;
      }
    }
  };

  return (
    <div className="flex space-x-1 mr-2">
      <button 
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 ${
          currentLang === 'es' ? 'bg-[#d2938c] text-white' : 'bg-gray-200'
        }`}
      >
        ES
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 ${
          currentLang === 'en' ? 'bg-[#d2938c] text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;