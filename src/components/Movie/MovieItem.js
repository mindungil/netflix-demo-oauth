import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieItem;
