// File: src/components/BeerFilters.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function BeerFilters({ selectedStyle, setSelectedStyle, sortOrder, setSortOrder }) {
  const { translations } = useLanguage();

  return (
    <div className="mb-6 flex space-x-4">
      <select
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">{translations.allStyles}</option>
        <option value="Ale">Ale</option>
        <option value="Stout">Stout</option>
        <option value="IPA">IPA</option>
        <option value="Lager">Lager</option>
        <option value="Wheat">Wheat</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">{translations.sortByAlcohol}</option>
        <option value="asc">{translations.lowToHigh}</option>
        <option value="desc">{translations.highToLow}</option>
      </select>
    </div>
  );
}

export default BeerFilters;
