import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Home() {
  const { translations } = useLanguage();

  return (
    <div className="p-6 mt-16 mb-16">
      <h1 className="text-4xl font-bold mb-4">{translations.description}</h1>
      <p className="text-lg">Discover the magic of our craft beers.</p>
    </div>
  );
}

export default Home;