import React from 'react';
import { EMAGE_URL_200 } from '../config';
import './MovieList.css';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={EMAGE_URL_200 + movie.poster_path}
        alt={movie.title}
        className="zoom-in"
      />
      <h3>{movie.title}</h3>
      <p style={{margin: 0}}>평점 : {movie.vote_average.toFixed(1)}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieItem;
 