import React from 'react';

function BeerModal({ beer, closeModal }) {
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
        <p><strong>Style:</strong> {beer.style}</p>
        <p><strong>Alcohol:</strong> {beer.alcohol}%</p>
        <p className="mt-4">{beer.description}</p>
      </div>
    </div>
  );
}

export default BeerModal;