// File: src/components/BeerCard.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function BeerCard({ beer, onCardClick }) {
  const { translations } = useLanguage();

  return (
    <div
      className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
      onClick={() => onCardClick(beer)}
    >
      <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
      <p>{translations.style}: {beer.style}</p>
      <p>{translations.alcohol}: {beer.alcohol}%</p>
    </div>
  );
}

export default BeerCard;
