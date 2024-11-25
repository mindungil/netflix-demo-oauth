import React from 'react';
import { EMAGE_URL_200, checkLocalStorage } from '../../Util/config';

const createStarRating = (score) => {
  if (score < 0 || score > 10) {
    console.error("점수는 0에서 10 사이여야 합니다.");
    return null;
  }

  const maxStars = 5; // 별의 총 개수
  const filledPercentage = (score / 10) * 100; // 10점 기준으로 비율 계산

  return (
    <div className="rating">
      <div className="stars" style={{ width: `${filledPercentage}%` }}>
        {"★".repeat(maxStars)}
      </div>
      <div className="background-stars">
        {"★".repeat(maxStars)}
      </div>
    </div>
  );
};

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={EMAGE_URL_200 + movie.poster_path}
        alt={movie.title}
        className="zoom-in"
        onClick={() => checkLocalStorage(movie)}
      />
      {/* <h3>{movie.title}</h3> */}
      {/* <p style={{margin: 0}}>평점 : {movie.vote_average.toFixed(1)}</p>
      <p>{movie.release_date}</p> */}
    </div>
  );
};

export const MovieItem2 = ({movie}) => {
  return (
    <div className="movie-item">
      <img
        src={EMAGE_URL_200 + movie.poster_path}
        alt={movie.title}
        className="zoom-in"
        onClick={() => checkLocalStorage(movie)}
      />
      <h3 className={'text-shadow-pop-bottom'}>{movie.title}</h3>
      <p style={{margin: 0, paddingTop: 0}}>{createStarRating(movie.vote_average.toFixed(1))}</p>
      {/* <p style={{margin: 0, paddingTop: 0.6}} className='release_date'>{movie.release_date}</p> */}
    </div>
  );
}

export default MovieItem;