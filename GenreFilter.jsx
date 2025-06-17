// src/components/GenreFilter.jsx

import React from 'react';

const GenreFilter = ({ genres, selectedGenre, setSelectedGenre }) => {
  return (
    <div className="genre-filter">
      <h4>Filter by Genre:</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {genres.map((genre, idx) => (
          <button
            key={idx}
            className={`btn ${selectedGenre === genre ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
        {selectedGenre && (
          <button className="btn btn-warning" onClick={() => setSelectedGenre('')}>
            Reset Genre
          </button>
        )}
      </div>
    </div>
  );
};

export default GenreFilter;
