import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem'; // 영화 항목을 표시할 컴포넌트

const MovieList = () => {
  const [movies, setMovies] = useState([]); // 상태 정의

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: 'YOUR_API_KEY', // TMDB API 키
            language: 'en-US',
            page: 1
          }
        });
        setMovies(response.data.results); // 응답 데이터 중 results를 movies 상태에 저장
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} /> // 각 영화를 MovieItem 컴포넌트에 매핑
      ))}
    </div>
  );
};

export default MovieList;
