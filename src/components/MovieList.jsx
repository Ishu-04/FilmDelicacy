import React from 'react';

const MovieList = ({ movies, liked, onLike, onCardClick }) => {
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="card shadow"
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={() => onCardClick(movie.imdbID)}
        >
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
            className="card-img-top"
            alt={movie.Title}
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="card-body text-center">
            <h5>{movie.Title}</h5>
            <p>{movie.Year}</p>
            <button
              className={`btn ${liked[movie.imdbID] ? 'btn-success' : 'btn-outline-primary'}`}
              onClick={(e) => {
                e.stopPropagation();
                onLike(movie.imdbID);
              }}
            >
              {liked[movie.imdbID] ? 'Liked 💖' : 'Like'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
