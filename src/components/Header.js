import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Header({ setCurrentPage }) {
  const { translations, setLanguage } = useLanguage();

  const handleTranslate = (language) => {
    setLanguage(language);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button onClick={() => setCurrentPage('home')} className="hover:underline">{translations.home}</button>
          <button onClick={() => setCurrentPage('about')} className="hover:underline">{translations.about}</button>
          <button onClick={() => setCurrentPage('beers')} className="hover:underline">{translations.beers}</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:underline">{translations.contact}</button>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => handleTranslate('en')} className="hover:underline">EN</button>
          <button onClick={() => handleTranslate('ru')} className="hover:underline">RU</button>
          <button onClick={() => handleTranslate('sr')} className="hover:underline">SR</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
