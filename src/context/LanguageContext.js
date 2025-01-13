import React, { createContext, useContext, useState } from 'react';
import translations from '../data/translations';

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('sr');

  return (
    <LanguageContext.Provider value={{
      translations: translations[language] || translations.sr,
      setLanguage,
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;