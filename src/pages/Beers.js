import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import BeerCard from '../components/BeerCard';
import BeerModal from '../components/BeerModal';
import BeerFilters from '../components/BeerFilters';
import { beerData } from '../data/beerData';

function Beers() {
  const { translations } = useLanguage();
  const [selectedStyle, setSelectedStyle] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedBeer, setSelectedBeer] = useState(null);

  // Filter and Sort Beers Functionality
  const filterBeers = () => {
    let filtered = beerData;
    if (selectedStyle) {
      filtered = filtered.filter((beer) => beer.style === selectedStyle);
    }
    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.alcohol - b.alcohol);
    } else if (sortOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.alcohol - a.alcohol);
    }
    return filtered;
  };

  const handleCardClick = (beer) => {
    setSelectedBeer(beer);
  };

  const closeModal = () => {
    setSelectedBeer(null);
  };

  return (
    <div className="p-6 mt-16 mb-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">{translations.beers}</h1>

      {/* Filters Component */}
      <BeerFilters
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Beer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterBeers().map((beer) => (
          <BeerCard key={beer.id} beer={beer} onCardClick={handleCardClick} />
        ))}
      </div>

      {/* Modal Component */}
      {selectedBeer && (
        <BeerModal beer={selectedBeer} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Beers;