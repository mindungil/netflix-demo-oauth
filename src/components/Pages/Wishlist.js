import React, { useEffect, useState } from 'react';
import { MovieItem2 } from '../Movie/MovieItem';
import './Wishlist.css';
import usePage from '../CustomHook/usePage';

function Wishlist() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = usePage();
  const [totalPages, setTotalPages] = useState(1);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const moviesString = localStorage.getItem('wishlist');
    const storedMovies = moviesString ? JSON.parse(moviesString) : [];
    
    const moviesPerPage = 20;
    setTotalPages(Math.ceil(storedMovies.length / moviesPerPage));
    const startIdx = (currentPage - 1) * moviesPerPage;
    const endIdx = startIdx + moviesPerPage;
    setMovies(storedMovies.slice(startIdx, endIdx));
  }, [currentPage, update]);

  // currentPage 변경 시, 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setMovieUpdate = () => {
    setUpdate(!update);
  }

  return (
    <div className="wishlist-container">
      <div className="movie-list table-view">
        {movies.length ? (
          movies.map((movie, index) => (
            <div onClick={() => setMovieUpdate()}>
              <MovieItem2 key={index} movie={movie} />
            </div>
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
