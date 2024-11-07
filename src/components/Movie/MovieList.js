//사용하지 않음


import React, { useEffect, useState, useCallback } from 'react';
import MovieItem from './MovieItem';
import { fetchMovies } from './ApiRequest';
import './MovieList.css';

const MovieList = ({ view }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Scroll View에서 추가 로드 가능 여부

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchMovies(page); // API 호출 (페이지 번호 전달)
      setMovies((prev) => [...prev, ...data]);
      setHasMore(data.length > 0); // 데이터가 있을 경우에만 더 로드
    } catch (err) {
      setError("영화 데이터를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  // 첫 로딩 또는 페이지가 변경될 때 영화 로드
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // Scroll View: 스크롤 이벤트로 페이지 증가
  useEffect(() => {
    if (!view || !hasMore) return;

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view, hasMore]);

  // Table View: 페이지네이션을 통한 데이터 로드
  const goToPage = (newPage) => {
    setPage(newPage);
  };

  if (loading && movies.length === 0) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {view ? (
        // Table View
        <div className="movie-list table-view">
          {movies.slice((page - 1) * 10, page * 10).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
          <div className="pagination">
            <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
              Previous
            </button>
            <span>Page {page}</span>
            <button onClick={() => goToPage(page + 1)} disabled={!hasMore}>
              Next
            </button>
          </div>
        </div>
      ) : (
        // Scroll View
        <div className="movie-list scroll-view">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
          {loading && <div className="loading">Loading...</div>}
          <button className="top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Top
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieList;
