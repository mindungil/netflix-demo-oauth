// components/Popular.js
import React, { useState } from 'react';
import './Popular.css';
import MovieList from '../Movie/MovieList';

function Popular() {

  return (
    <div className="popular">
      <h2>대세 콘텐츠</h2>
      <MovieList />
    </div>
  );
}

export default Popular;
