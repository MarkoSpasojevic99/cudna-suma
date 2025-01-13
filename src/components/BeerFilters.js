import React from 'react';

function BeerFilters({ selectedStyle, setSelectedStyle, sortOrder, setSortOrder }) {
  return (
    <div className="mb-6 flex space-x-4">
      <select
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Styles</option>
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
        <option value="">Sort by Alcohol</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default BeerFilters;