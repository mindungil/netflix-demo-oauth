// components/Search.js
import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([`Result for ${query}`]);
  };

  return (
    <div className="search">
      <h2>찾아보기</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}

export default Search;
