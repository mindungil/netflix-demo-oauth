import React, { useEffect, useState } from 'react';
import './Search.css';
import '../Movie/MovieList.css';
import { searchMovies, fetchGenres } from '../Movie/ApiRequest';
import MovieItem from '../Movie/MovieItem';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [rating, setRating] = useState('');
  const [sortOption, setSortOption] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);
    };
    loadGenres();
  }, []);

  const fetchAllMovies = async () => {
    setInitialLoading(true); // 초기 로딩 상태를 시작합니다.
    setLoading(true);
    const allResults = [];

    for (let i = 1; i <= 30; i++) {
      const results = await searchMovies(query, i);
      allResults.push(...results);
    }

    setAllMovies(allResults);
    filterAndSetMovies(allResults);
    setLoading(false);
    setInitialLoading(false); // 로딩이 완료되면 문구가 사라지도록 합니다.
  };

  const filterAndSetMovies = (movies) => {
    let filteredMovies = movies;

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

    setMovies(filteredMovies.slice(0, 20 * page));
  };

  const loadMoreMovies = () => {
    if (loading) return;
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
    filterAndSetMovies(allMovies);
    setLoading(false);
  };

  const handleSearch = () => {
    setMovies([]);
    setPage(1);
    fetchAllMovies();
  };

  const handleResetFilters = () => {
    setQuery('');
    setSelectedGenre('');
    setRating('');
    setSortOption('popularity.desc');
    setPage(1);
    setMovies([]);
    setAllMovies([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        loadMoreMovies();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, allMovies, selectedGenre, rating, sortOption]);

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
        <button onClick={handleSearch}>Search</button>
        <button className="small-button" onClick={handleResetFilters}>Reset</button>
      </div>

      {/* 초기 로딩 중일 때 표시하는 안내 문구 */}
      {initialLoading && (
        <div className="loading-message">
          데이터가 많아 30초 정도 걸릴 수 있습니다.
        </div>
      )}

      <div className="search-results">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      
      {/* 추가 로딩 시 로딩 애니메이션 표시 */}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}

export default Search;
