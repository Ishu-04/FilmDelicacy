import React from 'react';
import './ModalStyles.css';// optional for extra styling

const MovieDetailsModal = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ backgroundColor: 'green
      ' }}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{movie.Title}</h2>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
          alt={movie.Title}
          style={{ width: '200px', height: '300px', objectFit: 'cover' }}
        />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
