import React, { useEffect, useState } from 'react';
import './Home.css';
import { EMAGE_BASE_URL_1280 } from '../config';
import MovieItem from '../Movie/MovieItem';
import { fetchTrends } from '../Movie/ApiRequest';

function Home() {
  const [trend, setTrend] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [opacity, setOpacity] = useState(0); // 이미지 투명도 상태 추가
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrends();
        setTrend(movies);
        if (movies.length > 0) {
          setRandomMovie(movies[0]);
          setOpacity(1); // 첫 이미지의 투명도 설정
        }
      } catch (err) {
        console.error('API 호출 실패: ', err);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    if (trend.length > 0) {
      const intervalId = setInterval(() => {
        setOpacity(0); // 투명하게 만들고
        setTimeout(() => {
          setRandomMovie(trend[getRandomMovie(trend.length)]);  
          setOpacity(1); // 다음 이미지가 보이도록 투명도 조정
        }, 1000); // 1초 후 이미지 전환
      }, 7000); // 8초마다 전환

      return () => clearInterval(intervalId);
    }
  }, [randomMovie, trend]);

  const getRandomMovie = (len) => Math.floor(Math.random() * len);

  return (
    <div className="home">
      {randomMovie && randomMovie.poster_path && (
        <img 
          src={EMAGE_BASE_URL_1280 + randomMovie.backdrop_path}
          className="main-poster"
          style={{ opacity }} // opacity 상태 적용
        />
      )
      }
      <div className="movie">
        <p>{randomMovie.name}</p>
        <p>{randomMovie.overview}</p>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Home;
