import React from 'react';

const MovieCard = ({ movie, liked, onLike }) => {
  return (
    <div className="card h-100 shadow-sm">
 <img
  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
  alt={movie.Title}
  className="card-img-top"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

  }}
/>


      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <button
          className={`btn ${liked ? 'btn-success' : 'btn-outline-primary'} mt-auto`}
          onClick={() => onLike(movie.imdbID)}
        >
          {liked ? 'Liked ❤️' : 'Like 🤍'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
