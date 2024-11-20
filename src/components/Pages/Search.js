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
  const [initialLoading, setInitialLoading] = useState(false); // Initialize as false

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
    setInitialLoading(true); // Start initial loading
    const allResults = [];

    try{
    const searchList = JSON.parse(localStorage.getItem("searchlist")) || [];
    searchList.push(query);
    localStorage.setItem('searchlist', JSON.stringify(searchList));
    } catch(err) {
      console.err("검색어 저장 오류: ", err);
      throw err;
    }

    for (let i = 1; i <= 30; i++) {
      const results = await searchMovies(query, i);
      if (results.length === 0) {
        break; // Stop loop if no more results
      }
      allResults.push(...results);
    }

    setAllMovies(allResults);
    filterAndSetMovies(allResults);
    setLoading(false);
    setInitialLoading(false); // End initial loading
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
        </div>
        
        <div className='search-buttons'>
          <button onClick={handleSearch}>Search</button>
          <button className="small-button" onClick={handleResetFilters}>Reset</button>
        </div>

      {initialLoading && <div className="loading-animation">데이터가 많습니다. 30초 정도 걸릴 수 있습니다.</div>} {/* Initial loading message */}
      
      <div className="search-results">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <button
        className="top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
      </button>
      {loading && <div className="loading"></div>} {/* Loading animation at bottom */}
    </div>
  );
}

export default Search;
