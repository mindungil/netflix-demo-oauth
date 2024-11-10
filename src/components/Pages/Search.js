import React, { useEffect, useState } from 'react';
import './Search.css';
import '../Movie/MovieList.css';
import { searchMovies, fetchGenres } from '../Movie/ApiRequest';
import MovieItem from '../Movie/MovieItem';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [rating, setRating] = useState('');
  const [sortOption, setSortOption] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);
    };
    loadGenres();
  }, []);

  const handleSearch = async (pageNum = 1) => {
    const results = await searchMovies(query, pageNum);
    let filteredMovies = results;

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre_ids.includes(parseInt(selectedGenre))
      );
    }

    if (rating) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.vote_average >= parseFloat(rating)
      );
    }

    if (sortOption === 'popularity.desc') {
      filteredMovies = filteredMovies.sort((a, b) => b.popularity - a.popularity);
    } else if (sortOption === 'release_date.desc') {
      filteredMovies = filteredMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortOption === 'vote_average.desc') {
      filteredMovies = filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
    }

    setMovies(filteredMovies.slice(0, 20));
    setHasNextPage(filteredMovies.length === 20);
  };

  const handleResetFilters = () => {
    setQuery('');
    setSelectedGenre('');
    setRating('');
    setSortOption('popularity.desc');
    setPage(1);
    handleSearch(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    handleSearch(newPage);
  };

  return (
    <div className="search">
      <h2>찾아보기</h2>
      <div className="search-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">모든 장르</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">모든 평점</option>
          <option value="8">8점 이상</option>
          <option value="6">6점 이상</option>
          <option value="4">4점 이상</option>
        </select>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="popularity.desc">인기순</option>
          <option value="release_date.desc">최신 개봉순</option>
          <option value="vote_average.desc">평점순</option>
        </select>
        <button onClick={() => handleSearch(1)}>Search</button>
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
      <div className={`search-results ${page === 1 ? 'page-1' : ''}`}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          이전
        </button>
        <span>{page}</span>
        <button onClick={() => handlePageChange(page + 1)} disabled={!hasNextPage}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Search;
