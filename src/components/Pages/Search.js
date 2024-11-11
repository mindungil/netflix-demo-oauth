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
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // 초기 로딩 표시용 상태

  useEffect(() => {
    const loadGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);
    };
    loadGenres();
  }, []);

  const fetchAllMovies = async () => {
    setLoading(true);
    setIsEndOfList(false);
    setInitialLoading(true); // 초기 로딩 시작
    const allResults = [];

    for (let i = 1; i <= 30; i++) {
      const results = await searchMovies(query, i);
      if (results.length === 0) {
        break; // 페이지가 비어 있으면 루프 중지
      }
      allResults.push(...results);
    }

    setAllMovies(allResults);
    filterAndSetMovies(allResults);
    setLoading(false);
    setInitialLoading(false); // 초기 로딩 종료
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
    setIsEndOfList(filteredMovies.length <= 20 * page);
  };

  const loadMoreMovies = () => {
    if (loading || isEndOfList) return;
    setPage((prevPage) => prevPage + 1);
    filterAndSetMovies(allMovies);
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
    setIsEndOfList(false);
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
  }, [page, allMovies, selectedGenre, rating, sortOption, isEndOfList]);

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

      {initialLoading && <div className="loading-message">데이터가 많아, 30초 정도 걸릴 수 있습니다.</div>} {/* 초기 로딩 문구 */}
      <div className="search-results">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      
      {loading && <div className="loading">Loading...</div>}
      
      {/* 하단에 고정된 추가 문구 표시 */}
      <div className="scroll-message">
        {movies.length > 0 && (isEndOfList ? "마지막 페이지 입니다." : "페이지를 내리면 추가 목록이 나타납니다.")}
      </div>
    </div>
  );
}

export default Search;
