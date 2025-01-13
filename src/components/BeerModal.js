// File: src/components/BeerModal.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function BeerModal({ beer, closeModal }) {
  const { translations } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{beer.name}</h2>
        <p><strong>{translations.style}:</strong> {beer.style}</p>
        <p><strong>{translations.alcohol}:</strong> {beer.alcohol}%</p>
        <p className="mt-4">{beer.description}</p>
      </div>
    </div>
  );
}

export default BeerModal;
