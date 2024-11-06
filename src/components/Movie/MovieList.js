import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem'; // 영화 항목을 표시할 컴포넌트
import ApiRequest from './ApiRequest';

const MovieList = () => {
  const [movies, setMovies] = useState([]); // 상태 정의

  setMovies(() => ApiRequest);
  
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} /> // 각 영화를 MovieItem 컴포넌트에 매핑
      ))}
    </div>
  );
};

export default MovieList;
