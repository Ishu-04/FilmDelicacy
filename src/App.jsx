import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FilterBar from './components/FilterBar';
import MovieDetailsModal from './components/MovieDetailsModal';
import GenreFilter from './components/GenreFilter';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [error, setError] = useState('');
  const [liked, setLiked] = useState({});
  const [sortOrder, setSortOrder] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  const popularKeywords = [
    "Raaz Reboot", "1920 London", "Avengers", "Harry Potter", "Frozen", "Iron Man",
    "Pirates", "Chennai Express", "Dil", "Batman",
    "Star Wars", "Transformers", "Minions"
  ];

  const fetchMovieDetails = async (id) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=3fa2df22&i=${id}`);
    const data = await res.json();
    return data.Response === "True" ? data : null;
  };

  const fetchMoviesForKeyword = async (keyword) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=3fa2df22&s=${keyword}`);
      const data = await response.json();
      return data.Response === "True" ? data.Search : [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const fetchAllPopularMovies = async () => {
      let allMovies = [];
      for (const keyword of popularKeywords) {
        const moviesForKeyword = await fetchMoviesForKeyword(keyword);
        const detailedMovies = await Promise.all(
          moviesForKeyword.map(movie => fetchMovieDetails(movie.imdbID))
        );
        allMovies = [...allMovies, ...detailedMovies.filter(Boolean)];
      }
      setDefaultMovies(allMovies);
    };
    fetchAllPopularMovies();
  }, []);

  const handleSearch = async () => {
    setError('');
    setSortOrder('');
    setSelectedGenre('');

    if (query.trim() === '') {
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=3fa2df22&s=${query}`);
      const data = await response.json();
      if (data.Response === "True") {
        const detailedMovies = await Promise.all(
          data.Search.map(movie => fetchMovieDetails(movie.imdbID))
        );
        setMovies(detailedMovies.filter(Boolean));
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch {
      setError("Error fetching movies.");
    }
  };

  const handleCardClick = async (id) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=3fa2df22&i=${id}&plot=full`);
    const data = await res.json();
    if (data.Response === "True") setSelectedMovie(data);
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayMovies = query.trim() === '' ? defaultMovies : movies;

  const allGenres = Array.from(
    new Set(
      displayMovies.flatMap(movie =>
        movie?.Genre?.split(',').map(g => g.trim()) || []
      )
    )
  );

  const applyFilters = (movies) => {
    let filtered = [...movies];

    if (selectedGenre) {
      filtered = filtered.filter(movie =>
        movie?.Genre?.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (sortOrder === "new") {
      filtered = filtered.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sortOrder === "old") {
      filtered = filtered.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (sortOrder === "medium") {
      filtered = filtered.filter(movie => {
        const year = parseInt(movie.Year);
        return year >= 2000 && year <= 2015;
      });
    }

    return filtered;
  };

  const filteredMovies = applyFilters(displayMovies);
  const themeClass = isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <div className={`container-fluid py-4 min-vh-100 ${themeClass}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🎬 Movie Suggester</h2>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setIsDarkTheme(prev => !prev)}
        >
          {isDarkTheme ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      <FilterBar
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <GenreFilter
        genres={allGenres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <div className="text-center mb-4">
        <button
          className="btn btn-warning"
          onClick={() => {
            setSortOrder('');
            setSelectedGenre('');
          }}
        >
          Reset Filters
        </button>
      </div>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {filteredMovies.length > 0 ? (
        <MovieList
          movies={filteredMovies}
          liked={liked}
          onLike={toggleLike}
          onCardClick={handleCardClick}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        !error && <p className="text-center">No movies to display.</p>
      )}

      {selectedMovie && (
        <MovieDetailsModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
