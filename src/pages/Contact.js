import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { translations } = useLanguage();

  return (
    <div className="p-6 mt-16 mb-16">
      <h1 className="text-4xl font-bold mb-4">{translations.contact}</h1>
      <p className="text-lg">Feel free to reach out to us with any questions or comments.</p>
    </div>
  );
}

export default Contact;