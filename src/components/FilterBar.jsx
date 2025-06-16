import React from 'react';

const FilterBar = ({ selectedLetter, setSelectedLetter, sortOrder, setSortOrder }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">

      {/* A-Z Filter */}
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`btn btn-sm ${selectedLetter === letter ? 'btn-dark' : 'btn-outline-secondary'}`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
        <button
          className="btn btn-sm btn-warning"
          onClick={() => setSelectedLetter('')}
        >
          Reset
        </button>
      </div>

      {/* Sort by Year */}
      <select
        className="form-select w-auto"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by Year</option>
        <option value="new">Newest First</option>
        <option value="old">Oldest First</option>
        <option value="medium">2000-2015</option>
      </select>
    </div>
  );
};

export default FilterBar;
