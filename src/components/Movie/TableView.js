import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import { fetchMovies } from './ApiRequest';
import './MovieList.css';

const TableView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies(page);
        setMovies(data);
        setHasMore(data.length > 0);
      } catch (err) {
        setError("영화 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [page]);

  const goToPage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 페이지 상단으로 이동
  };

  if (loading && movies.length === 0) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-list table-view">
      {movies.map((movie) => (
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
  );
};

export default TableView;
