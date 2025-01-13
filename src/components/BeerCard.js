import React from 'react';

function BeerCard({ beer, onCardClick }) {
  return (
    <div
      className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
      onClick={() => onCardClick(beer)}
    >
      <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
      <p>Style: {beer.style}</p>
      <p>Alcohol: {beer.alcohol}%</p>
    </div>
  );
}

export default BeerCard;