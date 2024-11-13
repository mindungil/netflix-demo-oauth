import React, { useEffect, useState } from 'react';
import './Home.css';
import { EMAGE_BASE_URL_1280 } from '../config';
import MovieItem from '../Movie/MovieItem';
import { fetchTrends } from '../Movie/ApiRequest';

function Home() {
  const [trend, setTrend] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrends();
        setTrend(movies);
        if (movies.length > 0) {
          setRandomMovie(movies[0]);
          setOpacity(1);
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
        setOpacity(0);
        setTimeout(() => {
          setRandomMovie(trend[getRandomMovie(trend.length)]);
          setOpacity(1);
        }, 1000);
      }, 7000);

      return () => clearInterval(intervalId);
    }
  }, [trend]);

  const getRandomMovie = (len) => Math.floor(Math.random() * len);

  return (
    <div className="home">
      <h3 className="text-pop-up-top">GILPLIX에 오신것을 환영합니다</h3>
      {randomMovie && randomMovie.poster_path && (
        <img 
          src={EMAGE_BASE_URL_1280 + randomMovie.backdrop_path}
          className="main-poster"
          style={{ opacity }}
          alt={randomMovie.title || "Movie Poster"}
        />
      )}
      <div className="poster-inform">
        {/* randomMovie가 null이 아닐 때만 title과 overview를 표시 */}
        {randomMovie ? (
          <>
            <p>{randomMovie.title}</p>
            <p>{randomMovie.overview}</p>
          </>
        ) : (
          <p>영화를 불러오는 중...</p>
        )}
      </div>
      <br />
      <br />
    </div>
  );
}


export default Home;
