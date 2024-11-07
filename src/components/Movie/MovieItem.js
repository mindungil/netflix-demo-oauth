import React from 'react';
import { EMAGE_URL_300 } from '../config';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={EMAGE_URL_300 + movie.poster_path}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>평점 : {movie.vote_average.toFixed(1)}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieItem;
 