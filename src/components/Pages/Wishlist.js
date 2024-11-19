import React, { useEffect, useState } from 'react';
import MovieItem from '../Movie/MovieItem';
import './Wishlist.css';

function Wishlist() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const moviesString = localStorage.getItem('wishlist');
    const storedMovies = moviesString ? JSON.parse(moviesString) : [];
    
    const moviesPerPage = 20;
    setTotalPages(Math.ceil(storedMovies.length / moviesPerPage));
    const startIdx = (currentPage - 1) * moviesPerPage;
    const endIdx = startIdx + moviesPerPage;
    setMovies(storedMovies.slice(startIdx, endIdx));
  }, [currentPage]);

  // currentPage 변경 시, 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-header">위시 리스트</h2>
      <div className="movie-list table-view">
        {movies.length ? (
          movies.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
      <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            이전
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            다음
          </button>
        </div> 
    </div>
  );
}

export default Wishlist;
