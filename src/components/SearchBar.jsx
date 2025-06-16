import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <div className="input-group w-75" style={{ maxWidth: '700px' }}>
        <span className="input-group-text" id="icon-addon">🎥</span>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movies..."
          aria-label="Search Movies"
          aria-describedby="icon-addon"
        />
        <button className="btn btn-primary" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
