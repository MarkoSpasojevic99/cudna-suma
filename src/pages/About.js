import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { translations } = useLanguage();

  return (
    <div className="p-6 mt-16 mb-16">
      <h1 className="text-4xl font-bold mb-4">{translations.about}</h1>
      <p className="text-lg">We are Čudna Šuma Brewery, dedicated to crafting unique and delicious beers.</p>
    </div>
  );
}

export default About;
