import React, { useEffect, useState, useCallback } from 'react';
import MovieItem from './MovieItem';
import { fetchMovies } from './ApiRequest';
import './MovieList.css';

const ScrollView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchMovies(page);
      setMovies((prev) => [...prev, ...data]);
      setHasMore(data.length > 0);
    } catch (err) {
      setError("영화 데이터를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        if (!loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  if (loading && movies.length === 0) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-list scroll-view">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      {loading && <div className="loading">Loading...</div>}
      <button
        className="top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
          
      </button>
    </div>
  );
};

export default ScrollView;
