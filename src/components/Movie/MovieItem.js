import React from 'react';
import { API_URL, API_KEY, EMAGE_URL, EMAGE_BASE_URL } from '../config';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={EMAGE_URL + movie.poster_path}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieItem;
 