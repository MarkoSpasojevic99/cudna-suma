import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Header({ setCurrentPage }) {
  const { translations, setLanguage } = useLanguage();

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button onClick={() => setCurrentPage('home')}>{translations.home}</button>
          <button onClick={() => setCurrentPage('about')}>{translations.about}</button>
          <button onClick={() => setCurrentPage('beers')}>{translations.beers}</button>
          <button onClick={() => setCurrentPage('contact')}>{translations.contact}</button>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => setLanguage('en')}>EN</button>
          <button onClick={() => setLanguage('ru')}>RU</button>
          <button onClick={() => setLanguage('sr')}>SR</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

