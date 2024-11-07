// components/Popular.js
import React, { useState } from 'react';
import './Popular.css';
import MovieList from '../Movie/MovieList';

function Popular() {
  const [view, setView] = useState(true);

  return (
    <div className="popular">
      <h2>대세 콘텐츠</h2>
      <button onClick={() => setView(true)}>Table View</button> <button onClick={() => setView(true)}>Scroll View</button>
      <MovieList view={view}/>
    </div>
  );
}

export default Popular;
