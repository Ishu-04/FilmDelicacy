import React from 'react';

const FilterBar = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center my-3 gap-2">
      <button
        className={`btn ${sortOrder === 'new' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setSortOrder('new')}
      >
        Newest First
      </button>
      <button
        className={`btn ${sortOrder === 'old' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setSortOrder('old')}
      >
        Oldest First
      </button>
      <button
        className={`btn ${sortOrder === 'medium' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setSortOrder('medium')}
      >
        2000-2015 Movies
      </button>
    </div>
  );
};

export default FilterBar;
