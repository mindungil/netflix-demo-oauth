// components/Popular.js
import React, { useState } from 'react';
import './Popular.css';
import MovieList from '../Movie/MovieList';

function Popular() {
  const [items] = useState(["Movie 1", "Movie 2", "Movie 3"]);

  return (
    <div className="popular">
      <h2>대세 콘텐츠</h2>
      <MovieList />
    </div>
  );
}

export default Popular;
