import React, { useEffect, useState } from 'react';
import './Home.css';
import { EMAGE_BASE_URL_1280 } from '../config';
import MovieItem from '../Movie/MovieItem';
import { fetchTrends } from '../Movie/ApiRequest';

function Home() {
  const [trend, setTrend] = useState([]); // 빈 배열로 초기화
  const [randomMovie, setRandomMovie] = useState(null); // null로 초기화
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrends();
        setTrend(movies);
        if (movies.length > 0) {
          setRandomMovie(movies[0]);
        }
      } catch (err) {
        console.error('API 호출 실패: ', err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (trend.length > 0) { // trend가 비어 있지 않을 때만 실행
      const intervalId = setTimeout(() => {
        setRandomMovie(trend[getRandomMovie(trend.length)]);  
      }, 8000);

      return () => clearTimeout(intervalId); // 컴포넌트가 unmount될 때 정리
    }
  }, [randomMovie]);

  const getRandomMovie = (len) => Math.floor(Math.random() * len);

  return (
    <div className="home">
      {randomMovie && randomMovie.poster_path && ( // randomMovie가 null이 아니고 poster_path가 있을 때만 표시
        <img 
          src={EMAGE_BASE_URL_1280 + randomMovie.backdrop_path}
          className="main-poster"
        />
      )}
      <br />
{/* 
      {trend.length > 0 && trend.map((movie) => ( // trend가 비어 있지 않을 때만 map 실행
        <MovieItem key={movie.id} movie={movie} />
      ))} */}
    </div>
  );
}

export default Home;
